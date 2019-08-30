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
    let token = localStorage.getItem('token');
    let isAuthenticated = token ? true : false;
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

const LoggedInRoute: React.FunctionComponent<IAuthProps> = (props: any) => {
    let token = localStorage.getItem('token');
    let isAuthenticated = token ? true : false;
    return (
        <React.Fragment>
            { isAuthenticated ?
                <Redirect
                    to={{
                        pathname: '/'
                    }}
                /> :
                props.children
            }
        </React.Fragment>
    );
}

interface IProps {
    notes: Array<Note>;
    noteActions: typeof NoteActions
}

const Routing: React.FunctionComponent<IProps> = (props: IProps) => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact>
                    <AuthRoute>
                        <NotesPage
                            notes={props.notes}
                            noteActions={props.noteActions}
                        />
                    </AuthRoute>
                </Route>
                <Route path="/register" exact>
                    <LoggedInRoute>
                        <RegisterPage/>
                    </LoggedInRoute>
                </Route>
                <Route path="/login" exact>
                    <LoggedInRoute>
                        <LoginPage/>
                    </LoggedInRoute>
                </Route>
            </Switch>
        </Router>
    );
}

export default Routing;