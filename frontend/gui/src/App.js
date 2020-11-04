import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import BaseRouter from './routes'
import 'antd/dist/antd.css';

import CustomLayout from './components/Layout/Layout.jsx'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomLayout>
          <BaseRouter />
        </CustomLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
