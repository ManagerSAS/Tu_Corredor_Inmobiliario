<template>
    <v-container fluid>
        <v-row justify="center" align="center">
            <v-col justify="center" align="center" cols="12" sm="12" md="10" lg="8">
                <div class="mt-5 mb-5 text-titles">
                    <h2>Consigna tu Inmueble</h2>
                </div>
                <v-row>
                    <v-col cols="12" sm="12" md="6" lg="6">
                        <v-text-field
                            label="Nombre Completo"
                            filled
                            rounded
                            hide-details
                            class="Inputs"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="6" lg="6">
                        <v-text-field
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
                        <v-text-field
                            label="Estado del nmueble"
                            filled
                            hide-details
                            rounded
                            dense
                            class="Inputs"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="6" lg="6">
                        <v-file-input
                            label="Fotos del inmueble"
                            filled
                            hide-details
                            rounded
                            dense
                            class="Inputs"
                        ></v-file-input>
                    </v-col>
                </v-row>
                <div>
                    <v-btn class="rounded-pill white--text ma-5" color="#9c0c04" >Eviar Inmueble</v-btn>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>