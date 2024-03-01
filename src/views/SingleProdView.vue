<template>
   <div class="container">

       <div class="row" v-if="product">
        
           <Card>
               <template #card-header>
                   <h4 class="card-title">{{ product.prodName }}</h4>
               </template>
               <template #card-body>
                   <img :src="product.prodURL" :alt="product.prodName">
                   <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                       Category: {{ product.Category }}
                   </p>
                   <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                       Quantity: {{ product.quantity }}
                   </p>
                   <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                       Amount: R{{ product.amount }}
                   </p>
                   <button class="btn btn-success" @click="Purchase">Purchase now</button>
               </template>
           </Card>
       </div>
       <div class="row" v-else>
           <p class="lead">Loading</p>
       </div>
   </div>
</template>


<script>
import Card from '../components/CardComp.vue';
export default {
//    name: 'SingleProdView',
   components: {
       Card
   },
   computed:{
       product(){
           return this.$store.state.product;
       }
   },
   mounted() {
       this.$store.dispatch('fetchProduct', this.$route.params);
   },
   methods: {
    Purchase() {
        alert("Item purchased!");
    }
   }
   
}
</script>

<style scoped>
img{
   width: 200px;
}
</style>