<template>
    <div>
        <v-form>
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
                                v-model="clothings.clothingType"
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
                        <v-text-field
                                v-model="clothings.imgLink"
                                label="Link To Image"
                                required
                        ></v-text-field>
                    </v-col>
                </v-row>

            </v-container>
        </v-form>

        <v-btn @click="updateClothing(clothings.id)" class="float-right">update</v-btn>
        <v-btn @click="$router.go(-1)" class="float-right">Back</v-btn>
    </div>
</template>

<script>
    import restApi from '../../api/api'
    export default {
        mounted() {
            const { id } = this.$route.params;
            this.fetchProduct(id);
        },
        data: ()  => ({
            clothings: {},
        }),

        methods: {
            fetchProduct(id) {
                restApi.get('/clothing/' + id)
                    .then((data) => {
                        this.clothings = data.data;
                    });
            },
                updateClothing(id) {
                    restApi.put('/clothing/'+id, {

                        id: this.clothings.id,
                        clothingName: this.clothings.clothingName,
                        size: this.clothings.size,
                        price: this.clothings.price,
                        clothingType: this.clothings.clothingType,
                        clothingInformation: this.clothings.clothingInformation,
                        imgLink: this.clothings.imgLink

                    })
                }

        }

    };
</script>