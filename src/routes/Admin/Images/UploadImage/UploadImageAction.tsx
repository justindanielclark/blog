import { ActionFunctionArgs, redirect } from "react-router-dom";
import _api from "../../../../api/_api";

export default async function UploadImageAction({ params, request }: ActionFunctionArgs) {
  const formData = await request.formData();
  console.log(formData.get("imagefile"));
  return redirect("/admin");
}
