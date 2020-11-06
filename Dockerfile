FROM node:10
    
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN sh -c "cd /usr/src/app/client && npm run build"

CMD [ "npm", "start" ]

