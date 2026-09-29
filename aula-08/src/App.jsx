import './App.css'
import city from './assets/city.jpg'
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Container from "./components/Container";

function App() {

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
    { id: 2, brand: "KIA", color: "Branco", km: 200000 },
    { id: 3, brand: "Renault", color: "Azul", km: 32000 },
  ];

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

    {/* destructuring */}
<CarDetails brand="Ford" color="Azul" km={10000} />

{/* reaproveitamento */}
<CarDetails brand="VW" color="Vermelho" km={535} />
<CarDetails brand="Fiat" color="Branco" km={0} />

{cars.map((car) => (
  <CarDetails
    key={car.id}
    brand={car.brand}
    color={car.color}
    km={car.km}
  />
))}
<Fragment />
<Container>
  <p>Eu sou do componente superior</p>
</Container>

<Container>
  <div>
    <p>Eu também</p>
  </div>
</Container>
      
    </div>
  )
}

export default App
