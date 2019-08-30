import React, {useState} from 'react';
import { TextField, Typography, Button, makeStyles} from '@material-ui/core';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';

interface IProps {

}

const endpoint = 'https://react-bootcamp-backend.herokuapp.com/';
const validator = new SimpleReactValidator({});

//create your forceUpdate hook
function useForceUpdate(){
    const [value, set] = useState(true); //boolean state
    return () => set(!value); // toggle the state to force render
}

const RegisterPage: React.FunctionComponent<IProps> = (props: IProps) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [rPass, setRPass] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [registered, setRegistered] = useState(false);
    const forceUpdate = useForceUpdate();

    const classes = useStyles();

    return (
        <div className={classes.container}>
            { registered &&
                <Redirect
                    to={{pathname: '/login'}}
                />
            }
            <div>
                Create new account
            </div>
            <div>
                <TextField
                    label={'email'}
                    value={email}
                    type={'email'}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setEmail(event.target.value)
                    }}
                />
            </div>
            <div className={classes.error}>
                {validator.message('Email', email, 'required|email', {})}
            </div>
            <div>
                <TextField
                    label={'repeat password'}
                    value={pass}
                    type={'password'}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setPass(event.target.value)
                    }}
                />
            </div>
            <div className={classes.error}>
                {validator.message('Password', pass, 'required', {})}
            </div>
            <div>
                <TextField
                    label={'repeat password'}
                    value={rPass}
                    type={'password'}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setRPass(event.target.value)
                    }}
                />
            </div>
            <div className={classes.error}>
                {validator.message('Repeat Password', rPass, 'password|required|in:' + pass, {})}
            </div>
            <div>
                <Button
                    onClick={() => {
                        if(!validator.allValid()) {
                            validator.showMessages();
                            forceUpdate();
                            return;
                        }
                        axios.post(endpoint + 'register', {}, {
                            headers: {
                                'Authorization': `Basic ${email}:${pass}`
                            }
                          })
                          .then(function (response) {
                            setRegistered(true);
                          })
                          .catch(function (error) {
                            console.log(error);
                            setErrMsg(error.response.data)
                          })
                    }}
                >
                    register
                </Button>
            </div>
            <div>
                {
                    errMsg.length > 0 &&
                    <Typography>
                        {errMsg}
                    </Typography>
                }
            </div>
        </div>
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

export default RegisterPage;
