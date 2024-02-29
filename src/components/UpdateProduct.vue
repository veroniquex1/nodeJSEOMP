<template>
    <!-- Button trigger modal -->
    <button type="button" class="btn modalButton" data-bs-toggle="modal" data-bs-target="#updateProductModal">
      Update Product
    </button>
  
    <!-- Modal -->
    <div class="modal fade" id="updateProductModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Update Details</h1>
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
                <input type="text" class="form-control w-50 mx-auto" placeholder="Product Image" v-model="payload.prodImage">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" placeholder="Product Description" v-model="payload.prodDesc">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" placeholder="Product Price" v-model="payload.prodPrice">
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
          prodImage: '',
          prodDesc: '',
          prodPrice: ''
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