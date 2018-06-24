Part 1:
* Backend
    - Express Server
    - Mongo DB
    - Babel
    - body-parser
    - morgan
* interface

Tools
* Postman
* Robomongo 3T

Folder Structure
# Backend
    * node_modules
    * server
        * config
            - db.js
            - middlewares.js
        * modules
            * meetups
                - controller.js
                - model.js
                - routes.js
                - index.js
            - index.js
        - index.js
    - index.js
    - ReadMe.md
    - .babelrc
    - package.json
    - yarn.lock

Commands
mkdir meetup-backend
> create driectory for backend of meetup app

cd meetup-backend
yarn init
> install node dependencies using yarn package manager

yarn add babel-preset-es2015 babel-register babel-polyfill
> install babel preset and dependencies

brew install mongodb
> install mongoDB

yarn add mongoose@4.7.7
> install mongoose database

mongod
> start mongoDB

node index.js
> serve index file

yarn add -D nodemon
> add nodemon to Direct dependencies & install

yarn dev
> start express server

rs
> restart running server

yarn add morgan body-parser
> install morgan and body-parser to allow import and export of json inside express server

yarn add babel-preset-stage-0
> Allow for use of async & installing transform-async-to-generator