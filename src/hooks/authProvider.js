import React, {createContext, useEffect, useMemo, useState} from 'react'
import {onAuthStateChanged} from 'firebase/auth'

import {auth} from '../app/firebase'
import {useDispatch} from 'react-redux'
import {revokeAuth, setAuth} from '../slices/authSlice'

const initialValue = {
  user: null,
  loggedIn: false,
}

export const AuthContext = createContext(initialValue)

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(initialValue.user)
  const [loggedIn, setLoggedIn] = useState(initialValue.loggedIn)
  const dispatch = useDispatch()

  const userLogin = (authCredentials) => {
    const [authUser] = authCredentials?.providerData || []

    setUser(() => authUser || null)
    setLoggedIn(() => !!authUser)

    if (!!authUser) dispatch(setAuth({ user, loggedIn }))
    else dispatch(revokeAuth())
  }

  useEffect(() => {
    const unsubs = onAuthStateChanged(auth, userLogin, console.error)

    return () => unsubs()
  }, [user, loggedIn])

  const value = useMemo(() => ({ user, loggedIn }), [user, loggedIn])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
