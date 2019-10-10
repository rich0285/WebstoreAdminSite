
<template>
    <div class="row wrap">
        <v-card v-for="product in clothings" v-bind:key="product.id"
                max-width="344"
                class="col-sm-4 ma-2"

        >
            <v-img
                    :src="product.imgLink"
                    height="200"
            ></v-img>
            <v-card-title>{{product.clothingName}}</v-card-title>

            <v-card-text >

                Size: {{product.size}}
                <br >
                DKK: {{product.price}}
                <br>
                clothesTypes: {{product.clothingType}}
                <br>
                id: {{product.id}}
                <br>
                Info: {{product.clothingInformation }}

            </v-card-text>
            <v-card-actions>
                <v-btn :to="{
                    name: 'Clothing-update',
                    params: {
                    id: product.id
                    }
                }">View</v-btn>
                <v-btn v-on:click="DeleteById(product)" class="float-right">Delete</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
¨
<script>
    import axios from 'axios';
    import restApi from '../../api/api'
    export default {
        mounted() {
            this.loadData()
        },
        data: () => ({
            clothings: [],

        }),
        methods: {
            loadData() {
                axios.get('http://webstoreproject.azurewebsites.net/api/clothing')
                    .then((response) => {
                        this.clothings = response.data.list
                    })
            },
            async DeleteById(product) {
                let result = await restApi.delete('/clothing/' + product.id)
                if (result.status !== 200) {
                    //wat
                } else {
                    this.loadData()
                }
            }
        }
    };
</script>
