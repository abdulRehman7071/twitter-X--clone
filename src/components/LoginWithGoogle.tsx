"use client"
import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
import React, { useCallback } from 'react'
import toast from 'react-hot-toast'
import { graphQLClient } from '../../clients/api'
import { verifyUserGoogleTokenQuery } from '../../graphql/query/user'
import { useQueryClient } from '@tanstack/react-query'

const LoginWithGoogle = () => {
  const queryClient = useQueryClient();

  const handleLoginWithGoogle = useCallback(async (cred: CredentialResponse) => {
    console.log({ cred })
    const googleToken = cred?.credential;
    if (!googleToken) return toast.error('Google token not found')

    const { verifyGoogleToken } = await graphQLClient.request(verifyUserGoogleTokenQuery, { token: googleToken })

    toast.success("Verified Successfully")
    if (verifyGoogleToken) {
      window.localStorage.setItem('twitter_token', verifyGoogleToken)
    }

    await queryClient.invalidateQueries({ queryKey: ["current_user"] });

  }, [queryClient])
  return (
    <div className=' p-5 bg-slate-600 rounded-lg'>
      <h2>New to Twitter</h2>
      <GoogleLogin onSuccess={handleLoginWithGoogle} />
    </div>
  )
}

export default LoginWithGoogle