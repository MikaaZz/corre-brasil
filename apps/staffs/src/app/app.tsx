// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Accordion_personal, Header } from '@corre-brasil/ui';
import './app.css';
import { Functions_staffs } from './components/Functions_staffs/Functions_staffs';

export const App = () => {
  return (
    <>
      <Header />
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
        <Functions_staffs />
      </main>
    </>
  );
};

export default App;
