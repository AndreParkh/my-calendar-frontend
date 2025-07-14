import './components/App/App.css'
import ReactDom from "react-dom/client";
import App from "./components/App/App.jsx";

ReactDom.hydrateRoot(document.getElementById("root"), <App/>);

