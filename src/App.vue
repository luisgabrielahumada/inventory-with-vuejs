<template>
  <div id="app">
   <!--
   <router-link :to="{path:'/'}">Home</router-link>
      <router-link :to="{path:'/test/1'}">test</router-link>
      <router-link :to="{path:'/test/2'}">test</router-link>
      <router-link :to="{path:'/test/23'}">test</router-link>
      <router-view></router-view>
      -->
       <div class="container">
         <comNavbar @search="search"></comNavbar>
           <div class="row">
             <div class="col-md-9">
               <router-view></router-view>
               <!--<comInventory @newItemAdded="addCartItem" :items="items"></comInventory>-->
             </div>
             <div class="col-md-3">
                 <comCart @removeItem="removeItem(index)" :items="cart"></comCart>
             </div>
           </div>
       </div>
  </div>

</template>

<script>
import comNavbar from './components/Navbar'
import comCart from './components/cart'
 // import comInventory from './components/inventory'
import comJsonData from './data'
export default {
    components:{
       comNavbar,
       comCart,
        // comInventory,
    },
    data(){
      return{
          items:[],
          cart:[]
      }
    },
    mounted(){
        this.items = comJsonData
    },
    methods:{
        addCartItem(item){
            this.cart.push(item);
        },
        removeItem(index){
            this.cart.splice(index, 1);
        },
        search(keyword){

            this.items = comJsonData.filter(item=>{
                return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
            })

        }
    }

}
</script>

<style>

</style>
