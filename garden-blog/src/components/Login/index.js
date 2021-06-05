import React from 'react';
import Layout from '../Layout'

const Login = ( {authenticate}) => {
    return (
        <Layout>
            <div className="input-filed">
                <div className="container">
                    <h5 className="grey-text text-darken-3">Identification</h5>
                    <button className="btn red ligthen-1" onClick={authenticate}>Login facebook</button>
                </div>
            </div>
        </Layout>
    );
}

export default Login;

                                