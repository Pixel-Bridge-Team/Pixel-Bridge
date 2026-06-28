Code Review Guidelines

Thank you for reviewing this Pull Request.

The goal of code review is to maintain a high-quality, secure, readable, and maintainable codebase.

A review should focus on improving the code, not criticizing the author.

---

General Review Principles

Reviewers should check:

- Correctness
- Code quality
- Security
- Performance
- Maintainability
- Testing
- Documentation
- Project consistency

Before approving a Pull Request, make sure the change is ready for production.

---

1. Functionality Review

Check:

- Does the code solve the intended problem?
- Does the feature work as expected?
- Are edge cases handled?
- Are error cases handled properly?

Questions:

- What happens if the input is invalid?
- What happens if the API fails?
- What happens with empty or unexpected data?

---

2. Code Quality

Review:

- Is the code readable?
- Are names meaningful?
- Is the logic easy to understand?
- Is duplicated code avoided?

Avoid:

- Large unnecessary functions
- Complex logic without explanation
- Unused code
- Temporary debugging code

Example:

Bad:

const x = getData();

Good:

const userProfile = getUserProfile();

---

3. Next.js Specific Review

For Next.js changes, check:

Components

- Are components reusable?
- Is the component placed in the correct location?
- Is client-side rendering used only when needed?

Avoid unnecessary:

"use client"

---

Server and Client Components

Review:

- Is server rendering preserved where possible?
- Are client components required?

---

Data Fetching

Check:

- Proper loading states
- Proper error handling
- Correct caching strategy
- No unnecessary API requests

---

4. Security Review

Review every change for security issues.

Check:

Secrets

Never allow:

- API keys
- Passwords
- Tokens
- Private credentials

inside the code.

Use:

.env.local

and:

process.env

---

User Input

Check:

- Input validation exists
- User data is sanitized
- Unsafe operations are avoided

---

Authentication and Authorization

Verify:

- Users can only access allowed resources
- Protected routes are actually protected
- Permissions are checked on the server

---

5. Performance Review

Check:

- Unnecessary re-renders
- Large bundle size increases
- Expensive operations
- Inefficient database queries
- Unoptimized images

Ask:

- Can this be simpler?
- Can this run less often?
- Can this load later?

---

6. Testing Requirements

A Pull Request should include tests when needed.

Review:

- Are tests added?
- Do existing tests pass?
- Are important cases covered?

Before approval:

npm run lint

and:

npm run build

should pass.

---

7. Pull Request Size

Prefer small and focused Pull Requests.

Avoid:

- Huge PRs
- Multiple unrelated changes
- Mixing refactoring with new features

A good PR should be easy to understand and review.

---

8. Review Comments

Good review comments:

- Explain the problem
- Suggest improvements
- Be respectful

Example:

Good:

"Could we move this logic into a separate function to make this component easier to maintain?"

Avoid:

"Wrong"

"Bad code"

---

9. Approval Rules

A Pull Request can be approved only when:

- CI checks pass
- Required reviews are completed
- Review comments are resolved
- No critical issues remain

---

10. Changes That Need Extra Attention

Pay extra attention to changes involving:

- Authentication
- Authorization
- Payments
- Database migrations
- Environment variables
- Security-related code
- Infrastructure
- Deployment configuration

---

11. Before Approving Checklist

Reviewer checklist:

- [ ] Code is understandable
- [ ] Code follows project standards
- [ ] No security issues found
- [ ] No secrets are exposed
- [ ] Tests are added or verified
- [ ] Documentation updated if needed
- [ ] Performance impact considered
- [ ] CI checks are passing

---

Final Rule

Review the code as if you will maintain it in the future.

Prefer:

- Simple solutions
- Clean architecture
- Secure implementation
- Long-term maintainability