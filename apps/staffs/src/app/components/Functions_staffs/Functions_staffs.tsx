import { Accordion_personal } from '@corre-brasil/ui';

import './Functions_staffs.css';

export const Functions_staffs = () => {
  return (
    <>
      <h2 className="function-staffs__title">Funções:</h2>
      <div className="function-staffs__div">
        <Accordion_personal
          accordionTitle={'Pista - Hidratação:'}
          accordionContent={
            <ul>
              <li>A equipe irá levar você ao seu ponto;</li>
              <li>
                Basta entregar copo para o atleta que estiver passando e manter
                o ponto abastecido;
              </li>
              <li>
                O copo de água (em pé) deve estar na palma da sua mão, mão
                virada para cima, braço estendido para facilitar que o atleta
                pegue o copo;
              </li>
              <li>
                Se posicionar ao lado do cocho de água e não na frente do mesmo;
              </li>
              <li>
                Após a passagem dos atletas, manter seu perímetro limpo
                ajuntando os copos que estiverem na via. Você receberá sacos de
                lixo e vassouras para facilitar esse manejo;
              </li>
              <li>
                O caminhão da organização vai passar no percurso recolhendo esse
                lixo;
              </li>
            </ul>
          }
        />
        <Accordion_personal
          accordionTitle={'Pista - Sinalização:'}
          accordionContent={
            <ul>
              <li>
                A equipe irá levar você ao seu ponto e orientar a direção do
                trânsito;
              </li>
              <li>
                Você deve ajudar a manter o percurso seguro, impedindo que os
                carros sigam na via que está fechada para os atletas;
              </li>
              <li>
                Caso você veja algum cone caído ou fora de alinhamento, por
                favor corrija o mesmo;
              </li>
              <li>
                Faça gestos amplos, chame atenção de quem você precisa orientar;
              </li>
              <li>Você sempre pode incentivar e animar os atletas!</li>
            </ul>
          }
        />
        <Accordion_personal
          accordionTitle={'Arena:'}
          accordionContent={
            <>
              <p>
                Existem diferentes atividades na arena, a equipe irá guiar você,
                mas eis algumas:
              </p>
              <ul>
                <li>
                  Hidratação – sob orientação da equipe, você irá auxiliar o
                  abastecimento de insumos para o atleta: água, isotônico,
                  frutas;
                </li>
                <li>
                  Medalha – entregar medalha para os atletas na chegada da
                  prova.Sempre com sorriso no rosto!
                  <strong>
                    {' '}
                    Atenção entregar medalha somente para quem estiver com
                    numeral;
                  </strong>
                </li>
                <li>
                  Fluxo – auxiliar para que não atletas entrem no funil de
                  chegada;
                </li>
                <li>
                  Guarda volumes – auxiliar na organização dos pertences dos
                  atletas;
                </li>
                <li>Ajudar a manter a arena limpa!</li>
              </ul>
            </>
          }
        />
      </div>
    </>
  );
};
