import './App.css'
import city from './assets/city.jpg'
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";

function App() {

  return (
    <div className='App'>
    
    <h1>Seção 03</h1>

    <div>
    <img src="/img1.jpg" alt="Paisagem"/>
    <img src={city} alt="Sidade"/>
    
    </div>
    <ManageData />
    <ListRender />
    <ConditionalRender />
    <ShowUserName name="Matheus" />
      
    </div>
  )
}

export default App
