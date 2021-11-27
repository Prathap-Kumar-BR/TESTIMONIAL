import "./App.css";
import Header from "./components/Header";
import Service from "./components/Service";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Route path="/">
          {" "}
          <Header />
        </Route>
        <Route path="/">
          {" "}
          <Service />
        </Route>
        <Route path="/">
          {" "}
          <Pricing />
        </Route>
        <Route path="/">
          {" "}
          <Testimonial />
        </Route>
        <Route path="/">
          {" "}
          <Contact />
        </Route>
        <Route path="/">
          {" "}
          <Footer />
        </Route>
      </Router>
    </div>
  );
}

export default App;
