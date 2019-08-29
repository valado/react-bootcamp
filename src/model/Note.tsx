export enum NoteType {
    CHECKLIST,
    TEXT
};

export type Item = {
    text: string;
    done: boolean;
};

export type Checklist = {
    items: Array<Item>;
};

export type Note = {
    id: string;
    title: string;
    type: NoteType;
    content: Checklist | string;
    backgroundColor: string;
};
