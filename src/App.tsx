import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { State } from './model';
import * as NoteActions from './actions/NoteActions';
import NoteList from './components/NoteList/NoteList';
import { Note } from './model/Note';

interface IProp {
  notes: Array<Note>;
  noteActions: typeof NoteActions
}

const App: React.FunctionComponent<IProp> = (props: IProp) => {
  return (
    <div className="App">
      <NoteList 
        notes={props.notes}
        noteActions={props.noteActions}
      />
    </div>
  );
}

function mapStateToProps(state: State) {
  return {
    notes: state.notes
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    noteActions: bindActionCreators(NoteActions as any, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
