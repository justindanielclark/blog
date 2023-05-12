import { ActionFunctionArgs } from "react-router-dom";
import _api from "../../api/_api";
import Content from "../../types/Content";
import { PostUpload } from "../../types/Post";

type UnrefinedContent = Content & {
  sortOrder: number;
  content: string;
};

export default async function adminAction({ request }: ActionFunctionArgs) {
  const unrefinedData = await request.formData();
  const data = Object.fromEntries(unrefinedData);
  const keys = Array.from(Object.keys(data));
  let title = "";
  const unrefinedContentArray: Array<UnrefinedContent> = [];
  const categories: Array<string> = [];

  keys.forEach((key) => {
    const values = key.split("_");
    const type = values[0];
    switch (type) {
      case "title": {
        title = data[key].toString();
        break;
      }
      case "category": {
        categories.push(values[1]);
        break;
      }
      case "content": {
        switch (values[2]) {
          case "header": {
            unrefinedContentArray.push({
              sortOrder: parseInt(values[1]),
              type: values[2] as "header",
              content: data[key].toString(),
            });
            break;
          }
          case "paragraph": {
            unrefinedContentArray.push({
              sortOrder: parseInt(values[1]),
              type: values[2] as "paragraph",
              content: data[key].toString(),
            });
            break;
          }
          case "image": {
            //TODO
          }
        }
        break;
      }
      default:
        return;
    }
  });

  const post: PostUpload = {
    title,
    categories,
    content: unrefinedContentArray
      .sort((a, b) => a.sortOrder - b.sortOrder)
      .map((content) => {
        switch (content.type) {
          case "paragraph": {
            return {
              type: "paragraph",
              content: content.content,
            };
          }
          case "header": {
            return {
              type: "header",
              content: content.content,
            };
          }
          case "image": {
            return {
              type: "image",
              url: "",
            };
          }
        }
      }),
  };
  const response = await _api.postPost(post);
  console.log(await response.json());
  return null;
}
