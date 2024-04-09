import { Experience } from "./components/experience/experience";
import { Header } from "./components/header/header";
import { Info } from "./components/information/information";

import "./styles/home.scss";

export default function Home() {
  return (
    <main className="container">
      <Header/>
      <Experience/>
      <Info/>
      <div className="buttons">
        <div className="social">

        </div>
        <button className="btn-primary">Contact Me</button>
      </div>
    </main>
  )
}
