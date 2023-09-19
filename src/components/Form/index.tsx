import styles from './Form.module.scss'

import PersonIcon from '@mui/icons-material/Person'
import EmailIcon from '@mui/icons-material/Email'
import LockOpenIcon from '@mui/icons-material/LockOpen'

export default function Form() {
    return (
        <div className={styles.container}>
            <div>
                <form>
                    <h2>Comece agora grátis</h2>
                    <h3>Crie sua conta e make the change.</h3>
                    <div className={styles.inputs}>
                        <div className={styles.content}>
                            <div>
                                <PersonIcon fontSize="small" />
                            </div>
                            <input type="text" placeholder="Nome completo" />
                        </div>
                        <div className={styles.content}>
                            <div>
                                <EmailIcon fontSize="small" />
                            </div>
                            <input type="email" placeholder="E-mail" />
                        </div>
                        <div className={styles.content}>
                            <div>
                                <LockOpenIcon fontSize="small" />
                            </div>
                            <input type="password" placeholder="Password" />
                        </div>
                        <div className={styles.btn}>
                            <button>Criar minha conta</button>
                        </div>
                    </div>
                </form>
                <p>
                    Já tem conta. <span>Fazer login</span>
                </p>
            </div>
        </div>
    )
}
