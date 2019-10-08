<template>
<div>
    <v-form v-model="valid">
        <v-container>

                <v-col
                        cols="10"
                        md="5"
                >
                    <v-text-field
                            v-model="clothings.clothingName"
                            label="Name on Clothes"
                            required
                    ></v-text-field>
                </v-col>

            <v-row>

                <v-col
                        cols="10"
                        md="5"
                >
                    <v-text-field
                            v-model="clothings.clothesTypes"
                            label="Type of clothes"
                            required
                    ></v-text-field>
                </v-col>
                </v-row>
            <v-row>

                <v-col
                        cols="10"
                        md="5"
                >
                    <v-text-field
                            v-model="clothings.price"
                            label="Price"
                            required
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>

                <v-col
                        cols="10"
                        md="5"
                >
                    <v-text-field
                            v-model="clothings.size"
                            label="Size"
                            required
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>

                <v-col
                        cols="10"
                        md="5"
                >
                    <v-text-field
                            v-model="clothings.clothingInformation"
                            label="ClothingInformation"
                            required
                    ></v-text-field>
                </v-col>
            </v-row>

        </v-container>
    </v-form>

    <v-btn @click="buttonPost" class="float-left">Submit</v-btn>
</div>
</template>

<script>
    import restApi from '../../api/api'
    export default {
        mounted() {

        },
        data: ()  => ({
            clothings: {
                clothingName: '',
                size: '',
                price: 0,
                clothesTypes: '',
                clothingInformation: '',


            }



        }),
        methods: {
            buttonPost(){
                restApi.post('/clothing', {
                    clothingName: this.clothings.clothingName,
                    size: this.clothings.size,
                    price: this.clothings.price,
                    //clothesTypes: this.clothings.clothesTypes,
                    clothingInformation: this.clothings.clothingInformation,

                })
            }
           }


    };
</script>