import Header from "./Components/Header"
import HobbyArticle from "./Components/HobbyArticle"
import Footer from "./Components/Footer"
import sailing from "./assets/sailing.jpg"
import sailing2 from "./assets/sailing2.jpg"
import sailing3 from "./assets/sailing3.jpg"
import kajak from "./assets/kajak.jpg"
import kajak2 from "./assets/kajak2.jpg"
import kajak3 from "./assets/kajak3.jpg"
import cycling from "./assets/cycling.jpg"
import cycling2 from "./assets/cycling2.jpg"
import cycling3 from "./assets/cycling3.jpg"

export default function App() {
const lorem = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
  Optio, est quaerat. Voluptates consectetur totam pariatur architecto facere 
  repellendus iusto quibusdam. Accusamus id in tempore numquam quo, laudantium 
  voluptate obcaecati quos.`

  return (
    <div className="App">
      <Header />
      <HobbyArticle
          imgs={[
            kajak,
            kajak2,
            kajak3,
          ]}
          alt="Kayaking"
          title="Sea Kayaking"
          text={lorem}
         />
      <HobbyArticle
          imgs={[
            sailing,
            sailing2,
            sailing3,
          ]}
          alt="Sailing"
          title="Sailing"
          text={lorem}
         />
      <HobbyArticle
          imgs={[
            cycling,
            cycling2,
            cycling3,
          ]}
          alt="Cycling"
          title="Cycling"
          text={lorem}
         />
      <Footer />
    </div>
  )
}