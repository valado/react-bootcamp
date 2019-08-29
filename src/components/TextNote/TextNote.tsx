import React from 'react';
import { Note } from '../../model/Note';

interface IProps {
    note: Note
};

interface IState {

};

class TextNote extends React.Component<IProps, IState> {

    public constructor(props: IProps) {
        super(props);
        this.state = {

        };


    }

    public render () {
        return (
            <React.Fragment>
                {this.props.note.content}
            </React.Fragment>
        );
    }

}

export default TextNote;
