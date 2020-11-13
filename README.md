# jsstu-cse-webapp
source code for jsstu cse dept web app

# client 
all the react js code

# warning
before deploying any code make sure you go to client and run "npm run build"
inorder to get a production build of the app

# deploy db using docker
- modify docker-compose.yml file with required user name and password
- run `docker-compose up` on the root folder
- your db will be up in port `27017` and mongo-express instance will be up in port `8081`.

# docker initialisation steps
  1. install docker on your machine
  2. after installation run in the cmd  "docker images"
  3. create a heroku app
  4. run in cmd "heroku container:push web"
  5. run in cmd "heroku container:release web"
   Awesome! code is deployed
