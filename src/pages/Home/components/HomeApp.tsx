import React, { useState, useEffect } from 'react';
import styles                         from './HomeApp.module.css'
import { Swiper, SwiperSlide }        from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination }     from 'swiper/modules';

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
                speed={1000} /* Define a velocidade de transição em 800ms para uma transição mais suave */
            >
                {
                    data.slides.map(
                        (item) => (
                            <SwiperSlide key={item.id}>
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

                    <h2 className={styles.titleContent}>⟣ Convívio Sereno ⟢</h2>

                    <h3 className={styles.textContent}>
                        O Centro Dia Sereno para Idosos é uma instituição dedicada a proporcionar um ambiente seguro, acolhedor e estimulante para a população idosa. Com uma equipe de profissionais altamente qualificados e uma infraestrutura pensada especificamente para atender às necessidades dos idosos, o centro oferece uma ampla gama de atividades e serviços planejados para promover um envelhecimento ativo e saudável. Entre os serviços oferecidos, destacam-se as atividades físicas, oficinas de artesanato, sessões de fisioterapia, acompanhamento médico e nutricional, além de eventos sociais e culturais que visam integrar e estimular os participantes. O Centro Dia Sereno para Idosos se compromete a promover a autonomia e a qualidade de vida dos seus frequentadores, proporcionando um espaço onde os idosos possam socializar, aprender e se divertir em um ambiente acolhedor e respeitoso.
                    </h3>



                </div>


            </section>

            
        </main>
    )

}