import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Form } from "react-router-dom";
import Content, { Paragraph, Header, Image } from "../../types/Content";
import { v4 as uuidv4 } from "uuid";
import _api from "../../api/_api";

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
  const categories = useLoaderData() as Array<string>;
  return (
    <div className="mx-auto max-w-xl">
      <div className="text-sm my-2">
        <button className=" bg-green-800 text-white rounded-lg p-1 mr-2" onClick={addHeader}>
          Add Header
        </button>
        <button className=" bg-green-800 text-white rounded-lg p-1 mx-2" onClick={addParagraph}>
          Add Paragraph
        </button>
        <button className=" bg-green-800 text-white rounded-lg p-1 mx-2" onClick={addImage}>
          Add Image
        </button>
      </div>
      <Form method="post">
        <div>
          <label>Title:</label>
          <input
            type="text"
            className="block w-full text-sm p-1 text-black"
            placeholder="A Very Cool Title"
            value={state.title}
            onChange={(e) => onChangeTitle(e)}
            name="title"
          />
        </div>
        <div>
          <label>Category:</label>
          <div className="flex flex-row gap-6">
            {categories.map((category, idx) => {
              return (
                <div key={idx}>
                  <label htmlFor={`category_${category}`}>
                    <input type="checkbox" className="mr-1" name={`category_${category}`} />
                    {`${category.substring(0, 1).toUpperCase()}${category.substring(1)}`}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        {state.content.map((content, idx) => {
          let returnVal: JSX.Element;
          switch (content.type) {
            case "paragraph": {
              returnVal = (
                <div key={content._id} className="relative">
                  <label htmlFor={`content_${idx}_paragraph`}>Paragraph:</label>
                  <textarea
                    name={`content_${idx}_paragraph`}
                    data-index={idx}
                    className="text-black text-sm block w-full resize-none p-1"
                    rows={5}
                    value={content.content}
                    placeholder="Placeholder Text"
                    onChange={(e) => onChangeParagraph(e)}
                  />
                  <button
                    className="absolute right-0 top-0"
                    onClick={(e) => {
                      e.preventDefault();
                      removeItem(content._id);
                    }}
                  >
                    X
                  </button>
                </div>
              );
              break;
            }
            case "header": {
              returnVal = (
                <div className="relative" key={content._id}>
                  <label htmlFor={`content_${idx}_header`}>Header</label>
                  <input
                    type="text"
                    name={`content_${idx}_header`}
                    data-index={idx}
                    value={content.content}
                    className="text-black text-sm block w-full p-1"
                    onChange={(e) => onChangeHeader(e)}
                  />
                  <button
                    className="absolute right-0 top-0"
                    onClick={(e) => {
                      e.preventDefault();
                      removeItem(content._id);
                    }}
                  >
                    X
                  </button>
                </div>
              );
              break;
            }
            case "image": {
              returnVal = <div>SOMETHING HAS GONE WRONG</div>;
            }
          }
          return returnVal;
        })}
        <button type="submit" className="block bg-green-800 text-white rounded-lg p-1 my-2">
          Submit
        </button>
      </Form>
    </div>
  );
  function initializeState(): State {
    return {
      title: "A Title",
      content: [
        {
          _id: "1",
          type: "header",
          content: "Header 1",
        },
        {
          _id: "2",
          type: "paragraph",
          content: "Paragraph 1",
        },
        {
          _id: "3",
          type: "paragraph",
          content: "Paragraph 2",
        },
        {
          _id: "4",
          type: "header",
          content: "Header 2",
        },
        {
          _id: "5",
          type: "paragraph",
          content: "Paragraph 3",
        },
        {
          _id: "6",
          type: "paragraph",
          content: "Paragraph 4",
        },
        {
          _id: "7",
          type: "paragraph",
          content: "Paragraph 5",
        },
      ],
    };
  }
  function removeItem(uuid: string): void {
    setState((x) => {
      const newState = {
        ...x,
        content: x.content.filter((item) => item._id !== uuid),
      };
      return newState;
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
