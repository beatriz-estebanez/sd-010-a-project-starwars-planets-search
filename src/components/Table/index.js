import React, { useContext } from 'react';
import { PlanetsContext } from '../../context/PlanetsContext';
import PlanetInfos from '../PlanetInfos';

const Table = () => {
  const { data } = useContext(PlanetsContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>População</th>
          <th>Diâmetro</th>
          <th>Período de rotação</th>
          <th>Período Orbital</th>
          <th>Clima</th>
          <th>Gravidade</th>
          <th>Bioma</th>
          <th>Parte com agua</th>
          <th>Criada</th>
          <th>Editada</th>
          <th>Filmes</th>
          <th>URL</th>
        </tr>
      </thead>

      <tbody>
        {data && data.length > 0 && data.map((planet) => (
          <PlanetInfos
            key={ planet.name }
            planetData={ planet }
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
