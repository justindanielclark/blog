import React from "react";
import Content from "../../types/Content";
import Post from "../../types/Post";
import { useLoaderData } from "react-router-dom";
import createDateString from "../../utils/createDateString";

function PostContentConverter(content: Array<Content>): Array<JSX.Element> {
  return content.map((contentItem) => {
    let returnVal: JSX.Element;
    switch (contentItem.type) {
      case "paragraph": {
        returnVal = React.createElement("p", { className: "text-white" }, contentItem.content);
        break;
      }
      case "header": {
        returnVal = React.createElement("h1", { className: "text-white text-3xl" }, contentItem.content);
        break;
      }
      case "image": {
        returnVal = React.createElement("img", {});
        break;
      }
    }
    return returnVal;
  });
}

function Post() {
  const data = useLoaderData() as Post;
  const PostContent = PostContentConverter(data.content);
  return (
    <div>
      <h1 className="text-3xl">{data.title}</h1>
      <h2 className="text-sm">{createDateString(data.post_date)}</h2>
      {PostContent}
    </div>
  );
}

export default Post;
