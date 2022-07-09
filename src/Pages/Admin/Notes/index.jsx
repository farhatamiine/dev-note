import {Editor} from "@tinymce/tinymce-react";
import {useEffect, useRef, useState} from "react";
import EmptyState from "../../../components/EmptyState";
import style from './style.module.css'
import Card from "../../../components/Card";
import {VscNotebook} from "react-icons/vsc";


export const Notes = () => {
    const editorRef = useRef(null);
    const [value, setValue] = useState("Tesla Illustrator Project" ?? '');

    const NotesData = [
        {
            id: 1,
            title: "Tesla Illustrator Project",
            description: "Repeating the project and documenting the creative process will help me to improve."
        },
        {
            id: 2,
            title: "Tesla Illustrator Project",
            description: "Repeating the project and documenting the creative process will help me to improve."
        },
        {
            id: 3,
            title: "Tesla Illustrator Project",
            description: "Repeating the project and documenting the creative process will help me to improve."
        },
    ]
    const setEditorValue =(id) => {
        setValue(id.toString())
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
                                {/*<div className="bg-white p-4 mt-5">*/}
                                {/*    <EmptyState stateName={"Notes"}/>*/}
                                {/*</div>*/}
                                <div className={`h-[52rem] overflow-y-scroll ${style.noteCardContainer}`}>
                                    {NotesData.map(({id, description, title}) => {
                                        return (
                                            <Card id={id} onClick={() => setEditorValue(id)} description={description} title={title}/>
                                        )
                                    })}
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="grid grid-cols-1 col-span-12 lg:col-span-8">
                        <section aria-labelledby="section-1-title">
                            <h2 className="sr-only" id="section-1-title">
                                Section title
                            </h2>
                            <div className="rounded-lg  overflow-scroll ">
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
