import Rodal from 'rodal'
import React from 'react'
import { connect } from 'react-redux'
import { toggleProfileModal } from '../actions'

const ProfileModal = (props) => {
  return (
    <Rodal
      visible={props.visibility}
      onClose={props.close}
      animation="flip"
    >
      <h4>プロフィール</h4>
      <p>
        {props.user.name}
      </p>
    </Rodal>
  )
}

const mapState = (state) => {
  return {
    visibility: state.profileModal.visibility,
    user: state.user,
  }
}
const mapDispatch = (dispatch) => {
  return {
    close: () => dispatch(toggleProfileModal(false))
  }
}

export default connect(mapState, mapDispatch)(ProfileModal)
