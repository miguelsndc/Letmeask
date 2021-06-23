import { createContext, ReactNode, useEffect, useState } from 'react'

import { auth, firebase } from '../services/firebase'

type User = {
  id: string
  name: string
  avatar: string
}

type AuthContextType = {
  user?: User
  signInWithGoogle: () => Promise<void>
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>()

  function retrieveUserInfo(user: firebase.User) {
    const { displayName, photoURL, uid } = user

    if (!displayName || !photoURL) {
      throw new Error('Missing information from Google Account')
    }

    setUser({
      id: uid,
      name: displayName,
      avatar: photoURL,
    })
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) retrieveUserInfo(user)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()

    const result = await auth.signInWithPopup(provider)

    if (result.user) retrieveUserInfo(result.user)
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  )
}
