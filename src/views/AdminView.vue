<template>
    <div>
        <br><h2>This is the admin page.</h2><br>
          <div class="container">
             <table class="table">
              <thead class="table-dark">
    <tr>
        <td>Name</td>
        <td>Product</td>
        <td>Price</td>
        <td>Description</td>
        <td>Edit</td>
        <td>Delete</td>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>product.name</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
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