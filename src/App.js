import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Slider from "./components/Slider";
import Providers from "./components/Providers"
import Selfservice from "./components/Selfservice";
import Section from "./components/Section";

function App() {
  return (
    <div>
     <Navbar/>
     <Slider/>
     <Categories/>
     <Services/>
     <Providers/>
     <Selfservice/>
     <Section/>
    </div>
  );
}

export default App;
