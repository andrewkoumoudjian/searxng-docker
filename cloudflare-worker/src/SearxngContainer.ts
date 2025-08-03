import { Container } from "@cloudflare/containers";

export class SearxngContainer extends Container {
  defaultPort = 8080;     // uwsgi inside the official image
  sleepAfter  = "5m";     // mirrors wrangler.toml

  // optional safety-net: ensure Python finished booting
  async onStart() {
    await this.startAndWaitForPorts([8080]);   // ⬅ blocks until port is live
  }
}
