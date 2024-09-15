import Header from "./components/Header";
import NewsList from "./components/NewsList";
import ExchangeRateList from "./components/ExchangeRateList";
import SearchBar from "./components/SearchBar";
import WidgetList from "./components/WidgetList";
import './App.css'

function App() {
   return (
    <>
      <Header />
      <NewsList />
      <ExchangeRateList />
      <SearchBar/>
      <WidgetList/>
      
    </>
  )
}

export default App
