import Image from 'next/image'

import styles from './Menu.module.scss'
import Link from 'next/link'

export default function Menu() {
    return (
        <menu className={styles.container}>
            <div className={styles.img}>
                <Link href={'/'}>
                    <Image
                        src="/logo-dio.png"
                        alt="DIO"
                        layout="fill"
                        objectFit="contain"
                        sizes="100%"
                    />
                </Link>
            </div>
            <div className={styles.btn}>
                <button>Entrar</button>
                <button>Cadastrar</button>
            </div>
        </menu>
    )
}
