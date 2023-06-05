'use client'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Form from '@components/Form'


const CreatePrompt = () => {
    const router = useRouter()
    const { data: session } = useSession()

    const [submitting, setSubmitting] = useState(false)
    const [post, setPost] = useState({
        prompt: '',
        tag: ''
    })

    const createPrompt = async (e) => {
        e.preventDefault()
        setSubmitting(true)
        try {
            const response = await fetch('/api/prompt/new', {
                method: 'POST',
                body: JSON.stringify({
                    prompt: post.prompt,
                    userId: session?.user.id,
                    tag: post.tag
                })
            })
            if (response.ok) {
                router.push('/')
            }
        } catch (error) {
            console.log(error)

        } finally {
            setSubmitting(false)
        }
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
