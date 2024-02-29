<template>
  <div class="home d-flex justify-content-center">
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://iili.io/JGt3TW7.md.jpg" class="d-lg-inline-block" alt="carousel image">
      <img src="https://iili.io/JGt3hga.md.jpg" class="d-lg-inline-block" alt="carousel image">
      <img src="https://iili.io/JGt3tXS.md.jpg"  class="d-lg-inline-block" alt="carousel image">
    </div>
    <div class="carousel-item">
      <img src="https://iili.io/JGtFJ7j.md.jpg" class="d-lg-inline-block" alt="carousel image">
      <img src="https://iili.io/JGtFBB1.md.jpg" class="d-lg-inline-block" alt="carousel image">
      <img src="https://iili.io/JGtFIkv.md.jpg" class="d-lg-inline-block" alt="carousel image">
    </div>
    <div class="carousel-item">
      <img src="https://iili.io/JGt38XI.md.jpg" class="d-lg-inline-block" alt="carousel image">
      <img src="https://iili.io/JGtF5QI.md.jpg" class="d-lg-inline-block" alt="carousel image">
      <img src="https://iili.io/JGtFaEX.jpg" class="d-lg-inline-block" alt="carousel image">
    </div>
  </div>
</div>
  </div>
<!-- end of carousel -->
<!-- content begins -->
<div class="aboutSum">
  <p class="shortDesc">From delicate lace to sumptuous silk, our collection boasts a stunning array of styles and designs to suit every taste and occasion. Experience the perfect blend of comfort and allure with our carefully curated selection of lingerie crafted from the finest materials.
  Whether it's a special night or just a moment for yourself, ignite the flames of passion with lingerie that speaks to your desires.
  Celebrate your femininity with pieces that accentuate your curves and make you feel absolutely irresistible.</p>
</div>
  <div class="buttons">
    <button class="btn"><a href="/products">Get shopping</a></button>
    <button class="btn"><a href="/about">Read more about us</a></button>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {

  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cookie&family=Palanquin:wght@100;200;300;400;500;600;700&display=swap');
body {
  font-family: "Palanquin", sans-serif;
}
.home {
  margin: 20px 0px;
}
.buttons {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
}
a {
  text-decoration: none;
  color: inherit;
}
.btn {
  border-radius: 30px;
  color: #000;
  padding: 10px;
  margin: 10px;
  background-color: #4e96d3;
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
  margin: 10px;
}
.shortDesc {
  color: black;
  padding-top: 50px;
  padding-left: 100px;
  padding-right: 100px;
  font-size: large;
}
@media(max-width:351px){
  .shortDesc {
    padding: 20px;
    text-align: center;
  }
}
</style>