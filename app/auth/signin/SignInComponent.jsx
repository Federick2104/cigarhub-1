'use client'
import React from 'react'
import { signIn } from 'next-auth/react'
const callbackUrl = process.env.NEXT_PUBLIC_SITE_URL + '/home'

const SignInComponent = ({ providers }) => {
  console.log('providers', providers)
  console.log('callbackUrl', callbackUrl)
  return (
    <div>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id, { callbackUrl: '/home' })}>Sign in with {providers.name}
          </button>
        </div>
      ))}
    </div>
  )
}

export default SignInComponent
