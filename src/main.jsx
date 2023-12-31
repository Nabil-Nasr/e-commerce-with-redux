import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from './App';
import './assets/css/shared/all.fontawesome.min.css';
import './assets/css/shared/fonts.min.css';
import './assets/css/shared/index.css';
import store from "./redux/store";

const root = document.getElementById('root');
document.body.classList.add("btn-outline-dark")

createRoot(root)
  .render(
      <Provider store={store}>
        <BrowserRouter basename={import.meta.env.VITE_DEPLOYMENT_BASE_URL}>
          <App  />
        </BrowserRouter>
      </Provider>
  );
