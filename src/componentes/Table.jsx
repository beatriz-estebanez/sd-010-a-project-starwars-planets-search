import React from 'react';
import { PlanetContext } from '../context/PlanetProvider';
import FormFilter from './FormFilter';

const Table = () => {
  const { data, filters, setFilters, setData } = React.useContext(PlanetContext);

  const thead = () => (
    <thead>
      <tr>
        {Object.keys({ ...data[0] }).map((title) => (<th key={ title }>{title}</th>))}
      </tr>
    </thead>
  );

  const tbody = () => (
    <tbody>
      {data.filter((planet) => planet.name.toLowerCase().includes(filters.filterByName))
        .map((elem) => (
          <tr key={ elem.name }>
            {Object.values(elem)
              .map((item) => <td key={ item }>{item}</td>)}
          </tr>))}
    </tbody>
  );

  const pesquisar = () => (
    <input
      data-testid="name-filter"
      value={ filters.filterByName }
      onChange={ (e) => setFilters({
        ...filters,
        filterByName: e.target.value.toLowerCase(),
      }) }
    />
  );

  return (
    <>
      { pesquisar() }
      <FormFilter
        setFilters={ setFilters }
        filters={ filters }
        setData={ setData }
      />
      <table>
        { thead() }
        { tbody() }
      </table>
    </>

  );
};

export default Table;
