FROM node:10-alpine

COPY package*.json ./

RUN npm install --only=production

COPY . .

EXPOSE 3030

CMD ["npm", "start"]