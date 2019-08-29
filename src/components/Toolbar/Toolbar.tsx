import React from 'react';
import {Button, Tooltip} from '@material-ui/core';
import PaletteIcon from '@material-ui/icons/Palette';
import ArchiveIcon from '@material-ui/icons/Archive';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/styles';
import * as NoteActions from '../../actions/NoteActions';

interface IProps {
    noteId: string;
    noteActions: typeof NoteActions;
}

const Toolbar: React.FunctionComponent<IProps> = (props: IProps) => {

    const classes = useStyles();

    const openPalette = () => {

    };

    const archiveNote = () => {

    };

    const deleteNote = () => {
        props.noteActions.removeNote(props.noteId);
    };

    return (
        <div
            className={classes.toolbar}
        >
            <Tooltip
                title='Palette'
            >
                <Button
                    onClick={openPalette}
                >
                    <PaletteIcon />
                </Button>
            </Tooltip>

            <Tooltip
                title='Archive'
            >
                <Button
                    onClick={archiveNote}
                >
                    <ArchiveIcon />
                </Button>
            </Tooltip>

            <Tooltip
                title='Delete'
            >
                <Button
                    onClick={deleteNote}
                >
                    <DeleteIcon />
                </Button>
            </Tooltip>
        </div>
    );
};

const useStyles = makeStyles({
    toolbar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(255,255,255,0.17)',
        width: '100%',
        height: '36px'
    }
});

export default Toolbar;
