
import styles   from './Header.module.css'
import logo     from '../../assets/logo/imageLogoIcon.png'
import { Link } from 'react-router-dom'


export const Header: React.FC = ()=>{

    return(

        <header className={styles.header}>

            <section className={styles.sectionLogo}>

                <div className={styles.divTitleLogo}>

                    <img 
                        src={logo} 
                        alt="Logo pagina" 
                        className={styles.imgLogo}
                    />

                    <div>
                        <h1 className={styles.title}>‎‎ Convívio Sereno</h1>
                        <h1 className={styles.title}>‎‎ Centro Dia Para Idosos</h1>
                    </div>


                </div>
                
            </section>

            <section className={styles.sectionButton}>

                <div className={styles.divButton}>
                    
                    <Link to='/' className={styles.buttons}>
                        Home
                    </Link>

                    <Link to='/healtNews' className={styles.buttons} >
                        News da Saúde
                    </Link>

                    <Link to='/about' className={styles.buttons}>
                        Sobre Nós
                    </Link>

                    <Link to='/contact' className={styles.buttons}>
                        Contato
                    </Link>

                    
                </div>


            </section>
            
        </header>
    )

}