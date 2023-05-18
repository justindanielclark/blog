import { useState } from "react";
import { Form } from "react-router-dom";
import capitalizeFirstLetters from "../../utils/capitalizeFirstLetters";

type Props = {
  checkedCategories: Array<string>;
  categories: Array<string>;
  title: string;
  content: string;
  method: "POST" | "PUT";
};

function convertCategoryArrayToSet(categories: Array<string>): Set<string> {
  const categorySet = new Set<string>();
  categories.forEach((category) => {
    categorySet.add(category);
  });
  return categorySet;
}

function PostForm({ categories, title, content, method, checkedCategories }: Props) {
  const [state, setState] = useState({
    categories,
    title,
    content,
    checkedCategories: convertCategoryArrayToSet(checkedCategories),
  });
  function onTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newState = {
      ...state,
      title: e.target.value,
    };
    setState(newState);
  }
  function onContentChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const newState = {
      ...state,
      content: e.target.value,
    };
    setState(newState);
  }
  function onCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
    const categoryName = e.target.dataset.categoryname;
    console.log(categoryName);
    if (categoryName) {
      const newSet = new Set(state.checkedCategories);
      if (newSet.has(categoryName)) {
        newSet.delete(categoryName);
      } else {
        newSet.add(categoryName);
      }
      const newState = {
        ...state,
        checkedCategories: newSet,
      };
      setState(newState);
    }
  }

  return (
    <Form className="p-3 flex-1 relative" method={method}>
      <div className="absolute w-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div>
          <label className="block font-bold" htmlFor="title">
            Title:
          </label>
          <input
            className="block w-full p-1"
            type="text"
            name="title"
            id="title"
            value={state.title}
            onChange={onTitleChange}
          />
        </div>
        {categories.length > 0 && (
          <div>
            <label className="block font-bold">Categories:</label>
            <ul className="flex flex-row flex-wrap gap-4">
              {categories.map((category) => (
                <li key={category}>
                  <label htmlFor={`category_${category}`}>
                    <input
                      className="mr-2"
                      type="checkbox"
                      data-categoryname={category}
                      name={`category_${category}`}
                      id={`category_${category}`}
                      checked={state.checkedCategories.has(category)}
                      onChange={onCheckboxChange}
                    />
                    {capitalizeFirstLetters(category)}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="mt-2">
          <label className="block font-bold" htmlFor="content">
            Content:
          </label>
          <textarea
            onChange={onContentChange}
            className="block w-full p-1"
            name="content"
            id="content"
            rows={10}
            value={state.content}
          ></textarea>
        </div>
        <button className="bg-green-900 mt-3 text-white p-1 rounded-lg">Submit</button>
      </div>
    </Form>
  );
}

export default PostForm;
