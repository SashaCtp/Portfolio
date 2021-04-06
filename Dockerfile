FROM node:15-alpine

EXPOSE 80

ADD /app/ /app/
WORKDIR /app
COPY package.json .
RUN npm install --production
CMD ["node", "server.js"]