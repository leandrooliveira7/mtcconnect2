import ScrollSequence from "./components/ScrollSequence";
import { Header } from "./components/Header";
import Horario from "./components/timeTable";
import { Empresas } from "./components/Companies";
import { Sponsors } from "./components/Sponsors";
import { Footer } from "./components/Footer";
import { SwipeIndicator } from "./components/Swipe";
import "./App.css";

function App() {
  return (
    <>
      <ScrollSequence />
      <SwipeIndicator/>
      <Header />
      <Horario />
      <Empresas />
      <Sponsors />
      <Footer />
    </>
  );
}

export default App;
