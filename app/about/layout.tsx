import React from 'react'
import styles from './styles.module.css'

export const metadata = {
  title: 'Create Next About Page',
  description: 'Generated by create next app',
}

function AboutLayout({
    children,
}:{
    children: React.ReactNode
}) {
  return (
    <>
        <nav>navbar for about</nav>
        <main className={styles.main}>
            {children}
        </main>
    </>
  )
}

export default AboutLayout