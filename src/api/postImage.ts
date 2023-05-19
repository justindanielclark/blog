import _api from "./_api";

export default async function postImage(imageFile: File) {
  imageFile.stream();
  try {
    const response = await fetch(`${_api.hostname}/images`, {
      body: imageFile,
      method: "POST",
    });
    return response;
  } catch (err) {
    throw new Error("500");
  }
}
