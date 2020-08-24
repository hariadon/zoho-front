import React from 'react'
import { loadPreview } from '../../util'

export default (props) => {
    let { name, email, mobile, image = "/default-user.png" } = props;
    return (
        <form id="user-form" onSubmit={props.handleSubmit}>
            <div className="row">
                <div className="input-field col s6">
                    <i className="material-icons prefix">account_circle</i>
                    <input id="name" type="text" className="validate" value={name} />
                    <label htmlFor="icon_prefix">Name</label>
                </div>
                <div className="input-field col s6">
                    <i className="material-icons prefix">phone</i>
                    <input type="tel" id="mobile" className="validate" value={mobile} />
                    <label htmlFor="icon_telephone">Mobile</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <i className="material-icons prefix">email</i>
                    <input id="email" type="email" className="validate" value={email} />
                    <label htmlFor="email">Email</label>
                    <span className="helper-text" data-error="wrong" data-success="right"></span>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <i className="material-icons prefix">lock</i>
                    <input id="password" type="text" className="validate" />
                    <label htmlFor="password">Password</label>
                </div>
            </div>
            <div className="row">
                <div className="file-field input-field col s6">
                    <div className="btn">
                        <span>Image</span>
                        <input id="image" accept="image/png" name="image" type="file" onChange={e => loadPreview({ e, id: "image" })} />
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" />
                    </div>
                </div>
                <div className="file-field input-field col s6">
                    <img className="preview" id="image_preview" src={image} alt="image" />
                </div>
            </div>
        </form>
    )
}

