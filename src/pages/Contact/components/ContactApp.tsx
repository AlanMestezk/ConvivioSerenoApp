import styles from './Contact.module.css'

//image
import imgContact from '../../../assets/contact/contactImg.jpg'

export const ContactApp: React.FC = ()=>{

    return(

        <main className={styles.container}>

            <section className={styles.sectionTitle}>

                <article className={styles.mainContent}>

                    <h1 className={styles.title}>⟣ Fale conosco ⟢</h1>

                    <img 
                        src={imgContact}
                        alt="imagem de contato" 
                        className={styles.imgContact}
                    />  

                    <h2 className={styles.information}>Informações: (11) 9 1668-0204</h2>

                </article>

            </section>

            <section className={styles.contentInfo}>

                <article className={styles.containerInfo}>
                    
                    <h2 className={styles.titleContent}>Ouvidoria</h2>

                </article>

                <article className={styles.contentText}>

                    <div className={styles.divParagraph}>

                        <p className={styles.paragraph}>
                            Para dúvidas, sugestões ou reclamações, entre em contato com a Ouvidoria do Convívio Sereno. <br />
                            Envie um e-mail para centrodiasereno@gmail.com com as seguintes informações:
                        </p>

                    </div>

                    <ul className={styles.List}>

                        <li className={styles.itemList}>- Nome do paciente;</li>
                        <li className={styles.itemList}>- Data de nascimento;</li>
                        <li className={styles.itemList}>- Telefone;</li>
                        <li className={styles.itemList}>- Assunto;</li>

                    </ul>

                    <p className={styles.paragraph}>

                        Estamos sempre prontos para atendê-lo cada vez melhor.

                    </p>


                </article>


            </section>
            
        </main>
    )
}