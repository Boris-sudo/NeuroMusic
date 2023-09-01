import Koa from "koa";
import Router from "@koa/router";
import {RegisterRoutes} from "./routes/routes";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";
import "reflect-metadata";

const app = new Koa();

app.use(cors({
    credentials: true,
    allowMethods:["GET", "POST", "OPTIONS"],
    origin: function (ctx) {
        switch (ctx.request.headers.origin) {
            case "http://localhost:4200":
            case "http://127.0.0.1:4200":
                return ctx.request.headers.origin;
        }
        return "";
    }
}))

app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

app.use(bodyParser());

const router = new Router();
RegisterRoutes(router);
app.use(router.routes())
    // .use(router.allowedMethods())
;

app.listen(3000);

console.log('started');