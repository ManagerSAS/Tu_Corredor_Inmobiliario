<template>
    <v-container fluid>
        <v-row justify="center" align="center">
            <v-col justify="center" align="center" cols="12" sm="12" md="8" lg="8" xl="8">
                <div class="mt-5 mb-5 text-titles">
                    <h2>Propiedades Destacadas</h2>
                </div>
                <VueSlickCarousel v-bind="settings"  justify="center" align="center">
                    <div justify="center" align="center" v-for="({id,name,src},index) in Property"
                    :key="index" >
                        <v-card class="ContentCards rounded-xl pa-5 ma-5 mt-5 mb-5">
                            <div >
                                <v-img class="rounded-xl" height="160" :lazy-src="src" :src="src" />
                                <p class="text-services mt-2 mb-2">{{name}}</p>
                            </div>
                            <div>
                                <v-btn class="rounded-pill red--text" color="yellow" @click="ViewProperty(id)">Ver más</v-btn>
                            </div>
                        </v-card>
                    </div>
                </VueSlickCarousel>
                <v-dialog
                    v-model="dialog"
                    >
                    <!-- max-width="600"
                    min-width="300" -->
                    <v-card>
                        <v-container>
                            <v-row justify="center" align="center">
                                <v-col justify="center" align="center" cols="10">
                                    <h3 class="ma-5 text-titles">{{typeProperty}}</h3>
                                    <div  align="start">
                                        <p class="text-services">Ubicación: <span  class="text-description">{{location}}</span> </p>
                                        <p class="text-services">Descripción: <span class="text-description">{{description}}, {{adicional}}</span> </p>
                                        <p class="text-services">Valor: <span class="text-description">{{valor}}</span> </p>
                                    </div>
                                    <VueSlickCarousel v-bind="settingsGallery" :arrows="true"  justify="center" align="center">
                                        <div justify="center" align="center" v-for="({src},index) in Gallery"
                                        :key="index" >
                                            <div class="rounded-xl pa-5 ma-5 mt-5 mb-5">
                                                <v-img height="500" class="rounded-xl" :lazy-src="src" :src="src" />
                                            </div>
                                        </div>
                                    </VueSlickCarousel>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>
                </v-dialog>
            </v-col>
        </v-row>
    </v-container>
</template>
<style lang="scss">
.slick-prev:before {
  color: #b54943;
  font-size: 30px;
}

.slick-next:before {
  color: #b54943;
  font-size: 30px;
}
</style>
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
 
  export default {
    components: { VueSlickCarousel },
    data(){
        return{
            Property:[
                {id:'1',name:'Apartamento',src:'/Propiedades/Apto5ToPieDeMonte/6.jpg'},
                {id:'2',name:'Apartamento',src:'Propiedades/AptoBarzal/1.jpg'},
                {id:'3',name:'Casa',src:'/Propiedades/CasaMaracos/1.jpg'},
                {id:'4',name:'Casa',src:'/Propiedades/CasaConjunto/1.jpg'},
                {id:'5',name:'Finca Villavicencio',src:'/Propiedades/Finca/1.jpg'},
                {id:'6',name:'Finca Guamal',src:'/Propiedades/FincaGuamal/1.jpg'},
                {id:'7',name:'Finca Puerto Lopez',src:'/Propiedades/FincaPuertoLopez/1.jpg'},
                {id:'8',name:'Finca Cabuyaro',src:'/Propiedades/FincaCabuyaro/1.jpg'},
                {id:'9',name:'Finca Cabuyaro',src:'/Propiedades/AptoTrapiche/1.jpg'},
            ],
            Gallery:[],
            typeProperty:'',
            location:'',
            description:'',
            adicional:'',
            valor:'',
            dialog: false,
            settings:{
                "autoplay": true,
                "infinite": true,
                "autoplaySpeed": 4000,
                "slidesToShow": 4,
                "slidesToScroll": 2,
                "responsive": [
                    {
                    "breakpoint": 1024,
                        "settings": {
                            "slidesToShow": 1,
                            "slidesToScroll": 1,
                            "infinite": true,
                            "dots": true,
                            "arrows":true
                        }
                    },
                    {
                    "breakpoint": 414,
                        "settings": {
                            "slidesToShow": 1,
                            "slidesToScroll": 1,
                            "infinite": true,
                            "dots":false,
                            "arrows":false
                        }
                    },
                    {
                    "breakpoint": 768,
                        "settings": {
                            "slidesToShow": 2,
                            "slidesToScroll": 1,
                            "infinite": true,
                            "dots": false,
                            "arrows":false
                        }
                    }
                ]
            },
            settingsGallery:{
                "autoplay": true,
                "infinite": true,
                "autoplaySpeed": 4000,
                "slidesToShow": 3,
                "slidesToScroll": 1,
                "responsive": [
                    {
                    "breakpoint": 414,
                        "settings": {
                            "slidesToShow": 1,
                            "slidesToScroll": 1,
                            "infinite": true,
                            "dots":false,
                            "arrows":false
                        }
                    },
                ]
            },
        }
    },
    methods:{
        ViewProperty(id){
            this.dialog=true
            console.log(id)
            if(id==1){
                this.typeProperty='Apartamento en Villavicencio 5to piso'
                this.location='sector de Amarilo a pocos metros del anillo Vial, conjunto Pie de Monte'
                this.description=' 3 dormitorios 2 baños, sala comedor, cocina y balcón'
                this.adicional='El conjunto cuenta con piscina, áreas sociales, parqueaderos, portería y vigilancia 24/7.'
                this.valor='$140.000.000'
                this.Gallery=[
                    {src:'/Propiedades/Apto5ToPieDeMonte/1.jpg'},
                    {src:'/Propiedades/Apto5ToPieDeMonte/2.jpg'},
                    {src:'/Propiedades/Apto5ToPieDeMonte/3.jpg'},
                    {src:'/Propiedades/Apto5ToPieDeMonte/4.jpg'},
                    {src:'/Propiedades/Apto5ToPieDeMonte/5.jpg'},
                    {src:'/Propiedades/Apto5ToPieDeMonte/6.jpg'},
                    {src:'/Propiedades/Apto5ToPieDeMonte/7.jpg'},
                    {src:'/Propiedades/Apto5ToPieDeMonte/8.jpg'},
                ]
            }else if(id==2){
                this.typeProperty='Apartamento en Villavicencio'
                this.location='Sector del Barzal Alto, muy cerca al Club Villavicencio, pegado al Hospital'
                this.description='Zona Residencial y de empresas de la Salud, Apartamento de 88 metros cuadrados,  cuenta con 3 habitaciones y 2 baños, estrato 5.'
                this.valor='$240.000.000'
                this.Gallery=[
                    {src:'/Propiedades/AptoBarzal/1.jpg'},
                    {src:'/Propiedades/AptoBarzal/2.jpg'},
                    {src:'/Propiedades/AptoBarzal/3.jpg'},
                    {src:'/Propiedades/AptoBarzal/4.jpg'},
                    {src:'/Propiedades/AptoBarzal/5.jpg'},
                    {src:'/Propiedades/AptoBarzal/6.jpg'},
                    {src:'/Propiedades/AptoBarzal/7.jpg'},
                    {src:'/Propiedades/AptoBarzal/8.jpg'},
                    {src:'/Propiedades/AptoBarzal/9.jpg'},
                    {src:'/Propiedades/AptoBarzal/10.jpg'},
                    {src:'/Propiedades/AptoBarzal/11.jpg'},
                    {src:'/Propiedades/AptoBarzal/12.jpg'},
                    {src:'/Propiedades/AptoBarzal/13.jpg'},
                    {src:'/Propiedades/AptoBarzal/14.jpg'},
                    {src:'/Propiedades/AptoBarzal/15.jpg'},
                    {src:'/Propiedades/AptoBarzal/16.jpg'},
                    {src:'/Propiedades/AptoBarzal/17.jpg'},
                    {src:'/Propiedades/AptoBarzal/18.jpg'},
                    {src:'/Propiedades/AptoBarzal/19.jpg'},
                    {src:'/Propiedades/AptoBarzal/20.jpg'},
                    {src:'/Propiedades/AptoBarzal/21.jpg'},
                ]
            }else if(id==3){
                this.typeProperty='Casa en Villavicencio'
                this.location='Esquinera, a 2 cuadras de la avenida Maracos, a pocas cuadras del Terminal de Transporte,'
                this.description='con renta de más de 2 millones de pesos, 3 apartamentos,  terraza, y Local comercial.'
                this.valor='$400.000.000'
                this.Gallery=[
                    {src:'/Propiedades/CasaMaracos/1.jpg'},
                    {src:'/Propiedades/CasaMaracos/2.jpg'},
                    {src:'/Propiedades/CasaMaracos/3.jpg'},
                    {src:'/Propiedades/CasaMaracos/4.jpg'},
                    {src:'/Propiedades/CasaMaracos/5.jpg'},
                    {src:'/Propiedades/CasaMaracos/6.jpg'},
                    {src:'/Propiedades/CasaMaracos/7.jpg'},
                    {src:'/Propiedades/CasaMaracos/8.jpg'},      
                ]
            }else if(id==4){
                this.typeProperty='Casa en Villavicencio, Conjunto Cerrado'
                this.location='Sobre el Anillo Vial, cerca a la terminal de transporte,  y a la Universidad Antonio Nariño, y la Santo Tomas , a solo 10 minutos del centro de la ciudad.'
                this.description='3 habitaciones,  2 baños , y Parqueadero propio frente a la casa.'
                this.valor='$270.000.000'
                this.Gallery=[
                    {src:'/Propiedades/CasaConjunto/1.jpg'},
                    {src:'/Propiedades/CasaConjunto/2.jpg'},
                    {src:'/Propiedades/CasaConjunto/3.jpg'},
                    {src:'/Propiedades/CasaConjunto/4.jpg'},
                    {src:'/Propiedades/CasaConjunto/5.jpg'},
                    {src:'/Propiedades/CasaConjunto/6.jpg'},
                    {src:'/Propiedades/CasaConjunto/7.jpg'},
                    {src:'/Propiedades/CasaConjunto/8.jpg'},      
                ]
            }
            else if(id==5){
                this.typeProperty='Finca en el Llano en el municipio de Paratebueno'
                this.location='A sólo 80 km de Villavicencio'
                this.description='finca de 183 hectáreas,  con más de 1.500 metros sobre la Vía Nacional, instalaciones propias de la Ganadería,  como pasto, Corrales, cercas eléctricas, 100 % mecanizable, casas, bodegas y hangar'
                this.valor='$3´000.000.000'
                this.Gallery=[
                    {src:'/Propiedades/Finca/1.jpg'},
                    {src:'/Propiedades/Finca/2.jpg'},
                    {src:'/Propiedades/Finca/3.jpg'},
                    {src:'/Propiedades/Finca/4.jpg'},
                    {src:'/Propiedades/Finca/5.jpg'},
                    {src:'/Propiedades/Finca/6.jpg'},   
                ]
            }
            else if(id==6){
                this.typeProperty='Finca en Guamal meta'
                this.location='A sólo 14 km del casco urbano'
                this.description='54 hectáreas Ganaderas,por vía pavimentada, buenos pastos, 2 casas, aguas veraniegas,  escrituras al día.'
                this.valor='$1´500.000.000'
                this.Gallery=[
                    {src:'/Propiedades/FincaGuamal/1.jpg'},
                    {src:'/Propiedades/FincaGuamal/2.jpg'},
                    {src:'/Propiedades/FincaGuamal/3.jpg'},
                    {src:'/Propiedades/FincaGuamal/4.jpg'},
                    {src:'/Propiedades/FincaGuamal/5.jpg'},
                    {src:'/Propiedades/FincaGuamal/6.jpg'},   
                    {src:'/Propiedades/FincaGuamal/7.jpg'},
                    {src:'/Propiedades/FincaGuamal/8.jpg'},
                    {src:'/Propiedades/FincaGuamal/9.jpg'}, 
                ]
            }
            else if(id==7){
                this.typeProperty='Finca en Puerto Lopez sector de la Balsa'
                this.location='A sólo 14 km de la vía Nacional, orillas del Río Metica'
                this.description='46 hectáreas Ganaderas, bonitas instalaciones, aguas veraniegas, tierras de vega , aptas para cultivar, escrituras al día.'
                this.valor='$700.000.000'
                this.Gallery=[
                    {src:'/Propiedades/FincaPuertoLopez/1.jpg'},
                    {src:'/Propiedades/FincaPuertoLopez/2.jpg'},
                    {src:'/Propiedades/FincaPuertoLopez/3.jpg'},
                    {src:'/Propiedades/FincaPuertoLopez/4.jpg'},
                    {src:'/Propiedades/FincaPuertoLopez/5.jpg'},
                    {src:'/Propiedades/FincaPuertoLopez/6.jpg'},   
                    {src:'/Propiedades/FincaPuertoLopez/7.jpg'},
                    {src:'/Propiedades/FincaPuertoLopez/8.jpg'},
                    {src:'/Propiedades/FincaPuertoLopez/9.jpg'}, 
                    {src:'/Propiedades/FincaPuertoLopez/10.jpg'}, 
                ]
            }else if(id==8){
                this.typeProperty=' Finca en Cabuyaro Meta'
                this.location='A sólo 15 minutos del centro poblado,'
                this.description='50 hectáreas de sólo potreros, con pasto mejorado, buenas aguas veraniegas,  más de 500 metros sobre la vía principal,  escrituras al día. '
                this.valor='$750.000.000'
                this.Gallery=[
                    {src:'/Propiedades/FincaCabuyaro/1.jpg'},
                    {src:'/Propiedades/FincaCabuyaro/2.jpg'},
                    {src:'/Propiedades/FincaCabuyaro/3.jpg'},
                    {src:'/Propiedades/FincaCabuyaro/4.jpg'},
                ]
            }else if(id==9){
                this.typeProperty='Full house en el sector del Buque'
                this.location='Ubicado en el buque, el mejor y más cotizado sector de la ciudad, a solo 2 cuadras de Primavera Urbana'
                this.description='122 metros cuadrados, 3 habitaciones 2 baños 2 parqueaderos, completamente Nuevo para estrenar, amplio balcón, Todos los servicios incluyendo agua caliente, estrato 5, full Hause'
                this.valor='$520.000.000 - 100 millones por debajo del valor comercial'
                this.Gallery=[
                    {src:'/Propiedades/AptoTrapiche/1.jpg'},
                    {src:'/Propiedades/AptoTrapiche/2.jpg'},
                    {src:'/Propiedades/AptoTrapiche/3.jpg'},
                    {src:'/Propiedades/AptoTrapiche/4.jpg'},
                    {src:'/Propiedades/AptoTrapiche/5.jpg'},
                    {src:'/Propiedades/AptoTrapiche/6.jpg'},
                    {src:'/Propiedades/AptoTrapiche/7.jpg'},
                    {src:'/Propiedades/AptoTrapiche/8.jpg'},
                    {src:'/Propiedades/AptoTrapiche/9.jpg'},
                    {src:'/Propiedades/AptoTrapiche/10.jpg'},
                    {src:'/Propiedades/AptoTrapiche/11.jpg'},
                    {src:'/Propiedades/AptoTrapiche/12.jpg'},
                    {src:'/Propiedades/AptoTrapiche/13.jpg'},
                ]
            }
        }
        
    }
  }
</script> 