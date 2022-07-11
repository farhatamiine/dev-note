import {Fragment, useEffect, useState} from "react";
import style from './style.module.css'
import Card from "../../../components/Card";
import {VscNotebook} from "react-icons/vsc";
import {useGetAllQuery} from "../../../redux/store/store";
import NoteForm from "../../../components/NoteForm/NoteForm";
import {Tabs} from "flowbite-react";
import {IoEyeOutline, IoPencilOutline} from "react-icons/io5";
import ShowNote from "../../../components/ShowNote/ShowNote";


export const Notes = () => {

    const {data: notes} = useGetAllQuery();
    const [displayNote, setDisplayNote] = useState({})
    useEffect(() => {
        document.title = "List of my notes"
    }, [])


    const setEditorValue = (note) => {
        setDisplayNote(note)
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
        h-[44rem]
        overflow-y-scroll ${style.noteCardContainer}`}>
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
                            </div>
                        </section>
                    </div>
                    <div className="grid grid-cols-1 col-span-12 lg:col-span-8 bg-white h-full">
                        <section aria-labelledby="section-1-title bg-white">
                            <h2 className="sr-only" id="section-1-title">
                                Section title
                            </h2>
                            <Tabs.Group
                                aria-label="Tabs with icons"
                                style="underline"
                            >
                                <Tabs.Item
                                    title="Preview"
                                    icon={IoEyeOutline}
                                >
                                    <ShowNote description={displayNote.description} title={displayNote.title}/>
                                </Tabs.Item>
                                <Tabs.Item
                                    active={true}
                                    title="Edit"
                                    icon={IoPencilOutline}
                                >
                                    <div className="rounded-lg  ">
                                        <NoteForm/>
                                    </div>
                                </Tabs.Item>
                            </Tabs.Group>

                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};
