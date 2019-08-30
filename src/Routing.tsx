import React from 'react';
import { createBrowserHistory } from 'history';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import NotesPage from './pages/Notes';
import * as NoteActions from './actions/NoteActions';
import { Note } from './model/Note';

export interface IAuthProps {
}

const history = createBrowserHistory();

const AuthRoute: React.FunctionComponent<IAuthProps> = (props: any) => {
    let isAuthenticated = true;
    return (
        <React.Fragment>
            { isAuthenticated ?
                props.children : 
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: props.location }
                    }}
                />
            }
        </React.Fragment>
    );
}

interface IProps {
    notes: Array<Note>;
    noteActions: typeof NoteActions
}

const Routing: React.FunctionComponent<IProps> = (props) => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/notes" exact>
                    <AuthRoute>
                        <NotesPage
                            notes={props.notes}
                            noteActions={props.noteActions}
                        />
                    </AuthRoute>
                </Route>
                <Route path="/register" exact component={RegisterPage}/>
                <Route path="/login" exact component={LoginPage}/>
                <Route>
                    <LoginPage/>
                </Route>
            </Switch>
        </Router>
    );
}

export default Routing;