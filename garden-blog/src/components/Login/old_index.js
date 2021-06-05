import React from 'react';
import { render } from 'react-dom';
import GoogleLogin from 'react-google-login'
import { useSelector } from 'react-redux';
import { selectSignedIn } from '../../features/userSlice';
import Layout from '../Layout'

const Login = () => {
    const login = (response) => {
        console.log(response)
    }

    const isSignedIn = useSelector(selectSignedIn)
    console.log('l14' + isSignedIn)
    return (
       
        <Layout style={{display: isSignedIn ? 'none' : ' '}}>
            {!isSignedIn ? 
                
                <div className='container'>
                     <h3>User ok</h3>
                    <GoogleLogin
                        clientId="53490440998-vfs4s11sifvpfqpi1u74307d4f8abb62.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <button 
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                className="btn btn-primary"
                            >
                                Login with Google
                            </button>

                        )}
                        onSuccess={login}
                        onFailure={login}
                        isSignedIn={true}
                        cookiePolicy={"single_host_origin"}
                    />


                </div>
            : " "
                        }
        </Layout>
    );
}

export default Login;
