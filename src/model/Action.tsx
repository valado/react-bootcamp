export enum ActionType {
    ADD_NOTE,
    REMOVE_NOTE,
};

export interface Action<T> {
    type: ActionType;
    payload: T;
}
