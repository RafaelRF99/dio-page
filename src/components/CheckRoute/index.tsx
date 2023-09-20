import { ReactNode, useEffect } from 'react'

import { useRouter } from 'next/router'

import { useAuth } from '@/data/hooks/useAuth'

interface CheckRouteProps {
    admin: boolean
    children: ReactNode
}

export default function CheckRoute({ admin, children }: CheckRouteProps) {
    const router = useRouter()
    const { user } = useAuth()

    if (admin && !user) {
        return children
    } else {
        router.push('/home')
        return null
    }
}
