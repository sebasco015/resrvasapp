import React from 'react'
import { useAuthStore } from '../store/auth.store'

export const LoginPage = () => {

    const authStatus = useAuthStore(state => state.status)

  return (
    <div>
        <h3>LoginPage</h3>
        {authStatus}
    </div>
  )
}
