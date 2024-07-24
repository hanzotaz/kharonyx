FROM node:alpine AS build

WORKDIR /app

COPY package.json .
COPY pnpm-lock.yaml .

RUN npm install -g pnpm && pnpm install

COPY . .

RUN pnpm build

# run time stage
FROM nginx:alpine AS runtime

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8080