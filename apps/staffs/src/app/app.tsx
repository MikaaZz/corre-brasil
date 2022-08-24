// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Accordion_personal, Header } from '@corre-brasil/ui';
import './app.module.css';

export const App = () => {
  return (
    <>
      <Header />
      <Accordion_personal
        accordionTitle={'Pista - Hidratação:'}
        accordionContent={
          <ul>
            <li>A equipe irá levar você ao seu ponto;</li>
            <li>
              Basta entregar copo para o atleta que estiver passando e manter o
              ponto abastecido;
            </li>
            <li>
              O copo de água (em pé) deve estar na palma da sua mão, mão virada
              para cima, braço estendido para facilitar que o atleta pegue o
              copo;
            </li>
            <li>
              Se posicionar ao lado do cocho de água e não na frente do mesmo;
            </li>
            <li>
              Após a passagem dos atletas, manter seu perímetro limpo ajuntando
              os copos que estiverem na via. Você receberá sacos de lixo e
              vassouras para facilitar esse manejo;
            </li>
            <li>
              O caminhão da organização vai passar no percurso recolhendo esse
              lixo;
            </li>
          </ul>
        }
      />
    </>
  );
};

export default App;
