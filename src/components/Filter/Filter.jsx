import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-top: 20px;
`;

const Filter = ({ value, onChange }) => (
  <Wrapper>
    <label htmlFor="filter">Find contact by name</label>
    <input id="filter" type="text" value={value} onChange={onChange} />
  </Wrapper>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
