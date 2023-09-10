import React from 'react'
import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'

export const runtime = process.env.RUNTIME_MODE

const AuthAPI = NextAuth({
  // Configure one or more authentication providers
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
})

export default AuthAPI
