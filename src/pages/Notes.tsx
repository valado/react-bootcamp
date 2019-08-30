import React from 'react';
import NoteList from '../components/NoteList/NoteList';
import * as NoteActions from '../actions/NoteActions';
import { Note } from '../model/Note';
import { TextField, Button } from '@material-ui/core';
import { Redirect } from 'react-router';

interface IProps {
    notes: Array<Note>;
    noteActions: typeof NoteActions
}
interface IState {
    newNoteText: string;
    loggedOut: boolean;
}

class NotesPage extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            newNoteText: '',
            loggedOut: false
        };
    }

    componentDidMount(){
        this.props.noteActions.loadNotes();
    }

    public render() {
        return (
            <React.Fragment>
                {
                    this.state.loggedOut && 
                    <Redirect
                        to={{pathname:'/login'}}
                    />
                }
                <div>
                    <TextField
                        value={this.state.newNoteText}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            this.setState({newNoteText: event.target.value});
                        }}
                    />
                    <Button
                        onClick={() => {
                            this.props.noteActions.addNote(this.state.newNoteText);
                        }}
                    >
                        Add
                    </Button>
                    <Button
                        onClick={() => {
                            this.props.noteActions.storeNotes(this.props.notes);
                        }}
                    >
                        Save
                    </Button>
                    <Button
                        onClick={() => {
                            localStorage.removeItem('token');
                            this.setState({loggedOut: true});
                        }}
                    >
                        Log out
                    </Button>
                </div>
                <NoteList 
                    notes={this.props.notes}
                    noteActions={this.props.noteActions}
                />
            </React.Fragment>
        );
    }
}

export default NotesPage;