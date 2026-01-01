🚀 PromptKit

PromptKit is a lightweight, extensible prompt engineering playground and chat UI framework built with React, Vite, Tailwind, and shadcn/ui.
It provides a clean foundation for building AI-powered applications with structured prompts, chat-style interactions, and future support for streaming, agents, and backend orchestration.

✨ Features

✅ Chat-style interface (ChatGPT-like UI)
✅ Clean, modern UI using Tailwind + shadcn/ui
✅ Message-based architecture (user / assistant)
✅ Modular and extensible frontend
✅ Ready for backend integration
✅ GitHub Pages–friendly build
✅ Type-safe (TypeScript)
✅ Easily extensible for agents, streaming & presets

🧱 Tech Stack
Frontend

React 18

Vite

TypeScript

Tailwind CSS

shadcn/ui

Radix UI

class-variance-authority

tailwind-merge

Planned Backend (optional)

Spring Boot

REST / SSE APIs

LLM adapters (OpenAI / Ollama / local)

Agent orchestration

📁 Project Structure
promptkit/
├── src/
│   ├── components/
│   │   ├── Chat.tsx
│   │   ├── ChatInput.tsx
│   │   ├── ChatMessage.tsx
│   │   └── ui/                 # shadcn components
│   ├── lib/
│   │   └── utils.ts
│   ├── types/
│   │   └── chat.ts
│   ├── api.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md

🚀 Getting Started
1️⃣ Clone the repo
git clone https://github.com/Nish-Hub/promptkit.git
cd promptkit

2️⃣ Install dependencies
npm install

3️⃣ Run locally
npm run dev


Open:

http://localhost:5173

🌍 Deploy to GitHub Pages
Build & deploy:
npm run deploy


Your app will be available at:

https://nish-hub.github.io/promptkit/

🔌 Backend Integration

The frontend expects a backend endpoint:

POST /api/prompts/compile


Example payload:

{
  "role": "assistant",
  "task": "Explain Kafka consumer groups",
  "context": "",
  "constraints": [],
  "outputFormat": []
}

Example frontend call:
fetch(`${VITE_API_URL}/api/prompts/compile`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload)
});

🧠 Chat Model
export type Role = "user" | "assistant";

export interface ChatMessage {
  role: Role;
  content: string;
}

🧩 Current Capabilities

Message-based UI

User / assistant alignment

Scroll-to-bottom behavior

Keyboard submit

Clean component separation

Ready for streaming

🚧 Roadmap
Phase 1 — UX Enhancements

 Streaming responses (typing effect)

 Message persistence

 Prompt presets

 Dark mode toggle

 Sidebar layout

Phase 2 — Intelligence

 Backend streaming (SSE)

 OpenAI / Ollama integration

 Tool calling

 Agent orchestration

 Memory layer

Phase 3 — Platform

 Authentication

 Multi-session chats

 User profiles

 Saved prompts

 Deployment templates

🧠 Philosophy

PromptKit is designed as a developer-first experimentation platform — not just a UI.

It aims to:

make prompt engineering structured

encourage composability

support agent workflows

stay framework-agnostic on the backend

stay simple on the frontend

🧑‍💻 Author

Nishant (Nish-Hub)
Engineering · Systems · Distributed Design
GitHub: https://github.com/Nish-Hub

⭐ Contributing

PRs, ideas, and discussions are welcome.

LLM infra

feel free to contribute.
