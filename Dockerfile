FROM node:10
    
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN sh -c "cd /usr/src/app/client && npm install && npm run build"

RUN mkdir -p /usr/src/app/uploads

CMD [ "npm", "start" ]

