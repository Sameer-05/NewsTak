import React from 'react';
import loading from './loading.gif';

function Spinner() {
  return (
    <div className="text-center">
      <img className="my-3" src={loading} alt="loading" width="20px" height="40px" />
    </div>
  );
}

export default Spinner;
