import React, { useState, useEffect } from 'react';
import styles from './HomeApp.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Se precisar de módulos adicionais (por exemplo, navegação, paginação):
import { Navigation, Pagination } from 'swiper/modules';

import img1 from '../../../assets/slide/img1.jpg'
import img2 from '../../../assets/slide/img2.jpg'
import img3 from '../../../assets/slide/img3.jpg'
import img4 from '../../../assets/slide/img4.jpg'
import img5 from '../../../assets/slide/img5.jpg'
import img6 from '../../../assets/slide/img6.png'

export const HomeApp: React.FC = ()=>{

    const [slidePerView, setSlidePerview] = useState <number>(2)

    useEffect(()=>{

        function handleResize(){
            if(window.innerWidth < 900){
                setSlidePerview(1)
            }else{
                setSlidePerview(2)
            }
        }

        handleResize()

        window.addEventListener('resize', handleResize)

    })

    const data ={

        slides: [

            {id: 1, image: img1, description: 'Cuidados com carinho e dignidade para a melhor idade.'},
            {id: 2, image: img2, description: 'Onde conforto e bem-estar se encontram.'},
            {id: 3, image: img3, description: 'Um repouso que cuida do seu coração.'},
            {id: 4, image: img4, description: 'Vivendo com qualidade, cuidando com amor.'},
            {id: 5, image: img5, description: 'Acolhimento, segurança e conforto para nossos idosos.'},
            {id: 6, image: img6, description: 'Seu lar longe de casa, com carinho e respeito.'}

        ]
    }

    return(

        <main className={styles.container}>

            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={slidePerView}
                navigation
                pagination={{ clickable: true }}
                className={styles.slider}
            >

                {
                    data.slides.map(
                        (item)=>(
                            <SwiperSlide>
                                
                                <img 
                                    src={item.image}
                                    alt="Imagem de slide" 
                                    className={styles.imgSlide}
                                />

                                <strong className={styles.description}>{item.description}</strong>

                            </SwiperSlide>
                        )
                    )
                }

            </Swiper>

            <section className={styles.content}>

                <div className={styles.divContent}>

                    <h2 className={styles.titleContent}>Convívio Sereno</h2>

                    <h3 className={styles.textContent}>
                        O envelhecimento populacional é um fenômeno mundial e crescente, que resulta do aumento da expectativa de vida e da redução das taxas de natalidade. <br /> 
                        Segundo dados da Organização Mundial da Saúde (OMS), a população global com 60 anos ou mais deve dobrar, passando de 1 bilhão em 2020 para 2,1 bilhões em 2050. <br /> 
                        Esse crescimento exige políticas públicas e projetos que atendam às necessidades dessa população, proporcionando suporte, inclusão social e qualidade de vida. <br />
                        Conforme o Instituto Brasileiro de Geografia e Estatística (IBGE), o número de pessoas acima de 65 anos deve triplicar até 2060, correspondendo a aproximadamente 25,5% da população total. <br /> 
                        Esse contexto demanda ações estruturadas para atender às especificidades dos idosos, garantindo o envelhecimento ativo e saudável. Centros de convivência e centros de dia para idosos surgem como alternativas promissoras para promover não só o bem-estar físico e emocional, mas também a autonomia e a interação social, aspectos essenciais para o envelhecimento saudável. <br />
                        Diante dessa realidade, o projeto do Convívio Sereno busca oferecer um espaço de cuidado e socialização para pessoas idosas que não necessitam de assistência contínua, <br /> mas que se beneficiam de um ambiente seguro e estimulante.
                    </h3>


                </div>


            </section>

            
        </main>
    )

}