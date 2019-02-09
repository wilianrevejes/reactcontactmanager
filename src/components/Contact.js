import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContactInfo: false
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  }
  render() {
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <div className="card card-body mb-3 ">
        <h4>
          {name} <i onClick={this.handleChange} className="fas fa-sort-down" />
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
