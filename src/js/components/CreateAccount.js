import React, {Component} from 'react'
import Exclamation from 'react-icons/lib/fa/exclamation-triangle'

import Header from './layout/Header'
import 'components/CreateAccount.scss'

class CreateAccount extends Component {

  render() {
    return (
      <div className="wrap createAccount">
        <Header idx={0} title="Create Account" description="Glad to see you here!"/>
        <form className="needs-validation" noValidate>
          <div className="form-group mb-4">
            <label htmlFor="account">Account</label>
            <input type="email" className="form-control" id="account" placeholder="Enter account" required/>
            <div className="invalid-feedback">
              <Exclamation size={22} color="#F5A623"/>
              PLEASE ENTER A ACCOUNT.
            </div>
          </div>
          <div className="form-group mb-4">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter password" required/>
            <div className="invalid-feedback">
              <Exclamation size={22} color="#F5A623"/>
              PLEASE ENTER A PASSWORD.
            </div>
          </div>
          <div className="form-group mb-5">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm password"
              required/>
            <div className="invalid-feedback">
              <Exclamation size={22} color="#F5A623"/>
              PLEASE CONFIRM A PASSWORD.
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-block">SUBMIT & NEXT</button>
        </form>
      </div>
    )
  }

  componentDidMount() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.getElementsByClassName('needs-validation')
    // Loop over them and prevent submission
    const validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
  }

}

export default CreateAccount