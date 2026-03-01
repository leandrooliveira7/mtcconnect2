import ScrollSequence from "./components/ScrollSequence";
import { Header } from "./components/Header";
import {Horario} from "./components/timeTable"
import { Empresas } from "./components/Companies";
import { Sponsors } from "./components/Sponsors";
import { Footer } from "./components/Footer";

import './App.css'

function App() {
  return (
    <>
      <ScrollSequence />
      <Header />
      <Horario />
      <Empresas />
      <Sponsors />
      <Footer />
    </>
  );
}

export default App;
