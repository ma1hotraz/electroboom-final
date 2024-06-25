import React from "react";
class ContactForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    age: "",
    errors: {},
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();

    if (Object.keys(errors).length === 0) {
      alert("Form submitted successfully");
      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        age: "",
        errors: {},
      });
    } else {
      this.setState({
        errors,
      });
    }
  };

  validate = () => {
    const { firstName, lastName, email, phone, subject, message, age } =
      this.state;
    const errors = {};

   
    if (!firstName.trim()) {
      errors.firstName = "First name is required";
    }

 
    if (!lastName.trim()) {
      errors.lastName = "Last name is required";
    }

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }

    if (!phone.trim()) {
      errors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(phone)) {
      errors.phone = "Phone is invalid";
    }

    if (!subject.trim()) {
      errors.subject = "Subject is required";
    }

 
    if (!message.trim()) {
      errors.message = "Message is required";
    }


    if (!age.trim()) {
      errors.age = "Age is required";
    } else if (isNaN(parseInt(age))) {
      errors.age = "Age must be a number";
    } else if (parseInt(age) < 18) {
      errors.age = "You must be at least 18 years old";
    }

    return errors;
  };

  render() {
    const { firstName, lastName, email, phone, subject, message, age, errors } =
      this.state;

    return (
      <form onSubmit={this.handleSubmit}>
      <p className="display-5 text-center">Contact Us</p>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
          />
          {errors.firstName && (
            <div className="invalid-feedback">{errors.firstName}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
          />
          {errors.lastName && (
            <div className="invalid-feedback">{errors.lastName}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            id="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
            id="phone"
            name="phone"
            value={phone}
            onChange={this.handleChange}
          />
          {errors.phone && (
            <div className="invalid-feedback">{errors.phone}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            className={`form-control ${errors.subject ? "is-invalid" : ""}`}
            id="subject"
            name="subject"
            value={subject}
            onChange={this.handleChange}
          />
          {errors.subject && (
            <div className="invalid-feedback">{errors.subject}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
            id="message"
            name="message"
            rows="5"
            value={message}
            onChange={this.handleChange}
          ></textarea>
          {errors.message && (
            <div className="invalid-feedback">{errors.message}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="text"
            className={`form-control ${errors.age ? "is-invalid" : ""}`}
            id="age"
            name="age"
            value={age}
            onChange={this.handleChange}
          />
          {errors.age && <div className="invalid-feedback">{errors.age}</div>}
        </div>
              <br/>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default ContactForm;
