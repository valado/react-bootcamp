import React from 'react';
import {Checkbox, TextField} from '@material-ui/core';
import { Item } from '../../model/Note';

interface IProps {
    item: Item
};

interface IState {

};

class ChecklistItem extends React.Component<IProps, IState> {

    public constructor(props: IProps) {
        super(props);
        this.state = {

        };
    }

    public render () {
        return (
            <div>
                <Checkbox checked={this.props.item.done}/>
                <TextField value={this.props.item.text}/>
            </div>
        );
    }

}

export default ChecklistItem;
