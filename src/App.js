import {Routes, Route } from 'react-router-dom'
import { Country } from './components/countries/Country';
import { Header } from './components/Header';
import SearchBar from './components/search/SearchBar';

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path='/' element={<Country />}>
          
        </Route>
      </Routes> */}
        <Header/>
        <Country SearchBar={SearchBar}/>
    </div>
  );
}

export default App;
