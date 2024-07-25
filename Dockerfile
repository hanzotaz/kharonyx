# Build stage
FROM node:alpine AS build

WORKDIR /app

# Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

# Copy the rest of the application files
COPY . .

# Build the Astro.js project
RUN pnpm build

# Runtime stage
FROM nginx:alpine AS runtime

# Copy Nginx configuration
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# Copy build artifacts from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port Nginx will run on
EXPOSE 8080

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
