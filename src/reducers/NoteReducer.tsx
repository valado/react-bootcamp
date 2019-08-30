import { Action, ActionType } from '../model/Action';
import { Note } from '../model/Note';
import _ from 'lodash';

const initialNotes: Array<Note> = [];

export function reducer(notes: Array<Note> = initialNotes, action: Action<any>) {
    switch (action.type) {
        case ActionType.ADD_NOTE:
            return [...notes, action.payload];
        case ActionType.REMOVE_NOTE:
            let idx = _.findIndex(notes, {id: action.payload})
            if (idx >= 0) {
                let newNotes = [...notes];
                newNotes.splice(idx, 1);
                return newNotes;
            }
            return notes;
        case ActionType.LOAD_NOTES: {
            return action.payload
        }
        case ActionType.STORE_NOTES:
        default:
            return notes;
    }
}
