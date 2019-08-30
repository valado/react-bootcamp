import React, {useState} from 'react';
import {TextField, Button, makeStyles} from '@material-ui/core';
import axios from 'axios';
import { Redirect } from 'react-router';
import SimpleReactValidator from 'simple-react-validator';

const endpoint = 'https://react-bootcamp-backend.herokuapp.com/';
const validator = new SimpleReactValidator({});

//create your forceUpdate hook
function useForceUpdate(){
    const [value, set] = useState(true); //boolean state
    return () => set(!value); // toggle the state to force render
}

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [loggedIn, setloggedIn] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const forceUpdate = useForceUpdate();

    const classes = useStyles();

    return (
        <React.Fragment>
            { loggedIn &&
                <Redirect
                    to={{pathname: '/'}}
                />
            }
            <div
                className={classes.container}
            >
                <div>
                    <TextField
                        label={'Email'}
                        value={email}
                        type={'email'}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>)=>{
                            setEmail(event.target.value)
                        }}
                    />
                </div>
                <div className={classes.error}>
                    {validator.message('Email', email, 'required|email', {})}
                </div>
                <div>
                    <TextField
                        label={'Password'}
                        value={pass}
                        type={'password'}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>)=>{
                            setPass(event.target.value)
                        }}
                    />
                </div>
                <div className={classes.error}>
                    {validator.message('Password', pass, 'required', {})}
                </div>
                <div>
                    <Button
                        onClick={() => {
                            if(!validator.allValid()) {
                                validator.showMessages();
                                forceUpdate();
                                return;
                            }

                            axios.post(endpoint + 'auth', {}, {
                                headers: {
                                    'Authorization': 'Basic ' + email + ':' + pass
                                    // 'Authorization': `Basic ${email}:${pass}`
                                }
                            })
                            .then((response) => {
                                localStorage.setItem('token', response.data);
                                setloggedIn(true);
                            })
                            .catch((error) => {
                                setErrMsg(error.response.data);
                            })
                            .finally()
                        }}
                    >
                        login
                    </Button>
                </div>
                <div>
                    { errMsg.length > 0 &&
                        errMsg
                    }
                </div>
            </div>
        </React.Fragment>
    );
}

const useStyles = makeStyles({
    container: {
        backgroundColor: '#fff',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center'
    },
    error: {
        textSize: '9px',
        color: 'orange',
    }
});

export default LoginPage;
