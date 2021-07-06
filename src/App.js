import "./assets/css/bootstrap.css";
import "./assets/css/style.css";
import Navbar from "./parts/Navbar";
import Hero from "./parts/Hero";
import Selection from "./parts/Selection";
import Testimoni from "parts/Testimoni";
import Footer from "parts/Footer";

function App() {
  return (
    <>
      <div className="container">
        <Navbar></Navbar>
        <Hero></Hero>
        <Selection></Selection>
        <Testimoni></Testimoni>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
