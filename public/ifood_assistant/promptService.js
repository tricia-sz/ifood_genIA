export class PromptService {
  #messages = [];
  #session = null;
  #isRemote = false;

  async init(initialPrompts) {
    if (!window.LanguageModel) {
      console.warn("⚠️ Prompt API indisponível — usando modo remoto.");
      this.#isRemote = true;
      this.#messages.push({
        role: "system",
        content: initialPrompts,
      });
      return "Modo remoto ativado";
    }

    this.#messages.push({
      role: "system",
      content: initialPrompts,
    });

    return this.#createSession();
  }

  async #createSession() {
    this.#session = await LanguageModel.create({
      initialPrompts: this.#messages,
      expectedInputLanguages: ["pt"],
      expectedOutputLanguages: ["pt"], 
    });

    return this.#session;
  }
  async *prompt(text, signal) {
    this.#messages.push({
      role: "user",
      content: text,
    });

    if (!this.#isRemote) {
      const stream = this.#session.promptStreaming(this.#messages, { signal });
      for await (const chunk of stream) {
        if (signal.aborted) break;
        yield chunk;
      }
      return;
    }

    const response = await fetch("https://sua-api-remota.com/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: this.#messages }),
      signal,
    });

    if (!response.ok) {
      console.error("❌ Erro na API remota:", response.statusText);
      yield "Desculpe, houve um problema ao acessar o servidor.";
      return;
    }

    // Lê o stream de texto do servidor (modo streaming real)
    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { done, value } = await reader.read();
      if (done || signal.aborted) break;
      yield decoder.decode(value, { stream: true });
    }
  }
}
