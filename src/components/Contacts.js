// Content.js

import React, { Component } from "react";
import SearchForm from "./forms/SearchForm";
import { handleResponse } from "../util";

export default class Content extends Component {

  state = {
    contacts: []
  }

  componentDidMount() {
    this.fetch_contacts();
  }

  fetch_contacts = () => {
    fetch('/api/contacts')
      .then(handleResponse)
      .then(({contacts}) => {
        this.setState({ contacts });
      }).catch(console.error)
  }

  render() {
    let contacts = this.state.contacts
      .map((contact, i) => <tr key={i}>
        <td>{contact.contact_name}  </td>
        <td>{contact.company_name}  </td>
        <td>{contact.email}  </td>
        <td>{contact.mobile}  </td>
        <td>{contact.gst_treatment}  </td>
        <td>{`₹ ${Number(contact.outstanding_receivable_amount).toFixed(2)}`}  </td>
        <td>{`₹ ${Number(contact.outstanding_payable_amount).toFixed(2)}`}  </td>
        <td><i className="material-icons tooltipped" data-tooltip="Edit Contact" onClick={() => console.log("TODO:// implement contact edit api")}>edit</i></td>
      </tr>);

    return (<>
      <div className="nav-wrapper container">
        <SearchForm handleSubmit={() => console.log("TODO:// implement contact search api")} />
      </div>

      <div className="container">
        <h4>All Contacts</h4>
        <table className="responsive-table striped">
          <thead>
            <tr>
              <th>NAME</th>
              <th>COMPANY NAME</th>
              <th>EMAIL</th>
              <th>MOBILE</th>
              <th>GST_TREATMENT</th>
              <th>RECIEVABLES</th>
              <th>PAYBLES    </th>
              <th><i className="material-icons tooltipped" data-tooltip="Edit Contact" >edit</i></th>
            </tr>
          </thead>

          <tbody>
            {contacts}
          </tbody>
        </table>
      </div>
    </>);
  }
}
