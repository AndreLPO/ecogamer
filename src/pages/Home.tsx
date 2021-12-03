import "../styles/home.scss";
import banner from "../assets/img/banner.png";
import folhas from "../assets/img/folhas.png";
import grupoPessoas from "../assets/img/grupo_pessoas.png";
import logo1 from "../assets/img/logo1.png";
import logo2 from "../assets/img/logo2.png";
import mundo from "../assets/img/mundo.png";
import pessoa from "../assets/img/pessoa.png";
import recicla from "../assets/img/recicla.png";
import recicla2 from "../assets/img/recicla2.png";
import softex from "../assets/img/softex.png";
import unisal from "../assets/img/unisal.png";

export function Home() {
  return (
    <div>
      <header>
        <nav>
          <img src={logo1} alt="EcoGamer" />
          <ul>
            <li>
              <a href="#">Game</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </nav>
        <img id="mundo" src={mundo} alt="Um mundo com nuvens" />
        <div className="conteudo-central">
          <img id="ecocrush" src={logo2} alt="Logo EcoCrush" />
          <p>
            EcoCrush, uma experiência única onde reciclar é divertido! Um jogo
            mobile de Puzzles e Quizzes, trocando e reciclando através de uma
            aventura auto sustentável!
          </p>
        </div>

        <img
          id="pessoa"
          src={pessoa}
          alt="Ilustração de pessoa jogando lixo fora"
        />
      </header>
      <section className="game">
        <h1>Games</h1>
        <div></div>

        <img
          id="banner"
          src={banner}
          alt="Simbolo representando a reciclagem"
        />
        <img
          id="recicla2"
          src={recicla2}
          alt="Simbolo representando a reciclagem"
        />
        <img id="folhas" src={folhas} alt="3 folhas agrupadas" />
      </section>
      <section className="sobre-nos">
        <h1>Sobre nós</h1>
        <article className="equipe">
          <div>
            <h2>A equipe</h2>
            <p>
              O time EcoGamer surgiu através do Hackathon UNISAL - SOFTEX 2021,
              com o propósito de desenvolver e apresentar propostas de soluções,
              produtos ou serviços que possam contribuir para a agenda ESG.
            </p>
            <p>
              Prontos para encarar esse desafio, nós nos juntamos para criar o
              EcoCrush. Um jogo que incentiva ajudar o meio ambiente!
            </p>
          </div>
          <img
            src={grupoPessoas}
            alt="Ilustração com grupo de pessoas reunidas, com gráficos ao fundo"
          />
        </article>
        <article className="projeto">
          <img
            src={recicla}
            alt="Ilustração com grupo de pessoas reunidas, com gráficos ao fundo"
          />
          <div>
            <h2>O projeto</h2>
            <p>
              Nossa proposta da EcoGamer é desenvolver um game épico no mundo
              dos games com jogabilidade além de seu maior objetivo de
              incentivar e educar a população a coletarem materiais recicláveis
              e descartarem a maneira correta.
            </p>
            <p>
              Para isso, surge a EcoCrush, que possibilitará dentro do game uma
              experiencia incrível de jogabilidade e aprendizagem sobre
              reciclagem e meio ambiente,
              <span> onde reciclar nunca foi tão fácil.</span>
            </p>
          </div>
        </article>
      </section>
      <footer>
        <img src={softex} alt="Logo da empresa Softex" />
        <img src={unisal} alt="Logo da Unisal" />
      </footer>
    </div>
  );
}
