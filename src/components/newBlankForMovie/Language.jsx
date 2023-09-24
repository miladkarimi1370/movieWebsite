import React from "react";

export default function Language({ languages }) {
  const languageOfMovie =
    languages &&
    languages.map((lang, index) => {
      return <span key={index}>{lang.name}</span>;
    });
  return <>Language : {languageOfMovie && languageOfMovie}</>;
}
