import styles from './Layout.module.scss'

import { ReactNode } from 'react'

import Menu from '../Menu'

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className={styles.container}>
            <Menu />
            <div className={styles.esp}>{children}</div>
        </div>
    )
}
