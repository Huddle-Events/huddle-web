import { Button } from "@/components/ui/button.tsx";
import { useCreateEvent } from "@/contexts/create-event-context.tsx";
import { Image } from "lucide-react";
import { useMemo } from "react";
import Dropzone from "react-dropzone";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  borderRadius: 16,
  backgroundColor: "#fafafa",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

// async function myCustomFileGetter(event) {
//   const files = [];
//   const fileList = event.dataTransfer
//     ? event.dataTransfer.files
//     : event.target.files;
//
//   for (var i = 0; i < fileList.length; i++) {
//     const file = fileList.item(i);
//
//     Object.defineProperty(file, "myProp", {
//       value: true,
//     });
//
//     files.push(file);
//   }
//
//   return files;
// }
export const FileDrop = () => {
  const { setFiles } = useCreateEvent();
  return (
    <Dropzone
      accept={{
        "image/*": [".png", ".jpg", ".jpeg"],
      }}
      maxFiles={10}
      noClick={true}
      noKeyboard={true}
      onDrop={(acceptedFiles) => {
        setFiles(acceptedFiles);
        // console.log(acceptedFiles);
      }}
    >
      {({
        getRootProps,
        getInputProps,
        acceptedFiles,
        isFocused,
        isDragAccept,
        isDragReject,
        open,
      }) => {
        const style = useMemo(
          () => ({
            ...baseStyle,
            ...(isFocused ? focusedStyle : {}),
            ...(isDragAccept ? acceptStyle : {}),
            ...(isDragReject ? rejectStyle : {}),
          }),
          [isFocused, isDragAccept, isDragReject],
        );
        const files = acceptedFiles.map((file) => (
          <li key={file.path}>
            {file.path} - {file.size} bytes
          </li>
        ));
        return (
          <section className={"container"}>
            <div {...getRootProps({ style: style as any })}>
              <input {...getInputProps()} />
              <div className={"relative h-[200px]"}>
                <Image
                  className={
                    "absolute -rotate-12 right-7 top-9 opacity-100 fill-background-subtle"
                  }
                  color={"black"}
                  size={100}
                  strokeWidth={0.7}
                />
                <Image color={"black"} size={100} strokeWidth={0.7} />
              </div>
              <p className={"font-inter text-2xl font-medium  text-color-text"}>
                Drag and drop files here (jpg, png)
              </p>
              <span
                className={"font-sf-pro text-lg font-normal text-color-text"}
              >
                or browse to upload
              </span>
              <Button variant={"defaultDark"} onClick={open}>
                Browse
              </Button>
            </div>
            <aside>
              <h4>Files</h4>
              <ul>{files}</ul>
            </aside>
          </section>
        );
      }}
    </Dropzone>
  );
};
