import { useState } from "react";
import { Form } from "react-router-dom";

const allowedFileTypes = ["image/png", "image/jpeg"];
const WARNING_MESSAGE = "Unable to Upload File Types Other Than PNG and JPEG";

function UploadImages() {
  const [warningMessage, setWarningMessage] = useState<string | null>(null);
  return (
    <Form encType="multipart-form-data" method="post" className="flex flex-col gap-4 p-3">
      {warningMessage !== null ? <p>THERES A WARNING!</p> : null}
      <label className="block" htmlFor="imagefiles">
        Upload Files:{}
      </label>
      <input
        className="block"
        type={"file"}
        name={"imagefiles"}
        id={"imagefiles"}
        multiple
        onChange={(e) => {
          let warning = false;
          const files = e.target.files;
          if (files && files.length >= 0) {
            Array.from(files).forEach((file) => {
              if (!allowedFileTypes.includes(file.type) && !warning) {
                warning = true;
              }
            });
            setWarningMessage(warning ? WARNING_MESSAGE : null);
          } else {
            setWarningMessage(null);
            return;
          }

          console.log(files);
        }}
      />
      <button
        className={"bg-green-900 disabled:bg-grey-400 text-white p-1 rounded"}
        disabled={warningMessage ? true : false}
      >
        Submit
      </button>
    </Form>
  );
}

export default UploadImages;
