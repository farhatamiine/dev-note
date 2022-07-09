import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";
import EmptyState from "../../../components/EmptyState";

export const Notes = () => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <div className="py-6">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Notes</h1>
      </div>
      <div className="max-w-full mx-auto px-4 sm:px-6 md:px-8 mt-3">
        <div className="grid grid-cols-12 gap-4 items-start lg:grid-cols-12 lg:gap-8">
          <div className="grid grid-cols-1 gap-4 col-span-12 lg:col-span-4">
            <section aria-labelledby="section-2-title">
              <h2 className="sr-only" id="section-2-title">
                Section title
              </h2>
              <div className="rounded-lg  overflow-hidden ">
                <div className="p-6 bg-white">
                  <h2 className="font-medium text-gray-800 text-xl">
                    My Notes
                  </h2>
                </div>
                <div className="bg-white p-4 mt-5">
                  <EmptyState stateName={"Notes"} />
                </div>
              </div>
            </section>
          </div>
          <div className="grid grid-cols-1 gap-4  col-span-12 lg:col-span-8">
            <section aria-labelledby="section-1-title">
              <h2 className="sr-only" id="section-1-title">
                Section title
              </h2>
              <div className="rounded-lg  overflow-scroll ">
                <Editor
                  apiKey="l4kh3cufctfwcv0pi2j27n51dxsmhvhg128pnfh3gsbr57db"
                  onInit={(evt, editor) => (editorRef.current = editor)}
                  initialValue="<p>This is the initial content of the editor.</p>"
                  init={{
                    height: 700,
                    menubar: false,
                    plugins: [
                      "advlist",
                      "autolink",
                      "lists",
                      "link",
                      "image",
                      "charmap",
                      "preview",
                      "anchor",
                      "searchreplace",
                      "visualblocks",
                      "code",
                      "fullscreen",
                      "insertdatetime",
                      "media",
                      "table",
                      "code",
                      "help",
                      "wordcount",
                    ],
                    toolbar:
                      "undo redo | blocks | " +
                      "bold italic forecolor | alignleft aligncenter " +
                      "alignright alignjustify | bullist numlist outdent indent | " +
                      "code | removeformat",
                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  }}
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
