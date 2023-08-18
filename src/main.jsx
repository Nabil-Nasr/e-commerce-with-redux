import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from './App';
import './assets/css/shared/all.fontawesome.min.css';
import './assets/css/shared/fonts.min.css';
import './assets/css/shared/index.css';
import store from "./redux/store";
// must be removed in any chance
// to make react-multiple-image-input works
import "regenerator-runtime"

const root = document.getElementById('root');
root.classList.add("btn-outline-dark")

createRoot(root)
  .render(
      <Provider store={store}>
        <BrowserRouter>
          <App  />
        </BrowserRouter>
      </Provider>
  );
