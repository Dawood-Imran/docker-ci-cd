# Docker CI/CD Project

A simple Node.js Express app containerized with Docker and deployed via GitHub Actions.

## Docker
- Built a Docker image: `dawood09/my-node-app:latest`
- Available on Docker Hub: [hub.docker.com/r/dawood09/my-node-app](https://hub.docker.com/r/dawood09/my-node-app)
- Run locally: `docker run -d -p 3000:3000 dawood09/my-node-app:latest`

## Docker Compose
- Defined in `docker-compose/docker-compose.yml`
- Runs the app and a MongoDB database
- Start: `cd docker-compose && docker compose up -d`
- Access: `http://localhost:3000`