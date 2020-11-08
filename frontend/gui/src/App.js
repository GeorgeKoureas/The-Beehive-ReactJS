import React from 'react';
import BaseRouter from './routes'
import 'antd/dist/antd.css';
import CustomLayout from './components/Layout/Layout.jsx'
import { BrowserRouter as Router } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
          <CustomLayout>
            <BaseRouter />
          </CustomLayout>
      </div>
    </Router>
  );
}

export default App;
