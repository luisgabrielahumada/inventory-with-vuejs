<template>
   <div class="container">
       <ul class="list-group">
           <li class="list-group-item">
               <span class="item-name">name</span>
               <span class="item-name float-right">price</span>
           </li>
           <hr>
           <li  v-for="(item, id) in items" :key="id" class="list-group-item">
               <button class="btn btn-danger btn-sm  mr-1" @click="removeItem(index)">remove</button>
               <span class="item-name">{{item.title}}</span>
               <span class="item-name float-right">${{item.price}}</span>

           </li>
           <hr>


           <li  class="list-group-item">
               <span class="item-name">Total</span>
               <span class="item-name float-right">${{total}}</span>
           </li>

       </ul>
   </div>
</template>

<script>
    export default {
        props:['items'],
        computed:{
            total() {
                var total = 0
                this.items.forEach(item => {
                    total += parseFloat(item.price);
                });
                return total
            }
        },
        methods:{
            removeItem(index){
                this.$emit('removeItem',index);
            }
        }
    }
</script>

<style scoped>

</style>