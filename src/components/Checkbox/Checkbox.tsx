import * as React from 'react';

const Checkbox = () => {
  return (
    <div className="body">
      <h1>Checkbox override</h1>
      <div className="checkboxOverride">
        <input type="checkbox" name="" id="checkboxInputOverride" value="1" />
        <label htmlFor="checkboxInputOverride"></label>
      </div>
    </div>
  );
};

export default Checkbox;
