import React from "react";

class Companies extends React.Component {
  render() {
    return (
      <div>
        {this.props.companies.map((c) => {
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
  }
}

export default Companies;
