/* eslint-disable react-hooks/exhaustive-deps */
import Rodal from 'rodal'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { toggleProfileModal, fetchProfile } from '../actions'

const ProfileModal = (props) => {
  useEffect(() => {
    const storedKey = localStorage.getItem('apiKey')
    if (storedKey) props.fetchProfile(storedKey)
  }, [])

  const { name, profile_image_url } = props.profile

  return (
    <Rodal
      visible={props.visibility}
      onClose={props.close}
    >
      <h5>プロフィール</h5>
      <p>
        {name}
      </p>

      <img src={profile_image_url} alt=""/>

      { !props.loaded && (
        <div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={props.fetchProfileWithPrompt}
          >更新</button>
        </div>
      ) }
    </Rodal>
  )
}

const mapState = (state) => {
  return {
    visibility: state.profileModal.visibility,
    profile: state.user.profile,
    loaded: !!state.user.profile.id,
  }
}
const mapDispatch = (dispatch) => {
  return {
    close: () => dispatch(toggleProfileModal(false)),
    fetchProfile: (token) => dispatch(fetchProfile(token)),
    fetchProfileWithPrompt: () => dispatch(fetchProfile(window.prompt('Your Qiita API token is?\nhttps://qiita.com/settings/applications'))),
  }
}

export default connect(mapState, mapDispatch)(ProfileModal)
