import React, { useContext } from 'react';
// Todos os lugares que eu importar meu Context (SWContext)
// receberão as informações dos estados: Linha abaixo!
import SWContext from '../Context/SWContext';

function Table() {
  // Desconstruindo "data" que está no useState do SWProvider
  // para depois fazer um .map e distribuir as informações dos planetas
  const { data } = useContext(SWContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Período de Rotação</th>
          <th>Período Orbital</th>
          <th>Diâmetro</th>
          <th>Clima</th>
          <th>Gravidade</th>
          <th>Relevo</th>
          <th>Água na Superfície</th>
          <th>População</th>
          <th>Filmes</th>
          <th>Criado</th>
          <th>Editado</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {data.map((swplaneta) => (
          <tr key={ swplaneta.name }>
            <td>{swplaneta.name}</td>
            <td>{swplaneta.rotation_period}</td>
            <td>{swplaneta.orbital_period}</td>
            <td>{swplaneta.diameter}</td>
            <td>{swplaneta.climate}</td>
            <td>{swplaneta.gravity}</td>
            <td>{swplaneta.terrain}</td>
            <td>{swplaneta.surface_water}</td>
            <td>{swplaneta.population}</td>
            <td>{swplaneta.films}</td>
            <td>{swplaneta.created}</td>
            <td>{swplaneta.edited}</td>
            <td>{swplaneta.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Table;
