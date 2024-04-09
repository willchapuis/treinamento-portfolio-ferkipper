import { Experience } from "./components/experience/experience";
import { Header } from "./components/header/header";

import "./styles/home.scss";

export default function Home() {
  return (
    <main className="container">
      <Header/>
      <Experience/>
      <div className="infos">
        <h3>Languages</h3>
        <div className="languages-info">
          <span>🇺🇸 EN - Intermediary</span>
          <span>🇧🇷 PT-BR - Native Speaker</span>
        </div>
        <h3>Education</h3>
        <div className="educational-info">
          <span>🎓</span>
          <span>Computer Science Bachelors Degree - Centro Universitário Eurípides de Marília</span>
        </div>
      </div>
      <div className="buttons">
        <div className="social">

        </div>
        <button>Contact Me </button>
      </div>
    </main>
  )
}
