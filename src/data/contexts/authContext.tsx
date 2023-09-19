import { createContext, useState, ReactNode } from 'react'

import { useRouter } from 'next/navigation'

import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    User,
} from 'firebase/auth'

import { auth } from '../../services/firebase'

interface authContextProps {
    login: (email: string, password: string) => void
    cadastrar?: (email: string, password: string) => Promise<void>
    user: User
    loading: boolean
}

export const AuthContext = createContext<authContextProps>(null!)

export default function AuthProvider({ children }: { children: ReactNode }) {
    const router = useRouter()
    const [user, setUser] = useState<User>({} as User)
    const [loading, setLoading] = useState(false)

    function login(email: string, password: string) {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                setUser(res.user)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
                router.push('/home')
            })
    }

    async function cadastrar(email: string, password: string) {
        try {
            const auth = getAuth()
            createUserWithEmailAndPassword(auth, email, password)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <AuthContext.Provider value={{ user, cadastrar, login, loading }}>
            {children}
        </AuthContext.Provider>
    )
}
