import React from 'react'

export default (props) => {
    return (
        <form id="login-form" onSubmit={props.handleSubmit}>
            <div className="row">
                <div className="input-field col s12">
                <i className="material-icons prefix">email</i>
                    <input id="email" type="email" className="validate" required/>
                    <label htmlFor="email">Email</label>
                    <span className="helper-text" data-error="wrong" data-success="right">eg. user@gmail.com</span>
                </div>
                <div className="input-field col s12">
                    <i className="material-icons prefix">lock</i>
                    <input id="password" type="text" className="validate" required/>
                    <label htmlFor="password">Password</label>
                </div>
            </div>
        </form>
    )
}

