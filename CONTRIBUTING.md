# Contributing Guide

Thank you for contributing to this project.

This document explains the workflow, coding standards, branch rules, commit rules, and pull request process.

---

# Getting Started

Before contributing, make sure you have:

- Node.js installed
- npm installed
- Access to the repository

Install dependencies:

npm install
Run the development server:

npm run dev
Run lint:

npm run lint
Build the project:

npm run build
---

# Branch Workflow

The main branch is protected.

Direct commits and direct pushes to main are not allowed.

All changes must go through Pull Requests.

## Branch Naming

Use this format:

type/short-description
Examples:

feature/user-authentication
feature/dashboard-page
fix/navbar-mobile-issue
docs/update-readme
refactor/api-cleanup
Allowed branch types:

- feature
- fix
- docs
- refactor
- test
- chore

---

# Commit Convention

This project follows Conventional Commits.

## Format

type: description
Example:

feat: add user authentication
---

# Commit Types

## feat

For new features.

Example:

feat: add user profile page
---

## fix

For bug fixes.

Example:

fix: fix login validation error
---

## docs

For documentation changes.

Example:

docs: update installation guide
---

## style

For formatting or styling changes.

Example:

style: format components
---

## refactor

For code improvements without changing functionality.

Example:

refactor: simplify api service
---


## chore

For maintenance tasks.

Example:

chore: configure github actions
---

# Commit Rules

Please follow these rules:

- Keep commits small and focused
- Use clear descriptions
- One commit should represent one logical change
- Write commits in present tense

Good:

feat: add user dashboard
fix: resolve image loading issue
Bad:

update
changes
fixed stuff
new code
test
---

# Pull Request Guidelines

Before creating a Pull Request:

- Test your changes
- Run lint
- Run build
- Review your own code
- Remove unnecessary files
- Make sure no secrets are included

Every Pull Request should contain:

- Clear description
- Related issue (if available)
- Testing information
- Screenshots for UI changes

---

# Pull Request Review Process

A Pull Request must:

1. Pass GitHub Actions checks
2. Receive required approvals
3. Resolve review comments
4. Follow project standards

After approval, changes can be merged into main.

---

# Code Style

Please:

- Follow the existing project structure
- Keep components reusable
- Write clean and readable code
- Avoid duplicated code
- Use meaningful names

---

# Security

Never commit:

- API keys
- Passwords
- Tokens
- Private credentials

Use environment variables:

.env.local
For required variables create:

.env.example
---

# Issue Reporting

When creating an issue:

Include:

- Clear title
- Description
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots if needed

---

# Security Vulnerabilities

Do not report security issues through public issues.

Please report security problems privately.


---

# Code of Conduct

Please be respectful and professional.

We welcome:

- Constructive feedback
- Collaboration
- Clean code
- Good engineering practices

Thank you for contributing.