import { CyclesContext } from "../../contexts/CyclesContext";
import { HistoricContainer, HistoricList, Status } from "./styles";
import ptBR from "date-fns/locale/pt-BR";
import { formatDistanceToNow } from "date-fns";

import { useContext } from "react";


export function Historic() {
  const { cycles } = useContext(CyclesContext);

  return (
    <HistoricContainer>
      <h1>Meu Histórico</h1>

      <HistoricList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map(
              ({
                id,
                task,
                minutesAmount,
                startDate,
                finishedDate,
                interruptedDate,
              }) => (
                <tr key={id}>
                  <td>{task}</td>
                  <td>{minutesAmount} minutos</td>
                  <td>{formatDistanceToNow(new Date(startDate), {
                    addSuffix: true,
                    locale: ptBR
                  })}</td>

                  <td>
                    {finishedDate && (
                      <Status statusColor="green">Concluído</Status>
                    )}

                    {interruptedDate && (
                      <Status statusColor="red">Interrompido</Status>
                    )}

                    {!finishedDate && !interruptedDate && (
                      <Status statusColor="yellow">Em andamento</Status>
                    )}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </HistoricList>
    </HistoricContainer>
  );
}
