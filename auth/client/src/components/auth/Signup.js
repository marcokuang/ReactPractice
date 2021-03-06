import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";
import * as actions from "../../actions";

class Signup extends React.Component {
  navigateToFeature = () => {
    this.props.history.push("/feature");
  };

  handleOnFormSubmit = (formProps) => {
    console.log(formProps);
    this.props.signUp(formProps, this.navigateToFeature);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      // provided by redux form
      <form onSubmit={handleSubmit(this.handleOnFormSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field name="password" type="password" component="input" />
        </fieldset>
        <button type="submit">Sign Up</button>
      </form>
    );
  }
}

const formOptions = {
  // unique name for the form
  form: "signup",
};

export default compose(connect(null, actions), reduxForm(formOptions))(Signup);
