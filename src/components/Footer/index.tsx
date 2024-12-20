import styles from './FooterStyles.module.css'

//images
import logoCS    from '../../assets/logo/imageLogoIcon.png'
import whatsapp  from '../../assets/network/whatsapp.png'
import instagram from '../../assets/network/instagram.png'
import linkedin  from '../../assets/network/linkedin.png'
import { Link } from 'react-router-dom'

export const Footer: React.FC = ()=>{

    return(
        <footer className={styles.footer}>

            <section className={styles.footerSection}>

                <strong className={styles.title}>⟣ CSCDPI © - 2024 all rights reserved ⟢</strong>
                <strong className={styles.title2}>Centro dia para idosos ⧫⧫⧫ Cuidado ⧫⧫⧫ Conforto ⧫⧫⧫ Repouso ⧫⧫⧫ Qualidade ⧫⧫⧫ Acolhimento</strong>
               

            </section>

            <section className={styles.sectionContent}>
                
                <div className={styles.divNameEnterprise}>

                    <img 
                        src={logoCS}
                        alt="Logo da pagina" 
                        className={styles.logo}
                    />

                    <strong className={styles.NameEnterprise}>Convívio Sereno</strong>

                    <img 
                        src={logoCS}
                        alt="Logo da pagina" 
                        className={styles.logo}
                    />

                </div>

                <div className={styles.divNetwork}>

                    <div className={styles.titleNetworks}>

                        <strong className={styles.titleNetworks}>Fale conosco: </strong>

                    </div>


                    <div className={styles.divNetworks}>


                        <Link to='https://wa.me/5511916680204'>
                            <img 
                                src={whatsapp}
                                alt="Rede social"
                                className={styles.imgNetWork} 
                            />
    
                        </Link>


                        <Link to='https://www.instagram.com/dra.alexandraneves?igsh=eG93OGszOW8zeGgx&utm_source=qr'>
    
                            <img 
                                src={instagram} 
                                alt="Rede social"
                                className={styles.imgNetWork} 
                            />
                        </Link>


                        <Link to='https://www.linkedin.com/in/alexandra-neves-camas-071429294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'>
    
                            <img 
                                src={linkedin} 
                                alt="Rede social"
                                className={styles.imgNetWork} 
                            />
                        </Link>


                    </div>


                </div>

            </section>

        </footer>
    )

}