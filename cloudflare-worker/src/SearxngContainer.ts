import { Container } from "@cloudflare/containers";

export class SearxngContainer extends Container {
  defaultPort = 8080;     // uwsgi inside the official image
  sleepAfter  = "5m";     // keep container warm for 5 minutes

  // optional safety-net: ensure Python finished booting
  async onStart() {
    await this.startAndWaitForPorts([8080]);   // ⬅ blocks until port is live
  }
}
