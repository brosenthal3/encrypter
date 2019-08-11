import React from 'react';
import './App.scss';
import {BrowserRouter as HashRouter, Route} from 'react-router-dom';

import SelectPage from './pages/select-page/select-page.page';
import {EncryptPage} from './pages/encrypt-page/encrypt-page.page';
import {DecryptPage} from './pages/decrypt-page/decrypt-page.page';
import {Credits} from './components/credits/credits.component';

function App() {
  return (
    <div className="App">
      <HashRouter basename='/'>
        <div className="page">
          <Credits />
            <Route path="/" exact component={SelectPage} />
            <Route path="/decrypt" exact component={DecryptPage} />
            <Route path="/encrypt" exact component={EncryptPage} />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
