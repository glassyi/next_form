const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

console.log("server.js > 서버에서 ENV >", process.env.ENV);

app.prepare().then(() => {
    createServer((req, res) => {
        const parsedUrl = parse(req.url, true);
        const { pathname, query } = parsedUrl;

        console.log("createServer callback >>>", process.env.ENV);

        if (pathname === "/a") {
            app.render(req, res, "/b", query);
        } else if (pathname === "/b") {
            app.render(req, res, "/a", query);
        } else {
            handle(req, res, parsedUrl);
        }
    }).listen(port, (err) => {
        if (err) throw err;
        console.error(`> Ready on ${port}`);
    });
});
