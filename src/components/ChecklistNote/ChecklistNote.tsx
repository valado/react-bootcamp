import React from 'react';
import { Note, Checklist } from '../../model/Note';
import ChecklistItem from '../ChecklistItem/ChecklistItem';

interface IProps {
    note: Note
};

interface IState {

};

class ChecklistNote extends React.Component<IProps, IState> {

    public constructor(props: IProps) {
        super(props);
        this.state = {

        };

    }

    public render () {
        let checklist = this.props.note.content as Checklist;

        return (
            <React.Fragment>
                {
                    checklist.items.map((item, idx) => {
                        return (
                            <ChecklistItem
                                key={idx}
                                item={item}
                            />
                        );
                    })
                }
            </React.Fragment>
        );
    }

}

export default ChecklistNote;
