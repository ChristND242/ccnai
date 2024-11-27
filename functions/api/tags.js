export function onRequest(_context) {
  const models = [
    { name: "@ccnai/meta/llama-3.1-8b-instruct" },
    { name: "@ccnai/mistral/mistral-7b-instruct-v0.2" },
    { name: "@ccnai/microsoft/phi-2" },
    { name: "@ccnai/qwen/qwen1.5-14b-chat-awq" },
    { name: "@ccnai/google/gemma-7b-it" },
  ];
  return Response.json({ models });
}
