import React from 'react';

const Join = ({signupUser}) => {

    const data = {
        pseudo: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const [loginData, setLoginData] = useState(data)
    const [error, setError] = useState('')

    const handleChange = e => {
        setLoginData({...loginData, [e.target.id]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const {email, password} = loginData
        signupUser(email, password)
            .then(user => {
                // on efface les valeurs des champs
                setLoginData({...data})
            })
            .catch(error => {
                setError(error)
                setLoginData({...data})
            })
    }

    const {pseudo, email, password, confirmPassword} = loginData

    const btnInscription = pseudo === '' || email === '' || password === '' || password !== confirmPassword 
        ? <button className="btn red ligthen-1" disabled>Inscription</button>
        : <button className="btn red ligthen-1">Inscription</button>


    



    // gestion erreurs connexion
    const errorMsg = error != '' && <span>{error.message}</span>



    return (
        <Layout>
            <div className="container">
                <div className="row">
                    {errorMsg}
                    <h5 className="grey-text text-darken-3 col-sm-8">Identification mail/password</h5>
                    <h5 className="grey-text text-darken-3 col-sm-4">Réseaux sociaux</h5>
                </div>
                
                <div className="row">
                    <div className="col-sm-8">
                            
                        <form className="white" onSubmit={handleSubmit}>
                            <div>
                                <input onChange={handleChange} value={pseudo} className="input-field" type="text" id="pseudo" placeholder="pseudo" required />
                            </div>
                            <div>
                                <input onChange={handleChange} value={email} className="input-field" type="text" id="email" placeholder="email" required />
                            </div>
                            <div>
                                <input onChange={handleChange} value={password} className="input-field" type="password" id="password" placeholder="mot de passe" required />
                            </div>
                            <div>
                                <input onChange={handleChange} value={confirmPassword} className="input-field" type="password" id="confirmPassword" placeholder="confirmez votre mot de passe" required />
                            </div>
                            <div className='row'>
                                <div className='col-md-6'>{btnInscription}</div>
                                <div className = 'col-md-6'>
                                    <button className="btn red ligthen-1">Inscription</button>
                                </div>
                            </div>
                        </form>
                            
                            
                    </div>
                    
                    <div className="input-filed" className="col-sm-4">
                        <div>
                            
                            <button className="btn red ligthen-1" onClick={authenticate}>Login facebook</button>
                        </div>
                    </div>
                        
                </div>
            </div>
        </Layout>
    );
}

export default Join;
