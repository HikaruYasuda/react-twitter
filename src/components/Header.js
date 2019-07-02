import logo from '../img/logo.svg'
import React from 'react'
import { connect } from 'react-redux'
import { toggleProfileModal } from '../actions'

function Header(props) {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div>
        <button
          type="button"
          className="btn btn-link"
          onClick={props.showProfileModal}
        >
          { props.user_name || '(ゲスト)' }
        </button>
      </div>
    </header>
  )
}

const mapState = (state) => {
  return {
    user_name: state.user.profile.name,
  }
}
const mapDispatch = dispatch => {
  return {
    showProfileModal: () => dispatch(toggleProfileModal(true)),
  }
}
export default connect(mapState, mapDispatch)(Header)
