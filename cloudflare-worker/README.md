# SearxNG Cloudflare Worker

This project runs the [SearxNG](https://github.com/searxng/searxng) search engine inside a [Cloudflare Container](https://developers.cloudflare.com/containers/).
It is based on the Cloudflare containers template and wires the Worker runtime to a SearxNG container listening on port 8080.

## Getting Started

Install dependencies and generate type definitions:

```bash
npm install
npm run cf-typegen
```

Start a local development server:

```bash
npm run dev
```

## Deploying

Deploy the worker and container to Cloudflare:

```bash
npm run deploy
```

The worker forwards all requests to the SearxNG container. Configuration files in the `searxng/` directory are copied into the container at build time.
