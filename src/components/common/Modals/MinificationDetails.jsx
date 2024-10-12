import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ArrowDownIcon,
  BoltIcon,
} from "@heroicons/react/16/solid";

import Code from "../Code";

const MinificationDetails = ({ minificationDetails }) => {
  const exampleCode = {
    javascript: {
      original: `// Contador simples em JavaScript
let count = 0;

function increment() {
  count++;
  document.getElementById("counter").textContent = count;
}

function reset() {
  count = 0;
  document.getElementById("counter").textContent = count;
}
`,
      high: `let count = 0;function increment(){count++;document.getElementById("counter").textContent = count;}function reset(){count = 0;document.getElementById("counter").textContent = count;}`, // Alta compressão
      normal: `let count = 0; function increment() { count++; document.getElementById("counter").textContent = count;
} function reset() { count = 0; document.getElementById("counter").textContent = count;
}`, // Compressão normal
      low: `
let count = 0;

function increment() {
  count++;
  document.getElementById("counter").textContent = count;
}

function reset() {
  count = 0;
  document.getElementById("counter").textContent = count;
}
`, // Compressão fraca
      intelligent: `let count = 0; function increment() { count++; document.getElementById("counter").textContent = count;
} function reset() { count = 0; document.getElementById("counter").textContent = count;
}`,
    },
    html: {
      original: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contador Simples</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>Contador: <span id="counter">0</span></h1>
    <button onclick="increment()">Incrementar</button>
    <button onclick="reset()">Resetar</button>
  </div>

  <script src="script.js"></script>
</body>
</html>
`, // Código original sem compressão
      high: `<!DOCTYPE html><html lang="en"><head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width,initial-scale=1.0"> <title>Contador Simples</title> <link rel="stylesheet" href="styles.css"></head><body> <div class="container"> <h1>Contador:<span id="counter">0</span></h1> <button onclick="increment()">Incrementar</button> <button onclick="reset()">Resetar</button> </div> <script src="script.js"></script></body></html>`, // Alta compressão: Remove aspas e espaços extras
      normal: `<!DOCTYPE html>
<html lang="en">
<head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Contador Simples</title> <link rel="stylesheet" href="styles.css">
</head>
<body> <div class="container"> <h1>Contador: <span id="counter">0</span></h1> <button onclick="increment()">Incrementar</button> <button onclick="reset()">Resetar</button> </div> <script src="script.js"></script>
</body>
</html>`, // Compressão normal: Remove comentários e espaços desnecessários, mas mantém o código legível
      low: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contador Simples</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>Contador: <span id="counter">0</span></h1>
    <button onclick="increment()">Incrementar</button>
    <button onclick="reset()">Resetar</button>
  </div>

  <script src="script.js"></script>
</body>
</html>
`, // Compressão fraca: Remove apenas comentários, mantendo o resto intacto
      intelligent: `<!DOCTYPE html>
<html lang="en">
<head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Contador Simples</title> <link rel="stylesheet" href="styles.css">
</head>
<body> <div class="container"> <h1>Contador: <span id="counter">0</span></h1> <button onclick="increment()">Incrementar</button> <button onclick="reset()">Resetar</button> </div> <script src="script.js"></script>
</body>
</html>`,
    },

    css: {
      original: `/* Estilos para o contador */
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.container {
  text-align: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

button {
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}
`,
      high: `body{font-family:Arial,sans-serif;background-color:#f0f0f0;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;}.container{text-align:center;background-color:#fff;padding:20px;border-radius:10px;box-shadow:0 4px 8px rgba(0,0,0,0.1);}button{margin:10px;padding:10px 20px;font-size:16px;cursor:pointer;border:none;border-radius:5px;background-color:#007bff;color:white;transition:background-color 0.3s ease;}button:hover{background-color:#0056b3;}`, // Alta compressão
      normal: `body { font-family: Arial, sans-serif; background-color: #f0f0f0; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0;
} .container { text-align: center; background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
} button { margin: 10px; padding: 10px 20px; font-size: 16px; cursor: pointer; border: none; border-radius: 5px; background-color: #007bff; color: white; transition: background-color 0.3s ease;
} button:hover { background-color: #0056b3;
}`, // Compressão normal
      low: `
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.container {
  text-align: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

button {
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}
`,
      intelligent: `body { font-family: Arial, sans-serif; background-color: #f0f0f0; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0;
} .container { text-align: center; background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
} button { margin: 10px; padding: 10px 20px; font-size: 16px; cursor: pointer; border: none; border-radius: 5px; background-color: #007bff; color: white; transition: background-color 0.3s ease;
} button:hover { background-color: #0056b3;
}`,
    },
    json: {
      original: `{
  "projectName": "SimpleCounter",
  "version": "1.0.0",
  "description": "Um projeto simples de contador com HTML, CSS e JavaScript",
  "author": "Seu Nome",
  "dependencies": {
    "bootstrap": "^5.3.0"
  }
}
`,
      high: `{"projectName":"SimpleCounter","version":"1.0.0","description":"Um projeto simples de contador com HTML,CSS e JavaScript","author":"Seu Nome","dependencies":{"bootstrap":"^5.3.0"}}`, // Alta compressão
      normal: `{ "projectName": "SimpleCounter", "version": "1.0.0", "description": "Um projeto simples de contador com HTML, CSS e JavaScript", "author": "Seu Nome", "dependencies": { "bootstrap": "^5.3.0" }`, // Compressão normal
      low: `{
  "projectName": "SimpleCounter",
  "version": "1.0.0",
  "description": "Um projeto simples de contador com HTML, CSS e JavaScript",
  "author": "Seu Nome",
  "dependencies": {
    "bootstrap": "^5.3.0"
  }
}
`, // Compressão fraca
      intelligent: `{ "projectName": "SimpleCounter", "version": "1.0.0", "description": "Um projeto simples de contador com HTML, CSS e JavaScript", "author": "Seu Nome", "dependencies": { "bootstrap": "^5.3.0" }
}`,
    },
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Níveis de Compressão</h3>
      <div className="grid grid-cols-1 gap-6">
        {Object.keys(minificationDetails).map((language) => (
          <div
            key={language}
            className="bg-gray-900 p-4 rounded-lg border border-gray-600"
          >
            <h4 className="text-md font-bold capitalize mb-4 text-center">
              {language.toUpperCase()}
            </h4>
            <div className="space-y-6 ">
              <div className="space-y-2 pb-2 border-b border-slate-500">
                <div className="flex items-center space-x-2">
                  <p className="text-sm font-medium text-blue-300">
                    Codigo Original:
                  </p>
                </div>
                <div className="bg-gray-600 rounded-md">
                  <Code
                    setHeight={"200px"}
                    codeType={language}
                    InitialCodeString={exampleCode[language]?.original || "N/A"}
                    codeEditable={false}
                    setCodeString={exampleCode[language]?.original || "N/A"}
                    codeString={exampleCode[language]?.original || "N/A"}
                  />
                </div>
              </div>
              {/* Alta Compressão */}
              <div className="space-y-2 pb-2 border-b border-slate-500">
                <div className="flex items-center space-x-2">
                  <ExclamationTriangleIcon className="h-6 w-6 text-red-500" />
                  <p className="text-sm font-medium text-red-300">
                    Alta Compressão:
                  </p>
                </div>
                <p className="text-sm">{minificationDetails[language].high}</p>
                <div className="bg-gray-600 rounded-md">
                  <Code
                    setHeight={"200px"}
                    codeType={language}
                    InitialCodeString={exampleCode[language]?.high || "N/A"}
                    codeEditable={false}
                    setCodeString={exampleCode[language]?.high || "N/A"}
                    codeString={exampleCode[language]?.high || "N/A"}
                  />
                </div>
              </div>
              {/* Compressão Normal */}
              <div className="space-y-2 pb-2 border-b border-slate-500">
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="h-6 w-6 text-yellow-500" />
                  <p className="text-sm font-medium text-yellow-300">
                    Compressão Normal:
                  </p>
                </div>
                <p className="text-sm">
                  {minificationDetails[language].normal}
                </p>
                <div className="bg-gray-600 rounded-md">
                  <Code
                    setHeight={"200px"}
                    codeType={language}
                    InitialCodeString={exampleCode[language]?.normal || "N/A"}
                    codeEditable={false}
                    setCodeString={exampleCode[language]?.normal || "N/A"}
                    codeString={exampleCode[language]?.normal || "N/A"}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <ArrowDownIcon className="h-6 w-6 text-orange-500" />
                  <p className="text-sm font-medium text-orange-300">
                    Compressão Fraca:
                  </p>
                </div>
                <p className="text-sm">{minificationDetails[language].low}</p>
                <div className="bg-gray-600 rounded-md">
                  <Code
                    setHeight={"200px"}
                    codeType={language}
                    InitialCodeString={exampleCode[language]?.low || "N/A"}
                    codeEditable={false}
                    setCodeString={exampleCode[language]?.low || "N/A"}
                    codeString={exampleCode[language]?.low || "N/A"}
                  />
                </div>
              </div>
              <div className="space-y-2 pb-2 border-b border-slate-500">
                <div className="flex items-center space-x-2">
                  <BoltIcon className="h-6 w-6 text-green-500" />
                  <p className="text-sm font-medium text-green-300">
                    Compressão Inteligente:
                  </p>
                </div>
                <p className="text-sm">
                  Esta compressão ajusta automaticamente o nível com base no
                  tamanho e na quantidade de comentários no código, aplicando
                  otimizações conforme necessário para manter um equilíbrio
                  entre legibilidade e tamanho comprimido.
                </p>
                <div className="bg-gray-600 rounded-md">
                  <Code
                    setHeight={"200px"}
                    codeType={language}
                    InitialCodeString={
                      exampleCode[language]?.intelligent || "N/A"
                    }
                    codeEditable={false}
                    setCodeString={exampleCode[language]?.intelligent || "N/A"}
                    codeString={exampleCode[language]?.intelligent || "N/A"}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h3 className="text-lg font-semibold mt-4">Nível Inteligente</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-900 p-4 rounded-lg border border-gray-600">
          <h4 className="text-md font-bold mb-4">
            Sobre a Compressão Inteligente
          </h4>
          <p className="text-sm text-gray-300">
            A compressão inteligente ajusta o nível de compressão
            automaticamente com base no tamanho e na complexidade do código. Se
            o código for extenso ou tiver muitos comentários, ela aplicará uma
            compressão mais agressiva. Para código menor, a compressão será mais
            leve, mantendo a legibilidade.
          </p>
          <p className="text-sm text-gray-300">
            Dependendo das características do código, a compressão pode variar
            entre fraca, normal, alta, ou muito alta, conforme os parâmetros
            analisados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MinificationDetails;
