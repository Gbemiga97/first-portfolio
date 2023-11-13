import { Nav } from "./components";
import { About, Banner, Contact, Header, Services, Work } from "./sections";


function App() {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <About />
      <Nav />
      <Services />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
