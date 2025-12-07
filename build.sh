#!/bin/bash
export $(cat .env | grep -v '^#' | xargs)
docker buildx build --platform linux/arm64 \
  --build-arg NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="${NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}" \
  --build-arg NEXT_PUBLIC_SANITY_DATASET="${NEXT_PUBLIC_SANITY_DATASET}" \
  --build-arg NEXT_PUBLIC_SANITY_PROJECT_ID="${NEXT_PUBLIC_SANITY_PROJECT_ID}" \
  --build-arg SANITY_API_TOKEN="${SANITY_API_TOKEN}" \
  --build-arg SANITY_API_READ_TOKEN="${SANITY_API_READ_TOKEN}" \
  -t registry.home/p3d-app:latest .

docker push registry.home/p3d-app:latest