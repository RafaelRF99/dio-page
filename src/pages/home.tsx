import Layout from "@/components/Layout";
import { useAuth } from "@/data/hooks/useAuth";

export default function Home() {
    const { user } = useAuth()

    return (
        <Layout>
            {user.uid ? <h1>Você está logado!!!</h1> : ''}
        </Layout>
    )
}
