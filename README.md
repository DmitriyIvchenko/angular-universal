# Angular Universal: server-side rendering [![CircleCI](https://circleci.com/gh/lazy-ants/angular-universal/tree/master.svg?style=svg)](https://circleci.com/gh/lazy-ants/angular-universal/tree/master)

## CLONE REPO

```
git clone git@github.com:lazy-ants/angular-universal.git
cd angular-universal
```

## BUILD APPLICATION

- in dev mode, http://localhost:4200

```
cd project/application
npm install
npm start
```

- in prod mode, https://angular-universal.lazy-ants.com

Requirements: https://certbot.eff.org

```
cp angular-universal.lazy-ants.com-docker-compose.override.yml.dist docker-compose.override.yml
cp docker/nginx/angular-universal.lazy-ants.com.conf.dist docker/nginx/nginx.conf
docker-compose up -d --build
```
