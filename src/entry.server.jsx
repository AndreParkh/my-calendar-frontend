import App from "./components/App/App.jsx";
import React from "react";

export default async function initServerApp() {
    const serverApp =
        (<html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Семейный календарь</title>
            </head>
            <body>
                <div id="root">
                    <App/>
                </div>
            </body>
        </html>)

    return {serverApp}
}
