import Code from "../pageElements/PageCode/Code";

const CodePreview = ({ codeString, stats, codeType }) => {
  
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
            <strong>Redução:</strong> {stats.reductionPercentage}%
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CodePreview;
