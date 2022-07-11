import React from 'react';

const ShowNote = ({description, title}) => {
    return (
        <div className={""}>
            <h2 className={"mb-3 font-bold text-xl uppercase"}>{title}</h2>
            <div className={"p"} dangerouslySetInnerHTML={{__html: description}}/>
        </div>
    );
};

export default ShowNote;