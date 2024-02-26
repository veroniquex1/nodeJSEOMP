<template>
    <div class="container">
        <div class="row">
            <h1>Products</h1>
        </div>
        <div class="card-deck">
          <div class="card">
          <img class="card-img-top" src="" alt="product image">
          <div class="card-body">
            <h5 class="card-title">Product Name</h5>
            <p class="card-text">R100</p>
        <a class="btn" target="_blank"><i class="bi bi-cursor-fill">Read More</i></a>
          </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {

    }
}

</script>

<style scoped>
.btn {
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
  padding: 10px;
  font-size: small;
}
.card-deck {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  margin: auto;
  padding: 10px;
}
.card{
    margin: 20px auto;
    height: auto;
    border-radius: 15px;
}
.card:hover {
  border: none;
  box-shadow: 10px 5px 15px 0px #4E96D3;
}
.card-img-top {
  height: 160px;
  width: 18rem;
  display: flex;
  margin: auto;
}
</style>