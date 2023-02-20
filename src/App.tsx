import Header from "./Components/Header"
import HobbyArticle from "./Components/HobbyArticle"
import embla from "./assets/embla.jpg"
import kajak from "./assets/kajak.jpg"
import cycling from "./assets/cycling.jpg"

export default function App() {
const lorem = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
  Optio, est quaerat. Voluptates consectetur totam pariatur architecto facere 
  repellendus iusto quibusdam. Accusamus id in tempore numquam quo, laudantium 
  voluptate obcaecati quos.`

  return (
    <div className="App">
      <Header />
      <HobbyArticle
          img={kajak}
          alt="Kayaking in Norway"
          title="Sea Kayaking"
          text={lorem}
         />
      <HobbyArticle
          img={embla}
          alt="The Sailboat Embla"
          title="Sailing"
          text={lorem}
         />
      <HobbyArticle
          img={cycling}
          alt="Bicycle with bags attached"
          title="Cycling"
          text={lorem}
         />
    </div>
  )
}