# Backend

## Start
Run `watch-server` from package.json or `nodemon --watch src --exec ts-node src/server.ts`

## Build
To built swagger and routes run `build-swagger-and-routes` from package.json or `tsoa spec-and-routes`

All controllers have path like `/src/*Controller.ts`

Routes and swagger are in folder `/src/router/`

And models for Controllers have path such as `/src/_models/*Model.ts`