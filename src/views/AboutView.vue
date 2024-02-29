<template>
  <div class="container p-3">
    <h1 id="heading">meet the team</h1>
    <div class="row">
      <div class="img-col">
        <img src="https://iili.io/JYdoiFf.md.jpg" alt="image" class="center aboutImg" align-items="center">
      </div>
      <div class="text-col">
        <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus recusandae praesentium vero fuga optio vitae explicabo, maiores aspernatur cumque dicta, nobis dignissimos accusamus deserunt pariatur veritatis blanditiis, necessitatibus animi reiciendis.</p>
      </div>
    </div>
    <div id="row">
      <div class="text-col" id="text-col">
        <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus recusandae praesentium vero fuga optio vitae explicabo, maiores aspernatur cumque dicta, nobis dignissimos accusamus deserunt pariatur veritatis blanditiis, necessitatibus animi reiciendis.</p>
      </div>
      <div class="img-col">
      <img src="https://iili.io/JYdoiFf.md.jpg" alt="image" class="center aboutImg" align-items="center">
    </div>
  </div>
  </div>
  <!-- end of team members -->
<div class="aboutCont">
  <h2 id="heading">about us</h2>
  <p>Indulge in the luxury of exquisite lingerie that celebrates your unique beauty and empowers your confidence. At BlueFemme, we offer more than just lingerie; we offer a transformative experience.</p>
  <p>From delicate lace to sumptuous silk, our collection boasts a stunning array of styles and designs to suit every taste and occasion. Experience the perfect blend of comfort and allure with our carefully curated selection of lingerie crafted from the finest materials.
  Whether it's a special night or just a moment for yourself, ignite the flames of passion with lingerie that speaks to your desires.
  Celebrate your femininity with pieces that accentuate your curves and make you feel absolutely irresistible.</p>
</div>
</template>

<script>
export default {
  name: 'AboutView',
  components: {

  }
}

</script>

<style scoped>
#heading {
  text-align: center;
}
p {
  font-size: 18px;
}
.lead {
  margin: 0;
  text-align: center;
}
.p-3{
  margin-left: 100px;
  margin-right: 100px;
}
.aboutImg {
  width: 300px;
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 15px;
  margin-left: auto;
  margin-right: auto;
}
.row {
  display: flex;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  margin-top: 0;
  margin-bottom: 25px;
}
#row {
  display: flex;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;

}
.text-col {
  flex-basis: 60%;
}
#text-col {
  text-align: center;
}
.img-col {
  flex-basis: 40%;
  margin: 0 auto 20 auto;
  height: max-content;
}
.center {
  width: 250px;
}
.aboutCont {
  padding: 20px 100px;
  text-align: center;
}
@media (max-width: 351px) {
  .text-col {
    width: 250px;
    margin: auto;
  }
  .aboutImg {
    margin: 0;
    padding-bottom: 20px;
    width: 200px;
  }
  .lead {
    width: 210px;
    margin-left: auto;
    margin-right: auto;
  }
  .p-3 {
    margin: 0;
  }
  .aboutCont {
    padding: 20px;
  }
}
</style>