import { renderToPipeableStream } from 'react-dom/server';
import App from "./components/App/App.jsx";

export const render = (_url, options) => {
    return renderToPipeableStream(<App />, options);
};