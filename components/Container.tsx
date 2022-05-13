import { useRouter } from "next/router"
import { useState, useEffect } from "react"

export default function Container(props) {
    const [, setMounted] = useState(false)

    // After mounting, we have access to the theme
    useEffect(() => setMounted(true), [])

    const { children} = props

    return (
        <>
            {children}
        </>
    )
}
