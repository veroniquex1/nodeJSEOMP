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
  <tr :key="user.userID">
      <td>{{ user }}</td>
      <td>{{ user }}</td>
      <td>{{ user }}</td>
      <td>{{ user }}</td>
      <td>{{ user }}</td>
      <td>{{ user }}</td>
      <td>{{ user }}</td>
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
          <td>{{ product.prodImage }}</td>
          <td>{{ product.prodDescription }}</td>
          <td>R {{ product.prodPrice }}</td>
          <td class="d-flex justify-content-between">
              <updateProduct :product="product"/>
              <button class="btn btn-success deleteButton"
                  @click="event => deleteProduct(product.prodID)">Delete</button>
          </td>
      </tr>
    </tbody>
  </table>
  </div>
  </div>
</template>

<script>
    export default {
        
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
</style>