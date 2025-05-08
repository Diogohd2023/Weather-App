import CitySearch from "./Script/script.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faLocationDot,
  faDroplet,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function App() {
  //Mensagem do h1
  const mensagem = "Confira o clima de uma cidade:";

  //Esse state "weatherData" começa vazio e guardara os dados do clima
  const [weatherData, setWeatherData] = useState(null);
  //Esse state "error" armazena as mensagens de erro
  const [error, setError] = useState("");

  //Funçao assincrona que busca o clima de uma cidade
  const handleSearch = async (city) => {
    //Se o campo do input estiver vazio, mostra um erro e para tudo
    if (!city) {
      //Erro e limpo para fazer outra busca
      setError("Digite o nome de uma cidade! ");
      return;
    }
    try {
      setError(""); // Limpa o erro

      const apiKey = "2d3abf193ca0feedcb43f665eb9965b0";

      //Faz a requisição HTTP pro OpenWeather
      const response = await fetch(
        // ${city} -> Usa a cidade informada pelo usuario
        // units=metric -> Pede os dados em graus Celsius
        // lang-pt_br -> Os dados em portugues

        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`
      );

      console.log("STATUS DA RESPOSTA:", response.status);
      console.log("RESPONSE COMPLETO:", response);

      //Pega a resposta e transforma em JSON (objeto JavaScript utilizavel)
      // data -> guarda todas as informaçoes da cidade
      const data = await response.json();

      console.log(data); // <<< PRA VER O QUE A API ESTÁ DEVOLVENDO

      //Verifica se a resposta da requisição foi bem-sucedida.
      if (response.ok) {
        setWeatherData({
          //Pega o nome da cidade
          city: data.name,

          //Acessa o codigo do país
          country: data.sys.country,

          //Pega a temperatura atual e usa "Math.round()" arredonda para o inteiro mais proximo
          temperature: Math.round(data.main.temp),

          //A API retorna um array de condições do tempo
          description: data.weather[0].description,

          //Essa linha monta a URL de um ícone de clima com base no código retornado pela API
          weatherIcon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,

          //Pega o nível de umidade do ar, que vem em porcentagem
          humidity: data.main.humidity,

          //Pega a velocidade do vento
          wind: data.wind.speed,
        });

        // Este bloco de código é executado se a condição anterior (if) for falsa
      } else {
        // Ao passar null voce está limpando qualquer dado climatico anterior
        setWeatherData(null);
        // Atualiza um estado de erro, informando a situaçao para o usuario
        setError("Cidade não encontrada!");
      }
      //Se algum erro ocorrer dentro do bloco 'try' o controle é transferido para o bloco 'catch'
      //Variavel 'err' contem as informçaoes do erro
    } catch (err) {
      setWeatherData(null);
      //Mensagem de erro
      setError("Erro ao buscar dados!");
    }
  };

  //Array com as cidades
  const cidades = [
    "Viena",
    "Zurique",
    "Genebra",
    "Osaka",
    "Copenhague",
    "Vancouver",
    "Tokyo",
    "Boston",
  ];

  return (
    <div className="bg-blue-400 min-h-screen flex items-center justify-center p-4">
      <div className="bg-blue-500 text-white p-6 rounded-md shadow-md w-full max-w-lg">
        <h1 className="text-2xl mb-4 text-center">{mensagem}</h1>

        <div className="mb-4">
          {/* Icone de lupa */}
          <CitySearch onSearch={handleSearch} />
        </div>

        {error && (
          <p className="text-red-200 bg-red-600 p-2 rounded mb-4 text-center">
            {error}
          </p>
        )}

        <hr className="mb-4 border-t border-[#000] opacity-50" />

        <div className="grid grid-cols-2 gap-3 mb-6">
          {/*Pega cada nome de cidade no array 'cidades' e cria um botão para cada uma delas*/}
          {cidades.map((cidade, index) => (
            <button
              key={index}
              // Quando 1 desses botoes e clicado a função "handleSearch" e chamada
              onClick={() => handleSearch(cidade)}
              className="bg-blue-300 border-2 border-black rounded-3xl cursor-pointer h-10 hover:bg-transparent"
            >
              {cidade}
            </button>
          ))}
        </div>

        {weatherData && (
          <div id="weather-data" className="text-center">
            <h2 className="text-xl font-bold mb-2 flex justify-center items-center gap-2">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{weatherData.city}</span>
              <img
                src={`https://flagsapi.com/${weatherData.country}/shiny/64.png`}
                alt="Bandeira do país"
                className="w-6 h-6"
              />
            </h2>

            <div id="temperature" className="text-3xl mb-2">
              {/* Temperatura em graus Celsius */}
              {weatherData.temperature}&deg;C
            </div>

            <div
              id="description-container"
              className="flex justify-center items-center gap-2 mb-2"
            >
              <p className="capitalize">{weatherData.description}</p>
              <img
                src={weatherData.weatherIcon}
                alt="Condições do tempo"
                className="w-10 h-10"
              />
            </div>

            <p id="humidity" className="mb-1">
              {/* Icone de umidade */}
              <FontAwesomeIcon icon={faDroplet} /> {weatherData.humidity}%
            </p>
            <p id="wind">
              {/* Icone de vento */}
              <FontAwesomeIcon icon={faWind} /> {weatherData.wind} km/h
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
