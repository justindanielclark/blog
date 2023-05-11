import React, { useState } from "react";
import { Form } from "react-router-dom";
import Content from "../../types/Content";

function Admin() {
  const [state, setState] = useState<Array<Content>>(initializeState());
  return (
    <>
      <div>
        <button className="block bg-green-800 rounded-lg p-1 my-2" onClick={addHeader}>
          Add Header
        </button>
        <button className="block bg-green-800 rounded-lg p-1 mb-2" onClick={addParagraph}>
          Add Paragraph
        </button>
        <button className="block bg-green-800 rounded-lg p-1 mb-2" onClick={addImage}>
          Add Image
        </button>
      </div>
      <Form>{generateInputs(state)}</Form>
    </>
  );
  function initializeState(): Array<Content> {
    return [
      { type: "header", content: "A dummy header" },
      { type: "paragraph", content: "A dummy paragraph" },
    ];
  }
  function generateInputs(content: Array<Content>): Array<JSX.Element> {
    return content.map((item, idx) => {
      let returnVal: JSX.Element;
      switch (item.type) {
        case "paragraph": {
          returnVal = React.createElement("div", { className: "text-white", key: idx }, [
            React.createElement("label", {}, "Paragraph Label:"),
            React.createElement("textarea", {}, item.content),
          ]);
          break;
        }
        case "header": {
          returnVal = React.createElement("div", { className: "text-white", key: idx }, [
            React.createElement("label", { className: "block" }, "Header:"),
            React.createElement("textarea", {}, item.content),
          ]);
          break;
        }
        case "image": {
          returnVal = React.createElement("div", { className: "text-white", key: idx }, [
            React.createElement("label", {}, "Paragraph Label:"),
          ]);
          break;
        }
      }
      return returnVal;
    });
  }
  function addParagraph(): void {
    //TODO
    console.log("addParagraph");
  }
  function addHeader(): void {
    //TODO
    console.log("addHeader");
  }
  function addImage(): void {
    //TODO
    console.log("addImage");
  }
}

export default Admin;
