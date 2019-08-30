export enum ActionType {
    ADD_NOTE,
    REMOVE_NOTE,
    LOAD_NOTES,
    STORE_NOTES
};

export interface Action<T> {
    type: ActionType;
    payload: T;
}
