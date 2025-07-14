import { renderToString } from 'react-dom/server';
import App from "./components/App/App.jsx";

export const render = () => {
    const appHtml = renderToString(<App />);
    return { html: appHtml };
};