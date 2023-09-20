import styles from '../styles/Perfil.module.scss'

import { useAuth } from '@/data/hooks/useAuth'

import Layout from '@/components/Layout'

export default function Perfil() {
    const { user } = useAuth()

    return (
        <Layout>
            <div className={styles.container}>
                <h1>Informações do Perfil</h1>
                <div className={styles.content}>
                    {user.uid ? <p>ID: {user.uid}</p> : ''}
                    {user.displayName ? <p>Nome: {user.displayName}</p> : ''}
                    {user.email ? <p>Email: {user.email}</p> : ''}
                    {user.phoneNumber ? <p>Número: {user.phoneNumber}</p> : ''}
                </div>
            </div>
        </Layout>
    )
}
