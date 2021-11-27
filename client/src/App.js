import "./App.css";
import Header from "./components/Header";
import Service from "./components/Service";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
function App() {
  return (
    <div>
      <Header />
      <Service />
      <Pricing />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
