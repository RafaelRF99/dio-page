import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Layout from '@/components/Layout'

export default function Home() {
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1>Implemente</h1>
                    <h2>o seu futuro global agora!</h2>
                    <p>
                        Domine as tecnologias utilizadas pelas empresas mais
                        inovadoras do mundo e encare seu novo desafio
                        profissional, evoluindo em comunidade com os melhores
                        experts.
                    </p>
                    <div className={styles.btn}>
                        <button>Começar agora</button>
                    </div>
                </div>
                <Image
                    className={styles.img}
                    src="/home.png"
                    alt="Tecnologia"
                    width={0}
                    height={0}
                    sizes="100vw"
                />
            </div>
        </Layout>
    )
}
