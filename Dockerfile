# Build stage
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies and build the app
COPY package.json package-lock.json* ./
COPY pnpm-lock.yaml* ./
COPY yarn.lock* ./
RUN npm install

COPY . .
RUN npm run build

# Production stage
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# Remove default nginx config and use a lightweight fallback for SPA routing
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
