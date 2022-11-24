<template>
    <v-container fluid>
        <v-row justify="center" align="center">
            <v-col justify="center" align="center" cols="12" sm="12" md="10" lg="8">
                <div class="mt-5 mb-5 text-titles">
                    <h2>Contactános</h2>
                </div>
                <v-row>
                    <v-col cols="12" sm="12" md="6" lg="6">
                        <v-text-field
                            label="Nombre"
                            filled
                            rounded
                            hide-details
                            class="Inputs"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="6" lg="6">
                        <v-text-field
                            label="Apellido"
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
                            filled
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
                            clear-icon="mdi-close-circle"
                            label="Correo Electrónico"
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
                            label="Acepto Terminos y Condiciones*"
                        ></v-checkbox>
                    </v-col>
                </v-row>
                <div>
                    <v-btn class="rounded-pill white--text ma-5" color="#9c0c04" >Eviar Inmueble</v-btn>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>