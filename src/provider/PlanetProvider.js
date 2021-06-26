import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from '../context/PlanetContext';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilter] = useState([]);
  const [filtred, setFiltred] = useState([]);
  const context = {
    data,
    setData,
    filters,
    setFilter,
    filtred,
    setFiltred,
  };
  return (
    <PlanetContext.Provider value={ context }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PlanetProvider;
