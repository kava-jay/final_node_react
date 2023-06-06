FROM node:19.6.1

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 5000

ENV DB_URL mongodb://database:27017/
ENV PORT 5000

CMD ["npm", "start"]
