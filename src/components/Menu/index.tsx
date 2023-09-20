import styles from './Menu.module.scss'

import Image from 'next/image'
import Link from 'next/link'

import { useAuth } from '@/data/hooks/useAuth'
import { useRouter } from 'next/router'

export default function Menu() {
    const router = useRouter()
    const { user } = useAuth()

    return (
        <menu className={styles.container}>
            <div className={styles.img}>
                <Link href={'/'}>
                    <Image
                        src="/logo-dio.png"
                        alt="DIO"
                        width={100}
                        height={37}
                    />
                </Link>
            </div>
            {user.uid ? (
                <div
                    className={styles.icon}
                    onClick={() => router.push('/perfil')}
                >
                    <Image
                        src={user.photoURL ? user.photoURL : '/usuario.svg'}
                        alt={user.displayName!}
                        width={100}
                        height={37}
                    />
                </div>
            ) : (
                <>
                    <div className={styles.btn}>
                        <button onClick={() => router.push('/autenticacao')}>
                            Entrar
                        </button>
                        <button onClick={() => router.push('/autenticacao')}>
                            Cadastrar
                        </button>
                    </div>
                </>
            )}
        </menu>
    )
}
