import { Container, getContainer } from "@cloudflare/containers";

/** Defines how CF should start the SearXNG container */
export class SearxngContainer extends Container {
  // SearXNG listens on 8080 inside the image
  defaultPort = 8080;
}

export interface Env {
  SEARXNG: DurableObjectNamespace<SearxngContainer>;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    // Use a single global instance; change the "global" id if you need sharding
    const instance = getContainer(env.SEARXNG, "global");
    return instance.fetch(request);
  },
};
