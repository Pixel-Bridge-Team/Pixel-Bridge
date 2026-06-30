"use client";

import { useState, FormEvent } from "react";
import { Send } from "lucide-react";

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: integrate backend newsletter endpoint
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
        Newsletter
      </h4>
      <div className="flex items-center bg-[#1E293B] rounded-full overflow-hidden border border-white/10 focus-within:border-hoverBlue transition">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 bg-transparent px-5 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className="bg-gradient-primary px-5 py-3 hover:opacity-90 transition"
        >
          <Send size={18} className="text-white" />
        </button>
      </div>
    </form>
  );
};

export default NewsletterForm;
