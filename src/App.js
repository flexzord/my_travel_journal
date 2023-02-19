import './App.css';
import Navbar from "./components/Navbar"
import data from "./components/data"
import Card from "./components/Card"


function App() {
  const cards = data.map(item=>{
    return(
      <Card
      key = {item.id}
        {...item}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <section className='main'>
        {cards}
      </section>
    </div>
  );
}

export default App;
