'use client'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

import Form from '@components/Form'


const CreatePrompt = () => {
    const [submitting, setSubmitting] = useState(false)
    const [post, setPost] = useState({
        prompt: '',
        tag: ''
    })

    const createPrompt = async (e) => {
        e.preventdefault()
    }

    return (
        <Form
            type="Create"
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={createPrompt}
        />
    )
}

export default CreatePrompt


// # https://console.cloud.google.com/

// GOOGLE_ID=891372341060-va3ri1hko9rmbhiolp1sov0m207lv7q5.apps.googleusercontent.com

// GOOGLE_CLIENT_SECRET=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

// # https://mongodb.com/atlas

// MONGODB_URI= mongodb+srv://nodejsfvl:IhtzbRul9sQgClSx@cluster0.m1iv0yy.mongodb.net/?retryWrites=true&w=majority

// NEXTAUTH_URL=http://localhost:3000

// NEXTAUTH_URL_INTERNAL=http://localhost:3000

// NEXTAUTH_SECRET=q5iRITLgohHSnUVkOs8l78JY6+ueVjbTsayOrFJTpaA=
