import { Form, useLoaderData } from "react-router-dom";
import capitalizeFirstLetters from "../../../../utils/capitalizeFirstLetters";
function CreatePost() {
  const categories = useLoaderData() as Array<string>;
  return (
    <Form className="p-3 flex-1 relative" method="post">
      <div className="absolute w-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div>
          <label className="block font-bold" htmlFor="title">
            Title:
          </label>
          <input className="block w-full p-1" type="text" name="title" id="title" />
        </div>
        {categories.length > 0 && (
          <div>
            <label className="block font-bold">Categories:</label>
            <ul className="flex flex-row flex-wrap gap-4">
              {categories.map((category) => (
                <li key={category}>
                  <label htmlFor={`category_${category}`}>
                    <input className="mr-2" type="checkbox" name={`category_${category}`} id={`category_${category}`} />
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
          <textarea className="block w-full p-1" name="content" id="content" rows={10}></textarea>
        </div>
        <button className="bg-green-900 mt-3 text-white p-1 rounded-lg">Submit</button>
      </div>
    </Form>
  );
}

export default CreatePost;
