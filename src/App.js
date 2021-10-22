// import './App.css';
import LogIn from './Pages/Login/LogIn';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import ProtectedRouter from './assets/ProtectedRouters';

function App() {

  const loading = (
    <div className='pt-3 text-center'>
      <div className='sk-spinner sk-spinner-pulse'></div>
    </div>
  )

  
  return (
    
    <Router>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route path='/' exact  component={LogIn}/>
          <ProtectedRouter path='/home' component={Home} />
        </Switch>
      </React.Suspense>
    </Router>
    
  );
}

export default App;
