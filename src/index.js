import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/pages/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './components/pages/cadastro/Video';
import CadastroCategoria from './components/pages/cadastro/Categoria';



const Pagina404 = () => (<div>Pagina 404 - Não existe!</div>);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
