import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoutes = ({ component: Component, auth, ...otherProps }) => {
  console.log(otherProps)
  return (
    <Route
      {...otherProps}
      render={props => !auth.isSignedIn && (!(otherProps?.admin && auth?.user?.role === 'user'))
        ? <Redirect to='/login' />
        : <Component {...props} />}
    />
  )
}

const mapStateToProps = state => {
  return { auth: state.auth}
}

export default connect(mapStateToProps)(PrivateRoutes)