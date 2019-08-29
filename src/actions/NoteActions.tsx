import { ActionType, Action } from '../model/Action';
import { Note } from '../model/Note';

export const addNote = (note: Note): Action<Note> => {
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
