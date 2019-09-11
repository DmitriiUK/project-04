import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      navbarOpen: false
    }
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  toggleNavbar() {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ navbarOpen: false })
    }
  }

  render() {
    return (
      <nav className="navbar is-black" id="footer">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">Home</Link>
            <a
              role="button"
              className={`navbar-burger ${this.state.navbarOpen ? 'is-active': ''}`}
              onClick={this.toggleNavbar}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className={`navbar-menu ${this.state.navbarOpen ? 'is-active': ''}`}>
            <div className="navbar-start">
              <Link to="/bikes" className="navbar-item">Bikes</Link>
              <Link to="/brands" className="navbar-item">Brands</Link>
            </div>
            <div className="navbar-end">
              <Link to="/register" className="button is-black">Sign up</Link>
              <Link to="/login" className="button is-black">Log in</Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
export default withRouter(Navbar)
