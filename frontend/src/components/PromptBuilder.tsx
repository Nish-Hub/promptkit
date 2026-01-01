import { useState } from "react";
import { compilePrompt } from "../api";

export default function PromptBuilder() {
  const [role, setRole] = useState("");
  const [task, setTask] = useState("");
  const [context, setContext] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  async function run() {
    setLoading(true);
    try {
      const result = await compilePrompt({
        role,
        task,
        context,
        constraints: [],
        outputFormat: ["Architecture", "Flow", "Pseudocode"]
      });
      setOutput(result);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      {/* Input Card */}
      <div className="bg-white rounded-xl shadow p-6 space-y-4">
        <h2 className="text-xl font-semibold">Prompt Builder</h2>

        <input
          className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-black"
          placeholder="Role (e.g. Senior Backend Engineer)"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <textarea
          className="w-full border rounded px-3 py-2 min-h-[100px] focus:ring-2 focus:ring-black"
          placeholder="Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <textarea
          className="w-full border rounded px-3 py-2 min-h-[100px] focus:ring-2 focus:ring-black"
          placeholder="Context (optional)"
          value={context}
          onChange={(e) => setContext(e.target.value)}
        />

        <button
          onClick={run}
          disabled={loading}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 disabled:opacity-50"
        >
          {loading ? "Compiling..." : "Compile"}
        </button>
      </div>

      {/* Output */}
      {output && (
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-semibold mb-2">Output</h3>
          <pre className="whitespace-pre-wrap text-sm">{output}</pre>
        </div>
      )}
    </div>
  );
}
