<template>
    <div class="container">
        <div v-if="item" class="row">
            <div class="col-sm-6">
                <img :src="item.image" alt="Image">
            </div>
            <div class="col-sm-6">
                <h4>{{item.title}}</h4>
                <p>{{item.description}}</p>
                <hr>
                <p>{{item.price}}</p>
                <button class="btn btn-sm btn-outline-dark mr-auto">+add</button>
            </div>
        </div>
        <h3 v-else>Loading..</h3>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data(){
            return{
                item:null
            }
        },
        mounted(){
          this.fetchItem()
        },
        methods:{
            fetchItem(){
                const self = this;
                axios.get('http://localhost:3000/item/'+ this.$route.params.id).then(response=>{
                    self.item = response.data;
                })
            }
        }

    }
</script>

<style scoped>

</style>