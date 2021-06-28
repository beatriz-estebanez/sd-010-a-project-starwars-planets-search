import React, { useContext } from 'react';
import FilterContext from '../CONTEXT/FilterContext';

function FilterColunm() {
  const contextFilter = useContext(FilterContext);
  const { planetName,
    filterColumn,
    setFilterColumn,
    filterComparison,
    setFilterComparison,
    filterValue,
    setFilterValue,
    // setBtnFilter,
    filter,
    setFilter } = contextFilter;

  function handleClick() {
    const objFilterOnly = {
      column: filterColumn,
      comparison: filterComparison,
      value: filterValue,
    };
    const objFilter = { filters: {
      filterByName: {
        name: { planetName } },
      filterByNumericValues: [...filter.filters.filterByNumericValues, objFilterOnly],
    } };
    setFilter(objFilter);
    // setBtnFilter(true);
    // enviar dados locais, column, comparison e value como objeto para dentro do filter // req. 4
  }

  return (
    <div>
      <select
        data-testid="column-filter"
        value={ filterColumn }
        onChange={ (e) => setFilterColumn(e.target.value) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select
        data-testid="comparison-filter"
        value={ filterComparison }
        onChange={ (e) => setFilterComparison(e.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        type="number"
        data-testid="value-filter"
        value={ filterValue }
        onChange={ (e) => setFilterValue(e.target.value) }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Adicionar filtro
      </button>
    </div>
  );
}

export default FilterColunm;
