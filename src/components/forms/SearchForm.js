import React from 'react'
import M from 'materialize-css';

export default (props) => {
    M.Datepicker.init(document.querySelectorAll('.datepicker'), { showClearBtn: true, autoClose: true });
    return (
        <form id="search-form" onSubmit={props.handleSubmit}>
            <div className="row">
                <div className="input-field col s6 m3 l3">
                    <i className="material-icons prefix">date_range</i>
                    <input id="Date" name="Date" type="text" placeholder="Date" className="datepicker" />
                </div>
                <div className="input-field col s6 m9 l9">
                    <input id="Search" name="Search" type="text" />
                    <label htmlFor="Search">Search</label>
                    <i className="material-icons prefix cursor-pointer" onClick={props.handleSubmit}>search</i>
                </div>
            </div>

        </form>
    )
}