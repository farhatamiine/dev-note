import React from 'react';
import style from './style.module.css'
import {Editor} from "@tinymce/tinymce-react";
import {useRef, useState} from "react";
import {useCreateNoteMutation} from "../../redux/store/store";

const NoteForm = () => {
    const editorRef = useRef(null);
    const [note, setNote] = useState("Tesla Illustrator Project" ?? '');
    const [title, setTitle] = useState("")
    const [createNote] = useCreateNoteMutation()

    const addNewNote = () => {
        const noteToAdd = {
            "mutations": [
                {
                    "create": {
                        "title": title,
                        "_type": "notes",
                        "description": note
                    }
                }
            ]

        }
        createNote(noteToAdd)
    }


    return (
        <div>
            <div className={"mb-3"}>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Title
                </label>
                <div className="mt-1">
                    <input
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        name="title"
                        id="title"
                        className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="Title for the new note"
                    />
                </div>
            </div>
            <Editor
                id="Editor"
                onEditorChange={(newNote, editor) => setNote(newNote)}
                apiKey="l4kh3cufctfwcv0pi2j27n51dxsmhvhg128pnfh3gsbr57db"
                onInit={(evt, editor) => (editorRef.current = editor)}
                value={note}
                init={{
                    height: 600,
                    menubar: false,
                    resize: false,
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

            <button type="button"
                    onClick={addNewNote}
                    className="text-white mt-2 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 ">

                <svg className="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                          clipRule="evenodd"/>
                </svg>
                Add new note
            </button>
        </div>
    );
};

export default NoteForm;