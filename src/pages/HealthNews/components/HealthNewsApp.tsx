import styles from './HealthNews.module.css'


//images
import news1 from '../../../assets/news/news1.png'
import news2 from '../../../assets/news/news2.png'
import news3 from '../../../assets/news/news3.png'
import news4 from '../../../assets/news/news4.png'
import { Link } from 'react-router-dom'


export const HealthNewsApp: React.FC = ()=>{

    const contentNews = [

        { 
            id   : 1, 
            url  : 'https://www.revistaabm.com.br/artigos/a-importancia-da-fisioterapia-na-terceira-idade-prevencao-e-cuidados',
            img  : news1,
            title: 'A importância da fisioterapia na terceira idade.',
        },
        { 
            id   : 2, 
            url  : 'https://g1.globo.com/pi/piaui/noticia/2023/09/15/video-aos-104-anos-idosa-volta-a-levantar-sozinha-com-sessoes-de-fisioterapia-e-comemoracao-viraliza.ghtml',
            img  : news2,
            title: 'Vídeo: aos 104 anos, idosa volta a levantar sozinha com sessões de fisioterapia e comemoração viraliza.',
        },
        { 
            id   : 3, 
            url  : 'https://cidadeverde.com/noticias/394568/a-fisioterapia-e-alternativa-para-se-manter-saudavel-na-terceira-idade-alerta-especialista',
            img  : news3,
            title: 'A fisioterapia é alternativa para se manter saudável na terceira idade.',
        },
        { 
            id   : 4, 
            url  : 'https://www.camara.leg.br/noticias/866101-projeto-assegura-tratamento-fisioterapico-a-idosos-no-sus/',
            img  : news4,
            title: 'Projeto assegura tratamento fisioterápico a idosos no SUS.',
        }
    ]

    return(

        <main className={styles.container}>

            <section className={styles.sectionTitle}>

                <h2 className={styles.title}>⟣ Notícias sobre saúde ⟢</h2>
                <strong className={styles.subtitle}>Se atualize por aqui</strong>

            </section>

            <section className={styles.contentNews}>

                {

                    contentNews.map(
                        (item) => (
                            <div key={item.id} className={styles.newsItem}>

                                <img 
                                    src={item.img} 
                                    alt={item.title} 
                                    className={styles.imgNews} 
                                />

                                <div className={styles.divTitleLink}>

                                    <strong className={styles.titleNews}>
                                        {item.title}
                                    </strong>

                                    <Link to={item.url} className={styles.buttonLink}>
                                        <span>Acesse a matéria completa</span>
                                    </Link>

                                </div>


                            </div>
                        )
                    )

                }
            </section>

        </main>
    )
}