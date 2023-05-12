import _api from "./_api";

export default async function getCategories(): Promise<Array<string>> {
  const response = await fetch(`${_api.hostname}/categories`);
  const categories = await response.json();
  return categories;
}
