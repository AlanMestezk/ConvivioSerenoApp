import styles from './FooterStyles.module.css'

//images
import logoCS    from '../../assets/logo/imageLogoIcon.png'
import facebook  from '../../assets/network/facebook.png'
import whatsapp  from '../../assets/network/whatsapp.png'
import instagram from '../../assets/network/instagram.png'


export const Footer: React.FC = ()=>{

    return(
        <footer className={styles.footer}>

            <section className={styles.footerSection}>

                <strong className={styles.title}>CSCDPI © - 2024 all rights reserved </strong>

            </section>

            <section className={styles.sectionContent}>
                
                <div className={styles.divNameEnterprise}>

                    <strong className={styles.NameEnterprise}>Convívio Sereno</strong>

                    <img 
                        src={logoCS}
                        alt="Logo da pagina" 
                        className={styles.logo}
                    />

                </div>

                <div className={styles.divNetwork}>

                    <img 
                        src={facebook} 
                        alt="Rede social"
                        className={styles.imgNetWork} 
                    />
                    <img 
                        src={whatsapp}
                        alt="Rede social"
                        className={styles.imgNetWork} 
                    />
                    <img 
                        src={instagram} 
                        alt="Rede social"
                        className={styles.imgNetWork} 
                    />

                </div>

            </section>

        </footer>
    )

}