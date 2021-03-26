# WizeShop


### Database Models

https://www.infoq.com/articles/data-model-mongodb/


### Requirements
- [Docker](https://docs.docker.com/get-docker/)
- NodeJS LTS, Simply run `nvm use` if you already installed [nvm](https://github.com/nvm-sh/nvm)

### Development

- Start MongoDB
  - create a `docker-compose.override.yml` from `docker-compose.override.yml.sample`
  - `docker-compose up -d`

- Start application
  - Install dependencies: `npm install`
  - Start with development mode: `npm run dev`
