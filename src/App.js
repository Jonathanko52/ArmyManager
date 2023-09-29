import NavigationBar from "./components/navigationBar.js"
import MainPage from './components/MainPage.js'
import React from 'react';

function App() {
  return (
    <div className="App grid grid-cols-8">

        <MainPage/>
        <NavigationBar/>
    </div>
  );
}

export default App;
