import React from 'react';
import ReactDOM from 'react-dom';
import TextNote from './TextNote';
import { NoteType } from '../../model/Note';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

configure({ adapter: new Adapter() });

const dummyNote = {
    id: 'id',
    title: 'title',
    type: NoteType.TEXT,
    content: 'test',
    backgroundColor: '#fff'
};

// renders all internal components
it('renders without crashing with ReactDOM', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TextNote note={dummyNote}/>, div);
});

// renders only current component
// even if any container component has a problem this will pass
it('renders without crashing with shallow', () => {
    shallow(<TextNote note={dummyNote}/>);
});

// Execute only
// fit, fdescribe
// it.only, describe.only

// Skip
// xit, xdescribe
// it.skip, describe.skip

/*
describe('additional tests', () => {
    // it()
});
*/
