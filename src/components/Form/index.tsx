import styles from './Form.module.scss'

import PersonIcon from '@mui/icons-material/Person'
import EmailIcon from '@mui/icons-material/Email'
import LockOpenIcon from '@mui/icons-material/LockOpen'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useAuth } from '@/data/hooks/useAuth'

interface Login {
    name: string
    email: string
    pass: string
}

export default function Form() {
    const [isLogin, setIsLogin] = useState(true)
    const { cadastrar, login, user } = useAuth()

    const {
        register,
        handleSubmit,
        resetField,
        formState: { errors },
    } = useForm<Login>()

    function handleSave(data: Login) {
        if (isLogin) {
            login?.(data.email, data.pass)
        } else {
            cadastrar?.(data.email, data.pass)
            setIsLogin(true)
        }
        resetField('name'), resetField('email'), resetField('pass')
    }

    return (
        <div className={styles.container}>
            <div>
                <form onSubmit={handleSubmit(handleSave)}>
                    <h2>Comece agora grátis</h2>
                    <h3>Crie sua conta e make the change.</h3>
                    <div className={styles.inputs}>
                        {isLogin ? (
                            ''
                        ) : (
                            <div className={styles.content}>
                                <div>
                                    <PersonIcon fontSize="small" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Nome completo"
                                    {...register('name', {
                                        required: true,
                                        minLength: 7,
                                    })}
                                />
                                {errors.name?.type === 'required' ? (
                                    <p className={styles.error}>
                                        *Campo obrigatório
                                    </p>
                                ) : (
                                    ''
                                )}
                                {errors.name?.type === 'minLength' ? (
                                    <p className={styles.error}>
                                        *Mínimo de caracter 7
                                    </p>
                                ) : (
                                    ''
                                )}
                            </div>
                        )}
                        <div className={styles.content}>
                            <div>
                                <EmailIcon fontSize="small" />
                            </div>
                            <input
                                type="email"
                                placeholder="E-mail"
                                autoComplete="username"
                                {...register('email', { required: true })}
                            />
                        </div>
                        <div className={styles.content}>
                            <div>
                                <LockOpenIcon fontSize="small" />
                            </div>
                            <input
                                type="password"
                                placeholder="Password"
                                autoComplete="current-password"
                                {...register('pass', { required: true })}
                            />
                            {errors.pass?.type === 'required' ? (
                                <p className={styles.error}>
                                    *Campo obrigatório
                                </p>
                            ) : (
                                ''
                            )}
                        </div>
                        <div className={styles.btn}>
                            {isLogin ? (
                                <button>Entrar</button>
                            ) : (
                                <button>Criar minha conta</button>
                            )}
                        </div>
                    </div>
                </form>
                {isLogin ? (
                    <p>
                        Não tem conta?.{' '}
                        <span onClick={() => setIsLogin(false)}>
                            Fazer cadastro
                        </span>
                    </p>
                ) : (
                    <p>
                        Já tem conta.{' '}
                        <span onClick={() => setIsLogin(true)}>
                            Fazer login
                        </span>
                    </p>
                )}
            </div>
        </div>
    )
}
