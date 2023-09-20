import Layout from '@/components/Layout'
import { useAuth } from '@/data/hooks/useAuth'
import { useRouter } from 'next/navigation'

export default function Home() {
    const { user } = useAuth()
    const router = useRouter()

    return (
        <Layout>
            {user.uid ? (
                <>
                    <h1>Você está logado!!!</h1>
                    <button onClick={() => router.push('/autenticacao')}>
                        Entrar
                    </button>
                </>
            ) : (
                ''
            )}
        </Layout>
    )
}
