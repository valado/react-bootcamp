import React from 'react';
import { Note } from '../../model/Note';
import * as NoteActions from '../../actions/NoteActions';
import NoteComponent from '../NoteComponent/NoteComponent';
import { makeStyles } from '@material-ui/styles';

interface IProps {
    notes: Array<Note>
    noteActions: typeof NoteActions
};

const NoteList: React.FunctionComponent<IProps> = (props: IProps) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            {
                props.notes.map((note: Note, idx: number) => {
                    return (
                        <NoteComponent 
                            key={idx}
                            note={note}
                            noteActions={props.noteActions}
                        />
                    );
                })
            }
        </div>
    );
}

const useStyles = makeStyles({
    container: {
        height: '100%',
        width: '100%',
        overflowY: 'auto',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-end',
        alignContent: 'flex-start'
    }
});

export default NoteList;
