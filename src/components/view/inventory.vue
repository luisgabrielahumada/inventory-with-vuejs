<template>
    <div class="container">
        <div v-if="!loading" class="row">
            <div v-for="(item, id) in items" :key="id" class="card mr-2" style="width: 13rem;">
                <router-link :to="{path: '/item/'+item.id}">
                    <img :src="item.image" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{item.title}}</h5>
                        <p class="card-text">${{item.price}}</p>
                        <a @click="addToCart(item)" class="btn btn-outline-dark">+add</a>
                    </div>
                </router-link>
            </div>
        </div>
        <h1 v-else>Loding...</h1>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
          return{
              loading:true,

              items:[]
          }
        },
        mounted(){
            this.fetchInventory();
        },
        // props:['items'],
        methods:{
            addToCart(item){
                this.$emit('newItemAdded', item)

            },
            fetchInventory(){
                var self = this;
                axios.get('http://localhost:3000/items').then(response=>{

                    self.items = response.data
                    self.loading = false
                   // console.log(response)
                    /*setTimeout(()=> {
                        self.items = response.data
                        self.loading = false
                    },3000)*/

                })
            }
        }

    }
</script>

<style scoped>

</style>