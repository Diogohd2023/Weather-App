//useState -> Armazena os dados da cidade e o nome
//useCallback -> Nao cria uma funçao nova sempre que o componente renderiza
import React, { useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const CitySearch = ({ onSearch }) => {
  //city -> valor atual do input
  //setCity -> funçao que atualiza o valor atual
  const [city, setCity] = useState(""); //useState("") -> Começa com um valor vazio
  //Funçao chamada quando o usuario clica no botão de pesquisa
  const beginSearch = useCallback(
    (e) => {
      //Evita que a pagina recarregue
      e.preventDefault();

      //Verifica se a barra do input nao esta vazio
      if (city.trim()) {
        // -> city.trim Remove os espaços do começo e do fim da string.
        // onSearch(city) chama a função onSearch ( passada como prop) e manda a cidade como argumento.
        onSearch(city);
      }
    },
    [city, onSearch]
  );

  return (
    //Chama a função beginSearch ao clicar no icone da lupa
    <form onSubmit={beginSearch}>
      <input
        type="text"
        id="city-input"
        //Valor atual vem do city
        value={city}
        //Toda vez que digitar o nome de uma cidade a variavel city e atualizada
        onChange={(e) => setCity(e.target.value)}
        placeholder="Digite o nome da cidade"
        className="border-2 border-black rounded-l-xl py-2 px-4 w-80 h-12 transform translate-x-15 translate-y-1"
      />
      <button
        type="submit"
        className="cursor-pointer bg-blue-300 p-2 rounded-r-xl hover:bg-transparent transform translate-x-15 translate-y-1"
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
  );
};

export default CitySearch;
