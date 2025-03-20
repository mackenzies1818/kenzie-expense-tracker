import React from 'react';

//TODO
const Summary = () => (
  <div className="grid grid-cols-3 gap-4 p-4">
    {['Total Balance', 'Monthly Income', 'Expenses'].map((item) => (
      <div key={item} className="bg-white p-4 rounded shadow-md text-center">
        <h3 className="text-lg font-semibold">{item}</h3>
        <p className="text-2xl font-bold">$0.00</p>
      </div>
    ))}
  </div>
);

export default Summary;
