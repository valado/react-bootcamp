import React from 'react';
import { Note } from '../../model/Note';

interface IProps {
    note: Note
};

const TextNote: React.FunctionComponent<IProps> = (props) => {
    return (
        <React.Fragment>
            {props.note.content}
        </React.Fragment>
    );
}

export default TextNote;
