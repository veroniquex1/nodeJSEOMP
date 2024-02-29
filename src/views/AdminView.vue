<template>
  <div class="container">
      <div class="row">
          <h2 class="display-4">Users</h2>
      </div>
      <AddUser :user="user" />
      <div class="row">
          <table>
              <thead>
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
                      <td>{{ user }}</td>
                      <td>{{ user }}</td>
                      <td>{{ user }}</td>
                      <td>{{ user }}</td>
                      <td>{{ user }}</td>
                      <td>{{ user }}</td>
                      <td>{{ user }}</td>
                      <td class="d-flex justify-content-between">
                          <updateUser :user="user" />
                          <button class="btn btn-success deleteButton"
                              @click="event => deleteUser(user.userID)">Delete</button>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
      <div class="row">
          <h2 class="display-4">Products</h2>
      </div>
      <AddProduct />
      <div class="row">
          <table>
              <thead>
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
                      <td>
                          {{ product.prodID }}
                      </td>
                      <td>
                          {{ product.prodName }}
                      </td>
                      <td>
                          {{ product.prodImage }}
                      </td>
                      <td>
                          {{ product.prodDescription }}
                      </td>
                      <td>
                          R {{ product.prodPrice }}
                      </td>
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
import addUser from '../components/AddUser.vue';
import addProduct from '../components/AddProduct.vue'
import updateUser from '../components/UpdateUserModal.vue'
import updateProduct from '../components/UpdateProduct.vue'
export default {
  components: {
      addUser,
      addProduct,
      updateUser,
      updateProduct
  },
  computed: {
      users() {
          return this.$store.state.users
      },
      products() {
          return this.$store.state.products
      },

  },
  mounted() {
      this.$store.dispatch('fetchUsers')
      this.$store.dispatch('fetchProducts')

  },
  methods: {
      deleteUser(userID) {
          this.$store.dispatch('deleteUser', { id: userID });
      },
      deleteProduct(prodID) {
          this.$store.dispatch('deleteProduct', { id: prodID });
      },
      updateUser(user) {
          let editUser = {
              userID: user.userID,
              firstName: user.firstName,
              lastName: user.lastName,
              userRole: user.userRole,
              gender: user.gender,
              userAge: user.userAge
          }
          this.$store.dispatch('updateUser', {
            id: user.userID,
            data: editUser
          });
      },
      updateProduct(product) {
          let editProduct = {
              prodID: product.prodID,
              prodName: product.prodName,
              prodImg: product.prodImage,
              prodDesc: product.prodDescription,
              prodPrice: product.prodPrice
          }
          this.$store.dispatch('updateUser', {
            id: product.userID,
            data: editProduct
          });
      }
  }
}
</script>

<style scoped>

</style>