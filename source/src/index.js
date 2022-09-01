import React from 'react';
import ReactDOM from 'react-dom/client';

import 'css/common.css';
import 'css/master.css';

import Core from 'js/Core';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Core />
  </React.StrictMode>
);
