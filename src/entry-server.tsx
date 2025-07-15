import {
    renderToPipeableStream,
    RenderToPipeableStreamOptions
} from 'react-dom/server';
import App from "./components/App/App.tsx";

export const render = (_url: string, options?: RenderToPipeableStreamOptions) => {
    return renderToPipeableStream(<div id="root"><App/></div>, options);
        };