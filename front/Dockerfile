FROM ubuntu:22.04

RUN apt-get update -y
RUN apt-get install -y curl openjdk-17-jre-headless
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs

RUN npm uninstall -g yarn pnpm
RUN npm install -g firebase-tools corepack

ENV APP_ROOT /home/app

WORKDIR $APP_ROOT

COPY ./.yarnrc.yml ./package.json ./yarn.lock ./.yarn $APP_ROOT
RUN corepack prepare yarn@3.2.3 && yarn install 

COPY . $APP_ROOT

# init firebase
RUN mkdir -p ${APP_ROOT}/firebase/db/local

EXPOSE 3000

CMD ["yarn", "dev"]
