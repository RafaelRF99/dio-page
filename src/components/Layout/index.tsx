import { ReactNode } from 'react'

import Menu from '../Menu'

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Menu />
            <div>{children}</div>
        </>
    )
}
