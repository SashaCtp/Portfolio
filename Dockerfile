# Improved version

# Build
FROM node:18-alpine AS builder
WORKDIR /usr/app
COPY package*.json ./
COPY tsconfig*.json ./
RUN npm install
COPY . ./
RUN npm run build

# ???
FROM node:18-alpine as runner
WORKDIR /usr/app
COPY --from=builder /usr/app/package*.json ./
COPY --from=builder /usr/app/dist ./
COPY --from=builder server.js ./
RUN npm install --omit=dev

EXPOSE 80

CMD ["node", "index.js"]
