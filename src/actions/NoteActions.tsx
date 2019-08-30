import { ActionType, Action } from '../model/Action';
import { Note, NoteType } from '../model/Note';
import axios from 'axios';
const uuidv4 = require('uuid/v4');

const endpoint = 'https://react-bootcamp-backend.herokuapp.com/';

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

export const loadNotes = (callback?: () => void) => {
    return function (dispatch: any) {
      axios.get(endpoint + 'state')
      .then(responce => {
        let notes = responce.data.notes;
        if(notes){
            dispatch({
              type: ActionType.LOAD_NOTES,
              payload: notes
            });
        }
        if(callback) {
            callback();
        }
      }).catch(err => {
        console.log('err:' + JSON.stringify(err));
      });
    };
}

export const storeNotes = (notes: Array<Note>, callback?: () => void) => {
    return function (dispatch: any) {
      axios.post(endpoint + 'state', {notes})
      .then(responce => {
        dispatch({
          type: ActionType.STORE_NOTES,
          payload: notes
        });
        if(callback) {
            callback();
        }
      }).catch(err => {
        console.log('err:' + JSON.stringify(err));
      });
    };
}
