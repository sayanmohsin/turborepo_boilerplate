# Turborepo Boilerplate

A modern full-stack monorepo with Next.js, NestJS, and Prisma.

## Features

- **TypeScript** end-to-end type safety
- **Turborepo** for efficient builds and caching
- **Next.js** frontend
- **NestJS** backend with structured logging
- **Prisma ORM** with shared database package
- **Zod** for runtime type validation
- **Biome** for fast linting and formatting

## Structure

├── apps/
│   ├── api/                # NestJS backend
│   └── web/                # Next.js frontend
├── packages/
│   └── db/                 # Prisma schema & client
├── turbo.json              # Turborepo config
└── pnpm-workspace.yaml     # Workspace config

## Getting Started

```bash
# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env

# Generate Prisma client
pnpm db:generate

# Start development servers
pnpm dev

Scripts
pnpm dev - Start all apps in dev mode
pnpm build - Build all apps
pnpm db:generate - Generate Prisma client
pnpm lint - Lint codebase
pnpm format - Format codebase
