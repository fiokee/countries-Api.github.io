import {Routes, Route } from 'react-router-dom'
import { Country } from './components/countries/Country';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Country />}>
          
        </Route>
      </Routes>
        <Header/>
        <Country/>
    </div>
  );
}

export default App;
