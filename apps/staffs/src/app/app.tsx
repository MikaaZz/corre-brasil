// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Accordion_personal, Footer, Header } from '@corre-brasil/ui';
import './app.css';
import { Functions_staffs } from './components/Functions_staffs/Functions_staffs';
import { Role_staffs } from './components/Role_staffs/Role_staffs';

export const App = () => {
  return (
    <>
      {/* HEADER NAV */}
      <Header
        headerContentNav={
          <>
            <a className="main-header__links" href="#roleStaffs">
              Papel
            </a>
            <a className="main-header__links" href="#functionsStaffs">
              Funções
            </a>
            <a className="main-header__links" href="#orientationStaffs">
              Orientações
            </a>
          </>
        }
      ></Header>
      {/* MAIN CONTENT */}
      <main className="main-content">
        <div className="main-content__initialInfos">
          <div className="main-content__initialInfos--titleContainer">
            <h2 className="main-content__initialInfos__titleContainer-title">
              Corrida <br />
              de rua no Brasil
            </h2>
          </div>
          <p className="main-content__initialInfos--textOne">
            A Corrida de Rua movimenta, atualmente, de 4 a 10 milhões de pessoas
            no Brasil;
          </p>
          <p className="main-content__initialInfos--textTwo">
            É considerado o esporte mais democrático, pois pode ser praticado em
            qualquer lugar, horário e clima;
          </p>
        </div>
        <div className="main-content__modeInfos">
          <div className="main-content__modeInfos--titleContainer">
            <h3 className="main-content__modeInfos__titleContainer-title">
              A modalidade da
              <br /> Meia Maratona
            </h3>
          </div>
          <p className="main-content__modeInfos--textOne">
            A meia maratona nada mais é do que uma prova de corrida que
            corresponde a metade da distância de uma maratona, o equivalente a
            21, 097km.
          </p>
          <p className="main-content__modeInfos--textTwo">
            Essa modalidade não está inclusa em campeonatos oficiais, como as
            Olimpíadas, porém existem inúmeras provas famosas disputadas no
            mundo inteiro, inclusive no Brasil.
          </p>
        </div>
        {/* ROLE STAFFS */}
        <Role_staffs />
        {/* FUNCTION STAFFS */}
        <Functions_staffs />
        {/* ORIENTATION STAFFS */}
        <div id="orientationStaffs" className="main-content__orientationInfos">
          <h2 className="main-content__orientationInfos__title">
            Orientações:
          </h2>
          <ul className="main-content__orientationInfos__list">
            <li className="main-content__orientationInfos__list--item">
              Quando chegar, ir ao guarda volumes retirar o seu colete.
            </li>
            <li className="main-content__orientationInfos__list--item">
              Quando finalizar, devolver colete e pegar certificado de horas e
              ou pagamento também no guarda volumes;
            </li>
            <li className="main-content__orientationInfos__list--item">
              Haverá transporte para levar você ao seu ponto de trabalho e
              retorno a arena;
            </li>
            <li className="main-content__orientationInfos__list--item">
              É obrigatório uso do colete durante a prova. Coletes laranjas para
              equipe de staff, coletes amarelos para a organização;
            </li>
            <li className="main-content__orientationInfos__list--item">
              Para meninas: legging ou bermuda preta ou jeans + camiseta +
              calçado fechado;
            </li>
            <li className="main-content__orientationInfos__list--item">
              Para meninos: bermuda ou calça jeans ou de material esportivo +
              camiseta + calçado fechado;
            </li>
            <li className="main-content__orientationInfos__list--item">
              Lembre de usar protetor solar;
            </li>
            <li className="main-content__orientationInfos__list--item">
              Boné e viseira são permitidos;
            </li>
            <li className="main-content__orientationInfos__list--item">
              Fones de ouvido são proibidos;
            </li>
            <li className="main-content__orientationInfos__list--item">
              Quem tiver cabelo comprido, manter preso;
            </li>
            <li className="main-content__orientationInfos__list--item">
              Pessoas que forem destinadas a hidratação e medalha, devem usar
              luvas descartáveis, as mesmas serão entregues junto com os
              coletes.
            </li>
          </ul>
        </div>
      </main>
      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default App;
