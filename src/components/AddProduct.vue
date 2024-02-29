<template>
  <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Product</button>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addProduct">
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" placeholder="Product ID" v-model="payload.prodID">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" placeholder="Product Name" v-model="payload.prodName">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" placeholder="Product Quantity" v-model="payload.quantity">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" placeholder="Product Amount" v-model="payload.amount">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" placeholder="Product Category" v-model="payload.category">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" placeholder="Product URL" v-model="payload.prodURL">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" placeholder="Product Desc" v-model="payload.prodDesc">
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-success" data-bs-dismiss="modal">Add Product</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </template>
    
<script>
  export default {
      name:
        'addProduct',
      data(){
        return {
          payload: {
            prodID: '',
            prodName: '',
            quantity: '',
            amount: '',
            Category: '',
            prodURL: '',
            prodDesc: ''
        }
      }
    }, methods: {
      addProduct() {
      this.$store.dispatch('addProduct', this.payload)
    }
  } 
}
    </script>
    
    <style scoped>
    
    </style>