import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import CustomLayout from './components/Layout/Layout.jsx'
import CompetitionList from './components/List/List'


function App() {
  return (
    <div className="App">
      <CustomLayout>
        <CompetitionList />
      </CustomLayout>
    </div>
  );
}

export default App;
