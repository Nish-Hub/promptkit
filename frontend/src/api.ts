export async function compilePrompt(body: any) {
  const res = await fetch("http://localhost:8080/api/prompts/compile", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });

  return res.text();
}
