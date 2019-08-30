import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { State } from './model';
import * as NoteActions from './actions/NoteActions';
import { Note } from './model/Note';
import Routing from './Routing';
import axios from 'axios';

interface IProp {
  notes: Array<Note>;
  noteActions: typeof NoteActions
}

axios.interceptors.request.use(
  function (config: any) {
      return new Promise((resolve, reject) => {
          const token = localStorage.getItem('token');
          if (token) {
              config.headers.authorization = `Bearer ${token}`;
          }
          resolve(config);
      });
  },
  function (error: any) {
      return Promise.reject(error);
  }
);

const App: React.FunctionComponent<IProp> = (props: IProp) => {

  return (
    <div className="App">
      <Routing 
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
