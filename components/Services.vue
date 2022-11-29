<template>
    <v-container fluid>
        <v-row justify="center" align="center">
            <v-col justify="center" align="center" cols="12" sm="12" md="10" lg="8">
                <div class="mt-5 text-titles">
                    <h2>Nuestros Servicios</h2>
                </div>
                <v-row class="mt-5">
                    <v-col v-for="({icon,text}, index) in Services" :key="index" cols="12" sm="12" md="3" lg="3">
                        <v-card class="ContentCards rounded-xl pt-10 " >
                            <v-img width="90px" :src="icon" alt="" srcset=""/>
                            <p class="text-services mt-10 pa-1">{{text}}</p>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default{
    data(){
        return{
            Services:[
                {icon:'./Iconos/Service1.png', text:'Asesorías y trámites inmobiliarios ante notarias'},
                {icon:'./Iconos/Service2.png', text:'Avalúos y tasación en propiedades de inmuebles urbanas y rurales'},
                {icon:'./Iconos/Service3.png', text:'Asesorías en compra y venta de inmuebles urbanos y rurales'},
                {icon:'./Iconos/Service4.png', text:'Arreglos locativos y embellecimiento de inmuebles urbanos'},
            ]
        }
    }
}
</script>