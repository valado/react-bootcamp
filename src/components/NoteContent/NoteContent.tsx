import React from 'react';
import { NoteType, Note } from '../../model/Note';
import ChecklistNote from '../ChecklistNote/ChecklistNote';
import TextNote from '../TextNote/TextNote';

interface IProps {
    note: Note
};

interface IState {

};

class NoteContent extends React.Component<IProps, IState> {

    public constructor(props: IProps) {
        super(props);
        this.state = {

        };

    }

    public render () {
        return (
            <React.Fragment>
                { this.props.note.type === NoteType.CHECKLIST &&
                    <ChecklistNote note={this.props.note} />
                }
                { this.props.note.type === NoteType.TEXT &&
                    <TextNote note={this.props.note} />
                }
            </React.Fragment>
        );
    }

}

export default NoteContent;
