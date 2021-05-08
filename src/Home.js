import React from 'react';
import './home.css';
import Product from './Product'
const Home = () =>{
    console.log("test");
    return(
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/30/books/2019/ITES_BTS_2020/ES_BTS20/Traffic_driver/peak_2/XCM_Manual_ORIGIN_1263487_1343212_ES_es_es_hero_changes_peak2_es_es_3334984_1500x600_es_ES._CB404778822_.jpg" alt="Amazon background home"/>
                
                <div className="home__row">
                    <Product id={1} title="VACPOWER Aspiradora de Mano,6500pA Aspirador de Mano Sin Cable con BateríA Recargable de 2500mAh y Filtro Hepa Mejorado para el Hogar y el AutomóVil" price= {29.99} rating={4} image ="https://images-na.ssl-images-amazon.com/images/I/71clHHQWbCL._AC_SL1500_.jpg" imageDescription="backuun"/>
                    <Product id={2} title="Umi. by Amazon Auriculares de botón inalámbricos (TWS) W5s con Bluetooth 5.0 y certificación IPX7 compatibles con iPhone Samsung Huawei y Estuche metálico con Base de Carga (Dorado)" price= {32.98} rating= {4} image="https://images-na.ssl-images-amazon.com/images/I/6192BviwWbL._AC_SL1500_.jpg" imageDescription="Audifonos marca umi"/>
                </div>
                <div className="home__row">
                <Product id={3} title="LEFANT Robot Aspirador y Fregasuelos, Robot Aspiradora M501-A Succión Fuerte 2000Pa con Sensores Anticaída, Programable App, Autocarga, Aspira, Barre, Friega y Pasa la Mopa, Alexa y Google Home" price={199.99} rating= {4} image="https://images-na.ssl-images-amazon.com/images/I/61yo-6lhr0L._AC_SL1000_.jpg" imageDescription=""/>
                <Product id={4} title="PRIXTON Hidra H5B - Humidificador/Difusor Aceites Esenciales válido para Aromaterapia, Depósito 300 ml, luz LED Nocturna, Temporizador 1-3-6 h, Ambientador, Humidificador, Difusor de Aromas" price={19.95} rating= {5} image="https://images-na.ssl-images-amazon.com/images/I/51TkYNyOCmL._AC_SL1200_.jpg" imageDescription="Desumificador"/>
                <Product id={5} title="PRIXTON Cinema Mini - Mini Proyector Portatil / Proyector Mini Full HD, 900 Lúmenes, Conexión HDMI, USB, MicroSD, Aux in, AV in, Altavoces Integrados y Mando a Distancia Incluido" price={39.95} rating= {4} image="https://images-na.ssl-images-amazon.com/images/I/61S3GpEWucL._AC_SL1200_.jpg" imageDescription="Mini proyector"/>
                </div> 
                <div className="home__row">
                    <Product id={6} title="Samsung 4K UHD 2019 43RU7025 - Smart TV de 43 con Resolución 4K UHD, HDR 10+, Procesador 4K, PurColor y Compatible con Asistentes de Voz" price ={422.77} rating= {4} image="https://images-na.ssl-images-amazon.com/images/I/91j173ySeXL._AC_SL1500_.jpg" imageDescription="Televisor"/>
                </div>
            </div>

        </div>
    )
}


export default Home;