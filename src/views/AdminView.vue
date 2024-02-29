<template>
    <div>
<!-- USERS TABLE -->
  <br><h2>Users Table</h2><br>
    <div class="container">
      <table class="table">
      <thead class="table-dark">
        <tr>
          <th>User ID</th>
          <th>First name</th>
          <th>Last name</th>
          <th>User age</th>
          <th>Gender</th>
          <th>Email address</th>
          <th>User role</th>
          <th>
            Action
          </th>
        </tr>
      </thead>
    <tbody v-if="users">
  <tr v-for="user in users" :key="user.userID">
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
        <button class="btn btn-success deleteButton" @click="event => deleteUser(user.userID)">Delete</button>
      </td>
    </tr>
  </tbody>
  </table>
  </div>
<!-- PRODUCTS TABLE -->
<br><h2>Products Table</h2><br>
    <div class="container">
      <table class="table">
      <thead class="table-dark">
        <tr>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Product Image</th>
          <th>Product Description</th>
          <th>Product Price</th>
          <th>
              Action
          </th>
      </tr>
  </thead>
    <tbody v-if="products">
      <tr v-for="product in products" :key="product.prodID">
          <td>{{ product.prodID }}</td>
          <td>{{ product.prodName }}</td>
          <td>{{ product.prodURL }}</td>
          <td>{{ product.prodDesc }}</td>
          <td>R {{ product.amount }}</td>
          <td class="d-flex justify-content-between">
              <updateProduct :product="product"/>
              <button class="btn btn-success deleteButton" @click="event => deleteProduct(product.prodID)">Delete</button>
              <button class="btn btn-success deleteButton" @click="event => deleteProduct(product.prodID)">Delete</button>
          </td>
      </tr>
    </tbody>
  </table>
  </div>
  </div>
</template>

<script>
    export default {
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
  }
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