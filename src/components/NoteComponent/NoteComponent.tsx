import React from 'react';
import {Paper, createStyles, withStyles, WithStyles, Theme} from '@material-ui/core';
import {TextField} from '@material-ui/core';
import Toolbar from '../Toolbar/Toolbar';
import NoteContent from '../NoteContent/NoteContent';
import { Note } from '../../model/Note';
import * as NoteActions from '../../actions/NoteActions';

interface IProps extends WithStyles<typeof styles> {
    note: Note
    noteActions: typeof NoteActions;
};

interface IState {

};

class NoteComponent extends React.Component<IProps, IState> {

    public constructor(props: IProps) {
        super(props);
        this.state = {

        };
    }

    public render () {
        const {classes} = this.props;
        return (
            <Paper
              className={classes.note}
              style={{backgroundColor: this.props.note.backgroundColor}}
            >
                <div>
                    <TextField value={this.props.note.title}/>
                </div>
                <NoteContent note={this.props.note}/>
                <Toolbar 
                    noteId={this.props.note.id}
                    noteActions={this.props.noteActions}
                />
            </Paper>
        );
    }

}

const styles = (theme: Theme) => createStyles({
    note: {
        position: 'relative',
        height: 'auto',
        minHeight: '300px',
        maxHeight: '500px',
        overflowY: 'auto',
        width: '300px',
        margin: '5px',
        padding: '10px'
    }
});

export default withStyles(styles)(NoteComponent);
