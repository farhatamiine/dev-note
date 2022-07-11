import {Editor} from "@tinymce/tinymce-react";
import {Fragment, useEffect, useRef, useState} from "react";
import EmptyState from "../../../components/EmptyState";
import style from './style.module.css'
import Card from "../../../components/Card";
import {VscNotebook} from "react-icons/vsc";
import {notesApi} from "../../../redux/store/store";


export const Notes = () => {
    const editorRef = useRef(null);
    const {data: notes} = notesApi.useGetAllQuery();
    const [addNotes] = notesApi.useCreateNoteMutation();
    const [value, setValue] = useState("Tesla Illustrator Project" ?? '');
    useEffect(() => {
        document.title = "List of my notes"
    }, [])


    const setEditorValue = (note) => {
        setValue(JSON.stringify(note))
    }

    function addNewNotes() {
        console.log("Click")
        const notes = {
            "mutations": [
                {
                    "create": {
                        "title": "Postman create documents 2",
                        "_type": "notes",
                        "description": "Adding new data 2"
                    }
                }
            ]
        }
        addNotes(notes)
    }

    return (
        <div className="py-6">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">Notes</h1>
            </div>
            <div className="max-w-full mx-auto px-4 sm:px-6 md:px-8 mt-3">
                <div className="grid grid-cols-12 gap-4 items-start lg:grid-cols-12 lg:gap-8">
                    <div className="grid grid-cols-1 col-span-12 lg:col-span-4">
                        <section aria-labelledby="section-2-title">
                            <h2 className="sr-only" id="section-2-title">
                                Section title
                            </h2>
                            <div className="rounded-lg ">
                                <div className="p-6 bg-white border border-dashed border-gray-600">
                                    <h2 className="font-medium text-gray-800 text-xl flex items-center">
                                        <VscNotebook className={"inline-block w-10"} size={25}/>
                                        My Notes
                                    </h2>
                                </div>
                                <div className={`
        h - [52rem]
        overflow - y - scroll ${style.noteCardContainer}`}>
                                    {notes?.result?.map((note) => {
                                        return (
                                            <Fragment key={note._id}>
                                                <Card id={note._id} onClick={() => setEditorValue(note)}
                                                      description={note.description}
                                                      title={note.title}/>
                                            </Fragment>
                                        )
                                    })}
                                </div>
                                <div className={""}>
                                    <button className={""} onClick={addNewNotes}>Add New Notes</button>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="grid grid-cols-1 col-span-12 lg:col-span-8">
                        <section aria-labelledby="section-1-title">
                            <h2 className="sr-only" id="section-1-title">
                                Section title
                            </h2>
                            <div className="rounded-lg  ">
                                <Editor
                                    id="Editor"
                                    onEditorChange={(newValue, editor) => setValue(newValue)}
                                    apiKey="l4kh3cufctfwcv0pi2j27n51dxsmhvhg128pnfh3gsbr57db"
                                    onInit={(evt, editor) => (editorRef.current = editor)}
                                    value={value}
                                    init={{
                                        height: 700,
                                        menubar: false,
                                        plugins: [
                                            "advlist",
                                            "autolink",
                                            "lists",
                                            "codesample",
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
                                        codesample_languages: [
                                            {text: 'HTML/XML', value: 'markup'},
                                            {text: 'JavaScript', value: 'javascript'},
                                            {text: 'CSS', value: 'css'},
                                            {text: 'PHP', value: 'php'},
                                            {text: 'Ruby', value: 'ruby'},
                                            {text: 'Python', value: 'python'},
                                            {text: 'Java', value: 'java'},
                                            {text: 'C', value: 'c'},
                                            {text: 'C#', value: 'csharp'},
                                            {text: 'C++', value: 'cpp'}
                                        ],
                                        toolbar:
                                            "undo redo | blocks | " +
                                            "codesample " +
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
