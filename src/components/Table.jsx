import React, { useContext } from 'react';
import ContextPlanets from '../context/ContextPlanets';
import { columnTitle } from '../context/ProviderPlanets';

function Table() {
  const { filteredPlanets, updateSortKey, isLoading } = useContext(ContextPlanets);
  return (
    <div>
      {
        isLoading
          ? <h1>Carregando</h1>
          : (
            <table>
              <tr>
                {columnTitle.map((column, index) => (
                  <th key={ index }>
                    {column}
                    <button
                      type="button"
                      onClick={ () => updateSortKey({ column, sort: 'ASC' }) }
                    >
                      ^
                    </button>
                    <button
                      type="button"
                      onClick={ () => updateSortKey({ column, sort: 'DESC' }) }
                    >
                      v
                    </button>
                  </th>
                ))}
              </tr>
              {filteredPlanets.map((planet, index) => (
                <tr key={ index }>
                  {Object.values(planet).map((info, index2) => (
                    <td key={ index2 }>{info}</td>
                  ))}
                </tr>
              ))}
            </table>
          )
      }
    </div>
  );
}

export default Table;
