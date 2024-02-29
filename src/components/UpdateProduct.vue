<template>
    <!-- Button trigger modal -->
    <button type="button" class="btn modalButton" data-bs-toggle="modal" data-bs-target="#updateProductModal">
      Update Products
    </button>
  
    <!-- Modal -->
    <div class="modal fade" id="updateProductModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Update Products</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="updateProduct">
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
                <button type="submit" class="btn btn-success" data-bs-dismiss="modal">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UpdateProduct',
    data() {
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
    },
    methods: {
      updateProduct() {
        this.$store.dispatch('updateProduct', {id: this.payload.prodID, data: this.payload});
        window.location.reload()
      }
    }
  }
  </script>
  
  <style scoped>

  </style>