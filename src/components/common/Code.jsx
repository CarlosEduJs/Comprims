import { useState, useEffect } from "react";

import CodeMirror from "@uiw/react-codemirror";
import { indentOnInput } from "@codemirror/language";
import { keymap } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import { EditorView } from "@codemirror/view";

import { javascript } from "@codemirror/lang-javascript";

import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { json } from "@codemirror/lang-json";

import CopyBtn from "./Buttons/CopyBtn";

const Code = ({
  codeType,
  setCodeString,
  codeString,
  codeEditable,
  setHeight,
}) => {
  const [selectedCharCount, setSelectedCharCount] = useState(0);
  const [charCount, setCharCount] = useState(codeString.length);
  const [lnCount, setLnCount] = useState(1);
  const [colsCount, setColsCount] = useState(1);

  const updateStatistics = (value) => {
    
    setCharCount(value.length);
    setLnCount(value.split(/\r\n|\r|\n/).length);
  };

  useEffect(() => {
    updateStatistics(codeString);
  }, [codeString]);

  const updateCursorPosition = (view) => {
    const cursor = view.state.selection.main.head;
    const line = view.state.doc.lineAt(cursor);
    const column = cursor - line.from + 1;

    setLnCount(line.number);
    setColsCount(column);
  };

  const handleCodeChange = (value) => {
    setCodeString(value);
    updateStatistics(value);
  };

  const handleSelectionChange = (view) => {
    const selection = view.state.sliceDoc(
      view.state.selection.main.from,
      view.state.selection.main.to
    );
    setSelectedCharCount(selection.length);
  };

  const getLanguageExtension = (language) => {
    switch (language) {
      case "javascript":
        return javascript();
      case "html":
        return html();
      case "css":
        return css();
      case "json":
        return json();
      default:
        return javascript();
    }
  };

  return (
    <div className="bg-gray-700 rounded-md">
      <div className="py-1 px-4 flex gap-3 items-center justify-between">
        <h1 className="text-[12px] font-bold">{codeType}</h1>
        <CopyBtn code={codeString} />
      </div>
      {codeEditable && (
        <>
          <CodeMirror
            value={codeString}
            height={setHeight}
            theme={"dark"}
            extensions={[
              getLanguageExtension(codeType),
              indentOnInput(),
              keymap.of(defaultKeymap),
              EditorView.theme({
                ".cm-scroller": { overflow: "auto" }, // Scroll horizontal suave
              }),
            ]}
            onChange={(value, viewUpdate) => {
              setCodeString(value);
              updateStatistics(value);
              updateCursorPosition(viewUpdate.view);

              handleCodeChange(value);
            }}
            onUpdate={(viewUpdate) => {
              updateCursorPosition(viewUpdate.view);
              handleSelectionChange(viewUpdate.view);
            }}
            className="border w-[100%] border-gray-700 rounded-md overflow-hidden"
          />
          <div className="px-4 flex items-center gap-4 text-sm max-lg:flex-col">
            <div className="flex gap-3">
              <span className=" count-span">Chars: {charCount}</span>
              {selectedCharCount > 0 && (
                <span className="border-l count-span border-slate-700 pl-2">
                  Selected Chars: {selectedCharCount}
                </span>
              )}
              <span className="border-l count-span border-slate-700 pl-2">
                Ln: {lnCount}
              </span>
              <span className="border-l count-span border-slate-700 pl-2">
                Cols: {colsCount}
              </span>
            </div>
          </div>
        </>
      )}
      {!codeEditable && (
        <CodeMirror
          value={codeString}
          height={setHeight}
          theme={"dark"}
          extensions={[getLanguageExtension(codeType)]}
          editable={codeEditable}
          className="border border-gray-700 rounded-md"
        />
      )}
    </div>
  );
};

export default Code;
