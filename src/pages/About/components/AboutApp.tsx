import styles    from '../components/About.module.css'
import { Link }  from 'react-router-dom'

//images
import colab1    from '../../../assets/colab/colab1.jpeg'
import colab2    from '../../../assets/colab/colab2.jpeg'
import colab3    from '../../../assets/colab/colab3.jpeg'
import wpp       from '../../../assets/network/whatsapp.png'
import instagram from'../../../assets/network/instagram.png'

export const AboutApp: React.FC = ()=>{

    const data = [

        {
            id: 1,
            title: 'Cuidado e Respeito',
            text: 'Comprometemo-nos a tratar cada idoso com dignidade, oferecendo atenção personalizada e respeitando suas individualidades.'
        },
        {
            id: 2,
            title: 'Inclusão e Diversidade',
            text: 'Valorizamos a inclusão de todos, promovendo um ambiente que acolhe e respeita as diferenças, especialmente em relação à população LGBT+ e outras minorias.'
        },
        {
            id: 3,
            title: 'Saúde e Bem-Estar',
            text: 'Priorizamos a saúde integral dos nossos usuários, oferecendo atividades e serviços que atendem às suas necessidades físicas, emocionais e sociais.'
        },
        {
            id: 4,
            title: 'Aprendizado e Crescimento',
            text: 'Acreditamos na importância do aprendizado contínuo, proporcionando atividades que estimulem o desenvolvimento pessoal e a socialização.'
        },
        {
            id: 5,
            title: 'Comunidade e Colaboração',
            text: 'Buscamos parcerias com a comunidade para enriquecer nossas atividades e garantir um suporte abrangente aos nossos idosos.'
        }
    ]

    const dataColab =[
        {
            id: 1,
            name:'Alexandra Neves',
            formation: 'Gerontologia - Pós graduanda',
            picture: colab1,
            wpp: '(11) 91668-0204',
            instagram: '@dra.alexandraneves',
            urlWhatsapp: 'https://wa.me/5511916680204',
            urlIntagram: 'https://www.instagram.com/dra.alexandraneves?igsh=eG93OGszOW8zeGgx&utm_source=qr'
        },
        {
            id: 2,
            name:'Gabriela Gonçalves',
            formation: 'Gerontologia - Pós graduanda',
            picture: colab2,
            wpp: '(11) 98843-6488',
            instagram: '@fisiogabiamancio',
            urlWhatsapp: 'http://wa.me/5511988436488',
            urlIntagram: 'https://www.instagram.com/fisiogabiamancio?igsh=MWdpZHBvazUxbGZ6cQ%3D%3D'
        },
        {
            id: 3,
            name:'Juliane Cordeiro',
            formation: 'Gerontologia - Pós graduanda',
            picture: colab3,
            wpp: '(11) 96739-6386',
            instagram: '@_juliane.c',
            urlWhatsapp: 'http://wa.me/5511967396386',
            urlIntagram: 'https://www.instagram.com/_juliane.c?igsh=YTh2OGRyMzAwa2hv'
        }
    ]


    return(

        <main className={styles.container}>
            
            <h1 className={styles.title}>⟣ Quem Somos e No Que Acreditamos ⟢</h1>

            <section className={styles.content}>

                    {
                        data.map(
                            (item)=>(

                                <article className={styles.contentAboutUs}>

                                    <h2 className={styles.titleAbout}>{item.title}</h2>
                                    
                                    <p className={styles.textAbout}>{item.text}</p>

                                </article>

                            )
                        )
                    }

            </section>

            <section className={styles.sectionColab}>

                <h2 className={styles.titleColab}>Nossa Equipe de Fisioterapia, Pronta para Atender Você</h2>

                {
                    dataColab.map(
                        
                        (item)=>(
                            <div key={item.id} className={`${styles.cardColab} hidden`}>
                                
                                <div className={`${styles.divImg} show`}>

                                    <img 
                                        src={item.picture}
                                        alt={item.name}
                                        className={styles.imgColab}
                                    />

                                </div>

                                <div className={styles.divData}>

                                    <div className={styles.divName}>

                                        <h3 className={styles.name}>Dra. {item.name}</h3>
                                        
                                        <p className={styles.formation}>Formação: {item.formation}</p>
                                        
                                    </div>

                                    <div className={styles.divNetworks}>

                                        <div className={styles.network}>

                                            <div className={styles.networkLink}>

                                                <Link to={item.urlIntagram} className={styles.link}>

                                                    <img 
                                                        src={instagram} 
                                                        alt="netwok"
                                                        className={styles.imgNetwork} 
                                                    />
                                                    <span className={styles.nameNetwork}>{item.instagram}</span>

                                                </Link>

                                            </div>


                                            <div className={styles.networkLink}>

                                                <Link to={item.urlWhatsapp} className={styles.link}>
                                                
                                                    <img 
                                                        src={wpp} 
                                                        alt=""
                                                        className={styles.imgNetwork} 
                                                    />

                                                    <span className={styles.nameNetwork}>{item.wpp}</span>
                                                </Link>


                                            </div>


                                        </div>
                                    </div>


                                </div>

                            </div>
                        )
                    )
                }

            </section>

            <section className={styles.service}>

                <h2 className={styles.serviceTitle}>Agende uma Consulta!</h2>
                <p className={styles.serviceText}>Estamos prontos para atender você. <br />Escolha a forma de contato que melhor se adapta às suas necessidades.</p>
            </section>

        </main>
    )
}

