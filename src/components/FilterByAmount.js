import React, { useContext, useState } from 'react';
import PlanetContext from '../context/PlanetContext';

function FilterByAmount() {
  const { data, filters, setFilter, setFiltred } = useContext(PlanetContext);
  const [value, setValue] = useState(0);
  const [comp, setComp] = useState('maior que');
  const [type, setType] = useState('rotation_period');

  function isNumeric(str) {
    const er = /^[0-9]+$/;
    return (er.test(str));
  }

  const renderType = () => {
    const names = Object.entries(data[0])
      .filter((name) => isNumeric(name[1]));

    return (
      <select
        onChange={ (e) => setType(e.target.value) }
        data-testid="column-filter"
      >
        { names.map((item, index) => (
          <option key={ index }>{Object.values(item)[0]}</option>
        ))}
      </select>
    );
  };

  const greaterThan = () => (
    <select
      onChange={ (e) => setComp(e.target.value) }
      data-testid="value-filter"
    >
      <option>maior que</option>
      <option>menor que</option>
      <option>igual a</option>
    </select>
  );

  const handleClick = () => {
    const complementar = filters;
    const addFilter = Object.assign(complementar, {
      filterByNumericValues: [{
        column: type,
        comparasion: comp,
        value,
      }],
    });
    setFilter(addFilter);

    function compareValue(number) {
      switch (comp) {
      case 'maior que':
        return number > value;
      case 'menor que':
        return number < value;
      default:
        return number === value;
      }
    }

    const amountFiltred = data.filter((item) => (
      Object.entries(item)
        .filter((newItem) => newItem[0] === type && compareValue(newItem[1]))
        .length > 0
    ));

    setFiltred(amountFiltred);
    console.log(amountFiltred);
  };

  return (
    <div>
      {data[0] && renderType()}
      {greaterThan()}
      <input
        onChange={ (e) => setValue(e.target.value) }
        data-testid="value-filter"
        type="number"
      />
      <button
        onClick={ () => handleClick() }
        type="button"
        data-testid="button-filter"
      >
        Filter
      </button>
    </div>
  );
}

export default FilterByAmount;
