import http from 'http';
import httpProxy from 'http-proxy';
import express from "express";
let app = express();
import session from 'express-session';

app.use(session({ secret: 'Secret5555', resave: false, saveUninitialized: true, }));
// Define the port to run on
app.set('port', process.env.PORT || parseInt(process.argv.pop()) || 8080);
let apiProxy = httpProxy.createProxy({
    changeOrigin: true
});

app.use("/multi", express.static(__dirname + "/multi"));
app.use("/single", express.static(__dirname + "/single"));


let aUrls = [
    "/multi/",
    "/single/"
];

app.all("/*", function(req, res) {
    let nServer = req.session.nServer;
    if(!nServer || nServer < 1 || nServer > aUrls.length){
        nServer = Math.ceil(Math.random() *aUrls.length);
        req.session.nServer =  nServer;
    }
    let sProxyUrl =  (req.headers["x-forwarded-proto"] || "http") + "://" + req.get('host') + aUrls[nServer - 1];
    apiProxy.web(req, res, {target:sProxyUrl});
});

// Create http server that leverages reverse proxy instance
// and proxy rules to proxy requests to different targets
http.createServer(app)
.listen(app.get('port'), function () {
  console.log('Example app listening on port ' + app.get('port') + "! Go to http://localhost:" + app.get('port') + "/")
});
