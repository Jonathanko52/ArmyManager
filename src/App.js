import NavigationBar from "./components/navigationBar.js"
import MainPage from './components/MainPage.js'
import Header from './components/Header.js'
import React, {useState} from 'react';

function App() {


  const [age, setAge] = useState(28);

  return (
    <div className="App grid grid-cols-8 h-screen	">
        <Header/>
        <NavigationBar/>
        <MainPage/>
    </div>
  );
}

export default App;
