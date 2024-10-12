import Code from "../Code";

const CodePreview = ({ codeString, stats, codeType, diff }) => {
  // Filtra as linhas removidas e adicionadas separadamente
  const removedLines = diff
    .filter((item) => item.type === "removed")
    .map((item) => item.line);
  const addedLines = diff
    .filter((item) => item.type === "added")
    .map((item) => item.line);

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Visualização do Código</h3>
      <Code
        setHeight={"300px"}
        codeType={codeType}
        InitialCodeString={codeString}
        codeEditable={false}
        setCodeString={codeString}
        codeString={codeString}
      />

      {diff.length > 0 && (
        <div className="p-4 mt-3 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Diferenças no Código</h3>

          {/* Exibe linhas removidas */}
          {removedLines.length > 0 && (
            <div className="mb-4">
              <h4 className="text-md font-semibold text-red-600">
                Linhas Alteradas
              </h4>
              <Code
                setHeight={"200px"}
                codeType={codeType}
                InitialCodeString={removedLines.join("\n")}
                codeEditable={false}
                setCodeString={removedLines.join("\n")}
                codeString={removedLines.join("\n")}
              />
            </div>
          )}

          {/* Exibe linhas adicionadas */}
          {addedLines.length > 0 && (
            <div className="mb-4">
              <h4 className="text-md font-semibold text-green-600">
                Linhas Adicionadas
              </h4>
              <Code
                setHeight={"200px"}
                codeType={codeType}
                InitialCodeString={addedLines.join("\n")}
                codeEditable={false}
                setCodeString={addedLines.join("\n")}
                codeString={addedLines.join("\n")}
              />
            </div>
          )}
        </div>
      )}

      <div className="bg-gray-700 my-3 p-4 rounded-lg border border-gray-600">
        <h3 className="text-lg font-semibold mb-2">
          Estatísticas do Código Comprimido
        </h3>
        <ul className="text-sm space-y-1">
          <li className="flex justify-between items-center">
            <strong>Tamanho Original:</strong> {stats.originalSize} bytes
          </li>
          <li className="flex justify-between items-center">
            <strong>Tamanho Comprimido:</strong> {stats.compressedSize} bytes
          </li>
          <li className="flex justify-between items-center">
            <strong>Redução em % :</strong> {stats.reductionPercentage}%
          </li>
          <li className="flex justify-between items-center">
            <strong>Redução de caracteres:</strong> {stats.reduction}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CodePreview;
