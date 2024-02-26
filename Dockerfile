FROM node:18-alpine3.19
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 8080
ENTRYPOINT [ "node", "app.js" ]

