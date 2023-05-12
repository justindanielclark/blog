import React, { useState } from "react";
import { Form } from "react-router-dom";
import Content, { Paragraph, Header, Image } from "../../types/Content";
import { v4 as uuidv4 } from "uuid";

type withUUID = {
  _id: string;
};

type ContentWithID = withUUID & Content;
type ParagraphWithID = withUUID & Paragraph;
type HeaderWithID = withUUID & Header;

type State = {
  title: string;
  content: Array<ContentWithID>;
};

function Admin() {
  const [state, setState] = useState<State>(initializeState());
  return (
    <div className="mx-auto max-w-xl">
      <div className="text-sm my-2">
        <button className=" bg-green-800 rounded-lg p-1 mr-2" onClick={addHeader}>
          Add Header
        </button>
        <button className=" bg-green-800 rounded-lg p-1 mx-2" onClick={addParagraph}>
          Add Paragraph
        </button>
        <button className=" bg-green-800 rounded-lg p-1 mx-2" onClick={addImage}>
          Add Image
        </button>
      </div>
      <Form>
        <div>
          <label>Title:</label>
          <input
            type="text"
            className="block w-full text-sm p-1 text-black"
            placeholder="A Very Cool Title"
            value={state.title}
            onChange={(e) => onChangeTitle(e)}
          />
        </div>
        {generateInputs(state.content)}
        <button className="block bg-green-800 rounded-lg p-1 my-2">Submit</button>
      </Form>
    </div>
  );
  function initializeState(): State {
    return {
      title: "",
      content: [],
    };
  }
  function generateInputs(content: Array<ContentWithID>): Array<JSX.Element> {
    return content.map((item, idx) => {
      let returnVal: JSX.Element;
      switch (item.type) {
        case "paragraph": {
          returnVal = React.createElement("div", { className: "text-white", key: item._id }, [
            React.createElement("label", { key: `${item._id}_label` }, "Paragraph:"),
            React.createElement("textarea", {
              "data-index": idx,
              key: `${item._id}_input`,
              className: "text-black text-sm block w-full resize-none p-1",
              rows: 5,
              value: item.content,
              placeholder: "Placeholder text",
              onChange: (e) => onChangeParagraph(e as React.ChangeEvent<HTMLTextAreaElement>),
            }),
          ]);
          break;
        }
        case "header": {
          returnVal = React.createElement("div", { className: "text-white", key: item._id }, [
            React.createElement("label", { className: "block", key: `${item._id}_label` }, "Header:"),
            React.createElement("input", {
              "data-index": idx,
              key: `${item._id}_input`,
              type: "text",
              value: item.content,
              className: "text-black text-sm block w-full p-1",
              onChange: (e) => onChangeHeader(e as React.ChangeEvent<HTMLInputElement>),
            }),
          ]);
          break;
        }
        case "image": {
          returnVal = React.createElement("div", { className: "text-white", key: item._id }, [
            React.createElement("label", {}, "Paragraph:"),
          ]);
          break;
        }
        default: {
          returnVal = React.createElement("p", {}, "There has been an error you dork");
        }
      }
      return returnVal;
    });
  }
  function addParagraph(): void {
    const newParagraph: ParagraphWithID = {
      type: "paragraph",
      _id: uuidv4(),
      content: "",
    };
    const newContent = [...state.content, newParagraph];
    const newState: State = {
      ...state,
      content: newContent,
    };
    setState(newState);
  }
  function addHeader(): void {
    const newHeader: HeaderWithID = {
      type: "header",
      _id: uuidv4(),
      content: "",
    };
    const newContent = [...state.content, newHeader];
    const newState: State = {
      ...state,
      content: newContent,
    };
    setState(newState);
  }
  function addImage(): void {
    //TODO
    console.log("addImage");
  }
  function onChangeParagraph(e: React.ChangeEvent<HTMLTextAreaElement>): void {
    if (e.target.dataset.index) {
      const newContent = [...state.content];
      const paraIndex = parseInt(e.target.dataset.index);
      const paraCopy = { ...newContent[paraIndex] } as ParagraphWithID;
      paraCopy.content = e.target.value;
      newContent[paraIndex] = paraCopy;
      const newState: State = {
        ...state,
        content: newContent,
      };
      setState(newState);
    }
  }
  function onChangeHeader(e: React.ChangeEvent<HTMLInputElement>): void {
    if (e.target.dataset.index) {
      const newContent = [...state.content];
      const headerIndex = parseInt(e.target.dataset.index);
      const headerCopy = { ...newContent[headerIndex] } as HeaderWithID;
      headerCopy.content = e.target.value;
      newContent[headerIndex] = headerCopy;
      const newState: State = {
        ...state,
        content: newContent,
      };
      setState(newState);
    }
  }
  function onChangeTitle(e: React.ChangeEvent<HTMLInputElement>): void {
    setState({
      ...state,
      title: e.target.value,
    });
  }
}

export default Admin;
