
import { Country } from './components/countries/Country';
import { Header } from './components/Header';
import SearchBar from './components/search/SearchBar'

function App() {
  return (
    <div className="App">
        <Header/>
        {/* <SearchBar onSearch={fetchCountryByName}/> */}
        <Country/>
    </div>
  );
}

export default App;
