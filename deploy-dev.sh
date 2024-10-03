#!/bin/sh
git fetch origin && git reset --hard origin/dev && git clean -f -d && \
docker compose -f docker-compose.dev.yml down && \
docker compose -f docker-compose.dev.yml pull && \
GATEWAY_PORT=81 docker compose -f docker-compose.dev.yml --env-file .env.production up -d --build;