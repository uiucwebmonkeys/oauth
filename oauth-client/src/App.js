import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Scenes/Home';
import Auth from './Scenes/Auth';

const App = () => (
  <Router>
    <>
      <Route path="/" exact component={Home} />
      <Route path="/auth" exact component={Auth} />
    </>
  </Router>
);

export default App;
