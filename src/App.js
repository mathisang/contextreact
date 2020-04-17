import React from 'react';
import './App.css';


import AuthContext from "./context/AuthContext";
import LogContainer from "./LogContainer";

function App() {

  return (
    <AuthContext.Provider value={ { isAuth: false } }>
      <LogContainer/>
    </AuthContext.Provider>
  );

}

export default App;
