// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Accordion_personal, Header } from '@corre-brasil/ui';
import './app.module.css';
import { Functions_staffs } from './components/Functions_staffs';

export const App = () => {
  return (
    <>
      <Header />
      <div>
        <div>
          <h2>
            Corrida <br />
            de rua no Brasil
          </h2>
        </div>
        <p>
          A Corrida de Rua movimenta, atualmente, de 4 a 10 milhões de pessoas
          no Brasil;
        </p>
        <p>
          É considerado o esporte mais democrático, pois pode ser praticado em
          qualquer lugar, horário e clima;
        </p>
      </div>
      <div>
        <div>
          <h3>
            A modalidade da
            <br /> Meia Maratona
          </h3>
        </div>
        <p>
          A meia maratona nada mais é do que uma prova de corrida que
          corresponde a metade da distância de uma maratona, o equivalente a 21,
          097km.
        </p>
        <p>
          Essa modalidade não está inclusa em campeonatos oficiais, como as
          Olimpíadas, porém existem inúmeras provas famosas disputadas no mundo
          inteiro, inclusive no Brasil.
        </p>
      </div>
      <Functions_staffs />
    </>
  );
};

export default App;
