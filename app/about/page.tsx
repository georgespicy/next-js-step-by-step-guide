import React from 'react'
import Link from 'next/link'

function page() {
    // throw new Error ("not today")
    return (
        <>
            <h1>About</h1>
            <Link href="/">Link to home page</Link>
        </>
    )
}

export default page