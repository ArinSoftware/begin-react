import React from 'react';
import ReactDOM from 'react-dom'

import Card from './components/Card';


const App = () => {


  return (
    <div>

      <div className="card-group">

        <Card cardTitle="Trabzonspor"/>

        <Card cardTitle="Bursaspor"/>

        <Card cardTitle="Samsunspor" />


      </div>

    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
