import styles from '../styles/Autenticacao.module.scss'

import Layout from '@/components/Layout'
import Form from '@/components/Form'

export default function Autenticacao() {
    return (
        <Layout>
            <div className={styles.container}>
                <h1>
                    A plataforma para você aprender com experts, dominar as
                    principais tecnologias e entrar mais rápido nas empresas
                    mais desejadas.
                </h1>
                <Form />
            </div>
        </Layout>
    )
}
