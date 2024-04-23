import "./App.css";
import Banner from "./Components/Banner";
import Calender from "./Components/Calender";
import Events from "./Components/Events";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Payments from "./Components/Payment";
import Scanner from "./Components/Scanner";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Events />
      <Calender />
      <Scanner />
      <Payments />
      <Footer />
    </>
  );
}

export default App;
