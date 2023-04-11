FROM ubuntu:22.04

RUN apt-get update -y
RUN apt-get install -y curl openjdk-17-jre-headless
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs

RUN npm uninstall -g yarn pnpm
RUN npm install -g firebase-tools firebase-admin corepack

ENV APP_ROOT /home/app

WORKDIR $APP_ROOT

COPY ./.yarnrc.yml ./package.json ./yarn.lock $APP_ROOT
RUN corepack enable && \
    corepack prepare yarn@3.4.1 --activate && \
    yarn set version 3.4.1
RUN yarn rebuild && yarn install 

COPY . $APP_ROOT

# init firebase
RUN mkdir -p ${APP_ROOT}/firebase/db/local
RUN chmod +x ${APP_ROOT}/firebase/scripts/*.sh


EXPOSE 3000

CMD ["yarn", "dev"]