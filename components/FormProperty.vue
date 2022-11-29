<template>
    <v-container fluid id="property">
        <v-row justify="center" align="center" class="ma-1">
            <v-col justify="center" align="center" cols="12" sm="12" md="10" lg="8">
                <div class="mt-5 mb-5 text-titles">
                    <h2>Consigna tu Inmueble</h2>
                </div>
                <v-form ref="formInmueble" autocomplete="off">
                    <v-row>
                        <v-col cols="12" sm="12" md="6" lg="6">
                            <v-text-field
                                label="Nombre Completo"
                                v-model="Name"
                                filled
                                rounded
                                hide-details
                                class="Inputs"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="6" lg="6">
                            <v-text-field
                                v-model="Barrio"
                                label="Barrio donde está el inmueble"
                                filled
                                rounded
                                hide-details
                                dense
                                class="Inputs"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="12" md="6" lg="6">
                            <v-text-field
                                v-model="Direccion"
                                label="Direccion"
                                filled
                                rounded
                                hide-details
                                dense
                                class="Inputs"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="6" lg="6">
                            <v-text-field
                                label="M2"
                                v-model="Medida"
                                filled
                                rounded
                                hide-details
                                dense
                                class="Inputs"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="12" md="6" lg="6">
                            <v-text-field
                                label="Valor"
                                v-model="Valor"
                                filled
                                rounded
                                hide-details
                                dense
                                class="Inputs"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="6" lg="6">
                            <v-select
                                label="Tipo inmueble"
                                v-model="Tipo"
                                :items="items"
                                filled
                                rounded
                                hide-details
                                dense
                                class="Inputs"
                            ></v-select>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="12" md="6" lg="6">
                            <v-file-input
                                label="Fotos del inmueble"
                                filled
                                v-model="files"
                                hide-details
                                rounded
                                small-chips
                                multiple
                                dense
                                @change="EnviarFotos"
                                class="Inputs"
                            ></v-file-input>
                        </v-col>
                        <v-col cols="12" sm="12" md="6" lg="6">
                            <v-text-field
                                label="Estado del inmueble"
                                filled                           
                                v-model="Estado"
                                hide-details
                                rounded
                                dense
                                class="Inputs"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    
                    <v-row justify="center" align="center">
                        <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                            <v-snackbar
                                class="pb-8"
                                :timeout="3000"
                                :value="snackbar"
                                :color="colorSnack"
                                rounded="pill"
                            > {{ message }} </v-snackbar>
                        </v-col>
                    </v-row>
                    <v-row justify="center" align="center">
                        <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                            <v-progress-circular
                                v-show="loading"
                                indeterminate
                                color="red darken-3"
                            ></v-progress-circular>
                        </v-col>
                    </v-row>
                    <div>
                        <v-btn class="rounded-pill white--text ma-5" color="#9c0c04" @click="EnviarPropiedad">Enviar Inmueble</v-btn>
                    </div>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import Post from './Post/Post'
export default {
    data(){
        return{
            snackbar: false,
            message: '',
            colorSnack: '',
            loading: false,
            Name:'',
            Barrio:'',
            Direccion:'',
            Medida:'',
            Valor:'',
            Tipo:'',
            Estado:'',
            files: null,
            links:[],
            lisnk:'',
            items: ['Apartamento', 'Casa', 'Finca', 'Lote'],
        }
    },
    methods:{    
        async EnviarFotos(){
            this.files.forEach(element => {
                const formdata = new FormData();
                formdata.append("upload_preset", "TuCorredor");
                formdata.append("file", element);
                const requestOptions = {
                    method: 'POST',
                    body: formdata,
                    redirect: 'follow'
                };
                fetch("https://api.cloudinary.com/v1_1/dhl17zanz/image/upload", requestOptions)
                .then(response => response.json())
                .then(result => {
                    this.links.push(result.url)
                })
            })  
        },
        async EnviarPropiedad(){
            this.loading = true
            this.snackbar = true
            this.colorSnack = 'green accent-4'
            this.message = 'Se esta procesando su informacion por favor espere...'
            if(this.Name!=='' && this.Barrio!=='' && this.Direccion!=='' && this.Medida!=='' && this.Valor!=='' && this.Tipo!=='' && this.Estado!=='' ){
                const data = {
                    Name:this.Name,
                    Barrio:this.Barrio,
                    Direccion:this.Direccion,
                    Medida:this.Medida,
                    Valor:this.Valor,
                    Tipo:this.Tipo,
                    Estado:this.Estado,
                    Files: this.links
                }
                const response = await Post.SendProperty(data)
                if(response.error === false){
                    this.loading = true
                    this.snackbar = true
                    this.colorSnack = 'green accent-4'
                    this.message = 'Su información fue enviada con exito'
                    this.$refs.formInmueble.reset()
                    this.loading = false
                }
                else{
                    this.loading = false
                    this.snackbar = true
                    this.colorSnack = 'green accent-4'
                    this.message = 'Intente nuevamente'
                }
            }else{
                this.loading = false
                this.snackbar = true
                this.colorSnack = 'green accent-4'
                this.message = 'Por favor llenar  los datos obliatorios*'
            }
        }
    }
}
</script>