import { Container, getContainer } from "@cloudflare/containers";

export interface Env {
  SEARXNG_CONTAINER: DurableObjectNamespace;
}

export class SearxngContainer extends Container<Env> {
  // Port the container listens on (default: 8080)
  defaultPort = 8080;
  // Environment variables passed to the container
  envVars = {
    SEARXNG_BASE_URL: "https://example.com/",
  };
}

export default {
  async fetch(request: Request, env: Env) {
    const container = getContainer(env.SEARXNG_CONTAINER);
    return container.fetch(request);
  },
};
