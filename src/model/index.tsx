
import { Note, NoteType } from '../model/Note';

export interface State {
    notes: Array<Note>;
};

export const initialState: State = {
    notes: [{
        id: 'id1',
        title: 'some note',
        type: NoteType.TEXT,
        content: 'some text',
        backgroundColor: '#fff'
    },
    {
        id: 'id2',
        title: 'some checklist',
        type: NoteType.CHECKLIST,
        content: {
            items: [
                {
                    text: 'Todo 1',
                    done: true
                },
                {
                    text: 'Todo 2',
                    done: false
                }
            ]
        },
        backgroundColor: 'blue'
    }]
}
