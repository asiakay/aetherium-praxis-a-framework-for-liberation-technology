# Aetherium Praxis: A Framework for Liberation Technology

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/asiakay/aetherium-praxis-a-framework-for-liberation-technology)

Aetherium Praxis is a visually stunning and deeply interactive web application designed to showcase a framework for 'liberation technology'. The application presents four core 'value seeds': Reciprocal Economies, Liberation Logic, Sacred Systems, and Humanized Interfaces. The main dashboard provides an elegant overview of these seeds, inviting exploration. Clicking on a seed reveals a detailed view with its core principles, practical alignments, and ethical protocols, all presented with exceptional clarity and visual hierarchy.

A core feature is the integrated AI assistant, powered by Cloudflare Agents, which allows users to engage in a dialogue about the framework, asking complex questions and exploring the interconnections between concepts. This turns a static set of principles into a dynamic, explorable knowledge base. The entire experience is wrapped in a sophisticated, minimalist aesthetic with fluid animations and a serene color palette, designed to be a piece of interactive art that is both informative and inspiring.

## Key Features

-   **Interactive Framework:** Explore the four core 'value seeds' of the Aetherium Praxis through a beautiful and intuitive interface.
-   **Detailed Exploration:** Dive deep into each seed to understand its core principle, praxis alignments, operational futurity, and ethical protocols.
-   **Integrated AI Assistant:** Engage in a dynamic conversation with an AI powered by Cloudflare Agents, grounded in the framework's principles.
-   **Visually Stunning Design:** A minimalist, sophisticated, and serene aesthetic with fluid animations and a carefully chosen color palette.
-   **Responsive Perfection:** A flawless experience across all device sizes, from mobile to desktop.
-   **Serverless Backend:** Built on the robust and scalable Cloudflare Workers platform.

## Technology Stack

-   **Frontend:** React, Vite, TypeScript, Tailwind CSS
-   **UI Components:** shadcn/ui, Radix UI
-   **Animation:** Framer Motion
-   **Icons:** Lucide React
-   **State Management:** Zustand
-   **Routing:** React Router
-   **Backend:** Cloudflare Workers, Hono
-   **Stateful Agents:** Cloudflare Agents (Durable Objects)
-   **AI Integration:** Cloudflare AI Gateway

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   [Bun](https://bun.sh/) installed on your machine.
-   A [Cloudflare account](https://dash.cloudflare.com/sign-up).
-   [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) installed and authenticated.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/aetherium-praxis.git
    cd aetherium-praxis
    ```

2.  **Install dependencies:**
    ```bash
    bun install
    ```

3.  **Set up environment variables:**
    Create a `.dev.vars` file in the root of the project for local development. You will need to get your Account ID and create an AI Gateway.

    ```ini
    # .dev.vars
    CF_AI_BASE_URL="https://gateway.ai.cloudflare.com/v1/YOUR_ACCOUNT_ID/YOUR_GATEWAY_NAME/openai"
    CF_AI_API_KEY="YOUR_CLOUDFLARE_API_KEY"
    ```

    Replace `YOUR_ACCOUNT_ID`, `YOUR_GATEWAY_NAME`, and `YOUR_CLOUDFLARE_API_KEY` with your actual Cloudflare credentials.

## Development

To start the local development server, which includes both the Vite frontend and the Cloudflare Worker backend, run:

```bash
bun dev
```

This will start the application on `http://localhost:3000`. The frontend will automatically reload as you make changes. The worker backend is also running locally, and the frontend is configured to proxy API requests to it.

## Deployment

This project is designed for easy deployment to Cloudflare Pages.

1.  **Build the application:**
    ```bash
    bun run build
    ```

2.  **Deploy to Cloudflare:**
    The `deploy` script in `package.json` handles both the build and deployment process.
    ```bash
    bun run deploy
    ```
    Wrangler will guide you through the deployment process. It will deploy the static assets to Cloudflare Pages and the worker functions automatically.

Alternatively, you can deploy directly from your GitHub repository with a single click.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/asiakay/aetherium-praxis-a-framework-for-liberation-technology)

## AI Assistant Notice

Please be aware that the integrated AI assistant relies on services that have usage limits. The number of requests that can be made to the AI servers is shared across all users of this application and is subject to rate limiting. Please use the chat feature responsibly.