FROM node:8

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3030

CMD ["npm", "start"]