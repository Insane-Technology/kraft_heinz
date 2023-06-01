FROM node:alpine AS build
WORKDIR ./
COPY package.json .
RUN npm i
COPY . .
CMD ["npm", "start"]
