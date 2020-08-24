import React from 'react';


export default (props) => {

    return (
        <div className="fixed-action-btn">
            <a className="btn-floating teal lighten-1 tooltipped" href="#!" data-position="left" data-tooltip="Add Contact">
                <i className="large material-icons" onClick={props.addContact}>add</i>
            </a>
        </div>
    )
}