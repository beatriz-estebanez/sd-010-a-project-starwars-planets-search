import React, { useContext, useState } from 'react';
import starwarsContext from '../context/starwarsContext';

export default function NumericFilter() {
  const [filtersInputs, setFiltersInput] = useState({
    columnInput: '',
    comparisonInput: 'maior que',
    valueInput: 0,
  });
  const { filters, setFilters } = useContext(starwarsContext);
  const { filterByNumericValues } = filters;

  const handleChange = ({ target }) => {
    setFiltersInput({ ...filtersInputs, [target.name]: target.value });
  };

  const availableOptions = () => {
    const options = [
      'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
    ];
    const usedOptions = filterByNumericValues.map((filter) => filter.column);

    return options.filter(
      (option) => !usedOptions.some((usedOption) => usedOption === option),
    );
  };

  const handleClick = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        {
          column: filtersInputs.columnInput || availableOptions()[0],
          comparison: filtersInputs.comparisonInput,
          value: filtersInputs.valueInput,
        },
      ],
    });
  };

  const renderOptions = () => {
    const options = [
      'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
    ];
    if (filterByNumericValues.length === 0) {
      return (
        options.map(
          (option, index) => <option key={ index } value={ option }>{option}</option>,
        )
      );
    }
    return (
      availableOptions().map(
        (option, index) => <option key={ index } value={ option }>{option}</option>,
      )
    );
  };

  return (
    <div>
      <label htmlFor="column-filter">
        Parâmetro:
        <select
          data-testid="column-filter"
          id="column-filter"
          name="columnInput"
          value={ filtersInputs.columnInput }
          onChange={ (e) => handleChange(e) }
        >
          {renderOptions()}
        </select>
      </label>

      <label htmlFor="comparison-filter">
        Comparação:
        <select
          data-testid="comparison-filter"
          id="comparison-filter"
          name="comparisonInput"
          value={ filtersInputs.comparisonInput }
          onChange={ (e) => handleChange(e) }
        >
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
          <option value="menor que">menor que</option>
        </select>
      </label>

      <label htmlFor="value-filter">
        Valor:
        <input
          type="number"
          data-testid="value-filter"
          id="value-filter"
          name="valueInput"
          value={ filtersInputs.valueInput }
          onChange={ (e) => handleChange(e) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClick() }
      >
        Filtrar
      </button>
    </div>
  );
}
