import React from 'react';
import './App.css';


import AuthContext from "./context/AuthContext";
import LogContainer from "./LogContainer";

function App() {
    const [ isAuth, setAuth ] = React.useState( false );

  return (
    <AuthContext.Provider value={ { isAuth, setAuth } }>
      <LogContainer/>
    </AuthContext.Provider>
  );

}

export default App;
