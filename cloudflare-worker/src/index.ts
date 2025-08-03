import { SearxngContainer } from "./SearxngContainer";

export interface Env {
  SEARXNG: DurableObjectNamespace;
}

export default {
  async fetch(request: Request, env: Env) {
    // single-instance pattern
    const id   = env.SEARXNG.idFromName("singleton");
    const searx = env.SEARXNG.get(id);      // autostart is fine

    // OPTIONAL: explicit warm-up (uncomment if you prefer it here)
    // await searx.startAndWaitForPorts([8080]);

    // proxy everything
    return searx.fetch(request);
  }
};
