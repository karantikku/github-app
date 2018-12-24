import React from 'react';
import AppRouter from './routers/AppRouter'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AppRouter />
      </div>
    );
  }
}

export default App;



