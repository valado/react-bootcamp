import React, {useState} from 'react';
import NoteList from '../components/NoteList/NoteList';
import * as NoteActions from '../actions/NoteActions';
import { Note } from '../model/Note';
import { TextField, Button } from '@material-ui/core';

interface IProps {
    notes: Array<Note>;
    noteActions: typeof NoteActions
}

const NotesPage: React.FunctionComponent<IProps> = (props: IProps) => {
    const [newNoteText, setNewNoteText] = useState('');

    return (
        <React.Fragment>
            <div>
                <TextField
                    value={newNoteText}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setNewNoteText(event.target.value)
                    }}
                />
                <Button
                    onClick={() => {
                        props.noteActions.addNote(newNoteText);
                    }}
                >
                Add
                </Button>
            </div>
            <NoteList 
                notes={props.notes}
                noteActions={props.noteActions}
            />
        </React.Fragment>
    );
}

export default NotesPage;