import logo from '../img/logo.svg'
import React from 'react'
import { connect } from 'react-redux'

function Header(props) {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div>{ props.user_name }</div>
    </header>
  )
}

const mapStateToProps = state => {
  return {
    user_name: state.user_name,
  }
}
export default connect(mapStateToProps)(Header)