FROM node:alpine

WORKDIR /opt/app

COPY package*.json ./

# We use npm ci instead of npm install to avoid packages updating accidentally, which may cause problems in production.
RUN npm ci

COPY . .

EXPOSE 3000

RUN npm run build

CMD ["npm", "start"]
