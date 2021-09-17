import express from "express";
import Database from "./lib/Database.js";

const HTTP_PORT = 8080;

var app;

function initDatabase() {
    Database.open(function () {
        initExpress();
    });
}

function onTestRequest(request, response) {
    console.log(request.body);

    let msg = {
        text: "It Works",
    };
    
    response.status(200).send(JSON.stringify(msg));
}

function initExpress() {
    app = express();
    app.use(express.static("app"));
    app.use(express.json());

    // Test-Route für Server-Client-Verbindung (siehe oben), bitte vor Abgabe entfernen!
    app.post("/test", onTestRequest);

    app.listen(HTTP_PORT, function () {
        console.log("Movie Explorer Server listening on Port " + HTTP_PORT);
    });
}

initDatabase();
