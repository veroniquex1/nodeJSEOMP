<template>
    <div>
<!-- USERS TABLE -->
<br><h2>Users Table</h2><br>
<addUser/>
    <div class="container table-responsive">
      <table class="table">
      <thead class="table-dark">
        <tr>
          <th>User ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>User Age</th>
          <th>Gender</th>
          <th>User Role</th>
          <th>Email Address</th>
          <th>User Profile</th>
          <th>
            Action
          </th>
        </tr>
      </thead>
    <tbody v-if="users">
  <tr v-for="user in users" :key="user.userID">

      <td>{{ user.userID }}</td>
      <td>{{ user.firstName }}</td>
      <td>{{ user.lastName }}</td>
      <td>{{ user.userAge }}</td>
      <td>{{ user.Gender }}</td>
      <td>{{ user.userRole }}</td>
      <td>{{ user.emailAdd }}</td>
      <td>{{ user.userProfile }}</td>
      <td class="d-flex justify-content-between">
        <updateUser :user="user" />
        <button class="btn btn-success deleteButton" @click="event => deleteUser(user.userID)">Delete</button>
      </td>
    </tr>
  </tbody>
  </table>
  </div>
<!-- PRODUCTS TABLE -->
<br><h2>Products Table</h2><br>
<addProduct/>
    <div class="container table-responsive">
      <table class="table">
      <thead class="table-dark">
        <tr>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Product URL</th>
          <th>Product Description</th>
          <th>
              Action
          </th>
      </tr>
  </thead>
    <tbody v-if="products">
      <tr v-for="product in products" :key="product.prodID">
          <td>{{ product.prodID }}</td>
          <td>{{ product.prodName }}</td>
          <td>{{ product.quantity }}</td>
          <td>R {{ product.amount }}</td>
          <td>{{ product.Category }}</td>
          <td>{{ product.prodURL }}</td>
          <td>{{ product.prodDesc }}</td>
          <td class="d-flex justify-content-between">
              <updateProduct :product="product" />
              <button class="btn btn-success deleteButton" @click="event => deleteProduct(product.prodID)">Delete</button>
          </td>
      </tr>
    </tbody>
  </table>
  </div>
  </div>
</template>

<script>
import updateUser from '@/components/UpdateUserModal.vue';
import updateProduct from '@/components/UpdateProduct.vue';
import addProduct from '@/components/AddProduct.vue';
import addUser from '@/components/AddUser.vue';

    export default {
      components: {
        updateUser,
        updateProduct,
        addProduct,
        addUser,
      },
      computed: {
        products(){
          return this.$store.state.products
      },
        users(){
          return this.$store.state.users
        }
      },
      mounted() {
      this.$store.dispatch('fetchProducts'),
      this.$store.dispatch('fetchUsers')
  }, 
  methods: {
    deleteUser(userID) {
      this.$store.dispatch('deleteUser', {id: userID});
    },
    deleteProduct(prodID) {
      this.$store.dispatch('deleteProduct', {id: prodID});
    },
    updateUser(user) {
      let editUser = {userID: user.userID, firstName: user.firstName, lastName: user.lastName, userAge: user.userAge, Gender: user.Gender, userRole: user.userRole, emailAdd: user.emailAdd, userPass: user.userPass, userProfile: user.userProfile}
    this.$store.dispatch('updateUser', {id: user.userID, data: editUser})
    },
    updateProduct(product) {
      let editProduct = {productID: product.prodID, productName: product.prodName, quantity: product.quantity, amount: product.amount, Category: product.Category, prodURL: product.prodURL, prodDesc: product.prodDesc}
    this.$store.dispatch('updateProduct', {id: product.prodID, data: editProduct})
  }}
}
</script>

<style scoped>
td {
  padding: 10px;
}
@media(max-width:351px){
  td {
    padding: 20px;
  }
}
/* .btn {
  border-radius: 30px;
  color: #fff;
  background-color: #4E96D3;
  font-size: 12px;
  border: none;
  cursor: pointer;
  transition: .4s;
}
.btn:hover{
  background-color: #1d3557;
  color: #fff;
  transition: 1s;
} */
</style>