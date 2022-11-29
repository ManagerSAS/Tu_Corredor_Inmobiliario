<template>
    <v-container fluid id="contact">
        <v-row justify="center" align="center" class="ma-1">
            <v-col justify="center" align="center" cols="12" sm="12" md="10" lg="8">
                <div class="mt-5 mb-5 text-titles">
                    <h2>Contáctanos</h2>
                </div>
                <v-form ref="formContac" autocomplete="off">
                    <v-row>
                        <v-col cols="12" sm="12" md="6" lg="6">
                            <v-text-field
                                label="Nombre"
                                v-model="Name"
                                :rules="nameRules"
                                filled
                                rounded
                                hide-details
                                class="Inputs"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="6" lg="6">
                            <v-text-field
                                label="Apellido"
                                v-model="Apellido"
                                :rules="nameRules"
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
                                label="Correo Electrónico"
                                v-model="Correo"
                                :rules="emailRules"
                                type="email"
                                filled
                                rounded
                                hide-details
                                dense
                                class="Inputs"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="6" lg="6">
                            <v-text-field
                                label="Celular"                           
                                v-model="Celular"
                                filled
                                type="number"
                                :rules="nameRules"
                                rounded
                                hide-details
                                dense
                                class="Inputs"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="12" md="12" lg="12">
                            <v-textarea
                                clearable
                                v-model="Mensaje"
                                :rules="nameRules"
                                clear-icon="mdi-close-circle"
                                label="Mesaje"
                                filled
                                rounded
                                hide-details
                                dense
                                class="Inputs"
                            ></v-textarea>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="12" md="12" lg="12">
                            <v-checkbox
                                filled
                                rounded
                                hide-details
                                dense
                                v-model="politicas"
                                label="Acepto Terminos y Condiciones*"
                            ></v-checkbox>
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
                        <v-btn class="rounded-pill white--text ma-5" color="#9c0c04" @click="EnviarContacto">Enviar Formulario</v-btn>
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
            politicas: false,
            Name:'',
            Apellido:'',
            Correo:'',
            Celular:'',
            Mensaje:'',
            nameRules: [
                v => !!v || 'Campo requerido',
            ],
            emailRules: [
                v => /.+@.+\..+/.test(v) || '',
            ],
        }
    },
    methods:{
        async EnviarContacto(){
            this.loading = true
            this.snackbar = true
            this.colorSnack = 'green accent-4'
            this.message = 'Se esta procesando su informacion por favor espere...'
            if(this.Name !== '' && this.Apellido !== '' && this.Correo !== '' && this.Celular !== '' && this.Mensaje !== '' && this.politicas !== false){
                const data = {
                    Name: this.Name,
                    Apellido: this.Apellido,
                    Correo: this.Correo,
                    Celular: this.Celular,
                    Mensaje: this.Mensaje
                }
                const response = await Post.SendContact(data)
                console.log(response)
                if(response.error !== true){
                    this.loading = false
                    this.snackbar = true
                    this.colorSnack = 'green accent-4'
                    this.message = response.mensaje
                    this.$refs.formContac.reset()
                }else{
                    this.loading = false
                    this.snackbar = true
                    this.colorSnack = 'red accent-4'
                    this.message = 'Intente nuevamente'
                }
            } 
        }
    }
}
</script>