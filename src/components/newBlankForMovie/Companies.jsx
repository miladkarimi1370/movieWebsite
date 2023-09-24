import React from "react";

export default function Companies({ companies }) {
  const companyOfMovie =
    companies &&
    companies.map((company) => {
      return <span className="py-2 line-height-p-2" key={company.id}>{company.name} , </span>;
    });
  return <>Production Company :  {companyOfMovie && companyOfMovie}</>;
}
