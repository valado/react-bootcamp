import { ActionType, Action } from '../model/Action';
import { Note, NoteType } from '../model/Note';
const uuidv4 = require('uuid/v4');

export const addNote = (text: string): Action<Note> => {
    let note = {
        id: uuidv4(),
        title: '',
        type: NoteType.TEXT,
        content: text,
        backgroundColor: '#fff'
    };
    return {
        type: ActionType.ADD_NOTE,
        payload: note
    };
}

export const removeNote = (noteId: string): Action<string> => {
    return {
        type: ActionType.REMOVE_NOTE,
        payload: noteId
    };
}
