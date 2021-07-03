import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function TableRows() {
  const { planetsList, inputText } = useContext(PlanetContext);

  const filtredPlanets = planetsList.filter((planet) => planet.name.includes(inputText));

  const tableRows = () => filtredPlanets
    .map((planet, index) => (
      <tr key={ index }>
        <td>{planet.name}</td>
        <td>{planet.rotation_period}</td>
        <td>{planet.orbital_period}</td>
        <td>{planet.diameter}</td>
        <td>{planet.climate}</td>
        <td>{planet.gravity}</td>
        <td>{planet.terrain}</td>
        <td>{planet.surface_water}</td>
        <td>{planet.population}</td>
        <td>{planet.residents}</td>
        <td>{planet.films}</td>
        <td>{planet.created}</td>
        {/* <td>{planet.edited}</td> */}
        <td>{planet.url}</td>
      </tr>
    ));

  return (
    <tbody>
      {tableRows()}
    </tbody>
  );
}

export default TableRows;
