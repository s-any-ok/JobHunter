import React from "react";

const Companies = ({ companies }) => {
  return (
    <div>
      {companies.map((c) => {
        return (
          <div>
            <div>Name: {c.CompanyName}</div>
            <div>Information: {c.Information}</div>
            <div>ContactNumber: {c.ContactNumber}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Companies;
