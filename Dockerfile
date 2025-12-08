FROM node:24.11.0-alpine AS base

FROM base AS builder
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .

ARG NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
ARG NEXT_PUBLIC_SANITY_DATASET
ARG NEXT_PUBLIC_SANITY_PROJECT_ID
ARG SANITY_API_TOKEN
ARG SANITY_API_READ_TOKEN

ENV NEXT_PUBLIC_SANITY_DATASET=$NEXT_PUBLIC_SANITY_DATASET
ENV NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=$NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
ENV NEXT_PUBLIC_SANITY_PROJECT_ID=$NEXT_PUBLIC_SANITY_PROJECT_ID
ENV SANITY_API_TOKEN=$SANITY_API_TOKEN
ENV SANITY_API_READ_TOKEN=$SANITY_API_READ_TOKEN
RUN npm run build

FROM base AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 app
RUN adduser --system --uid 1001 app
USER app

COPY --chown=app:app --from=builder /app/public ./public
COPY --chown=app:app --from=builder /app/.next/standalone ./
COPY --chown=app:app --from=builder /app/.next/static ./.next/static

CMD ["node", "server.js"]
