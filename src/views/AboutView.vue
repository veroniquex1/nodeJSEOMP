<template>
  <div class="container p-3">
    <h1 id="heading">WHO WE ARE</h1>
    <div class="row">
      <div class="img-col">
        <img src="https://iili.io/JYdoiFf.md.jpg" alt="image" class="center aboutImg" align-items="center">
      </div>
      <div class="text-col">
        <h3 id="heading">BLUEFEMME X AAKEEFAH JONES</h3>
        <p class="lead">
          <span>"</span>
          My passion for lingerie lies in the understanding that it is a form of art that allows me to explore and embrace
          the diverse facets of my identity, fostering a deep sense of empowerment and self-love. It's a personal,
          intimate ritual that brings me joy, beauty, and a profound connection with myself, allowing me to express my
          individuality in a way that transcends the ordinary.
          <span>"</span>
        </p>
      </div>
    </div>
    <div id="row">
      <div class="text-col">
        <h3 id="heading">BLUEFEMME X VERONIQUE NAPPIE</h3>
        <p class="lead">
          <span>"</span>
          Lingerie is a reflection of my belief in the transformative power of self-expression and intimate self-care. To
          me, it is more than just a set of garments; it's a medium through which I communicate my innermost feelings,
          embracing sensuality and celebrating the uniqueness of my body. It's not merely about the fabrics, colors, or
          styles; rather, it's about my personal journey of discovering and appreciating my own femininity.
          <span>"</span>
        </p>
      </div>
      <div class="img-col">
        <img src="https://iili.io/JMl4BPR.md.jpg" alt="image" class="center aboutImg" align-items="center">
      </div>
    </div>
  </div>
  <!-- end of team members -->
  <div class="aboutCont container-fluid">
    <h2 id="heading" class="container">BLUEFEMME</h2>
    <div class="text-col">
      <p id="aboutus">
        Bluefemme – where empowerment meets elegance, and confidence intertwines with comfort. We believe that lingerie is
        more than just a garment, it's the thing closest to your skin; it's an expression of self-love, confidence, and
        empowerment. Our mission is to redefine the lingerie experience, creating a space where women can embrace their
        unique beauty and feel empowered from the inside out. Bluefemme is femininity and how you define it. With an
        unwavering focus on quality, comfort, and inclusivity, we're creating a new era in lingerie.
      </p>
    </div>
    <div>
      <p id="aboutus">
        Indulge in the luxury of exquisite lingerie that celebrates your unique beauty and empowers your confidence.
        BlueFemme offers more than just lingerie; we offer a transformative experience.
      </p>
    </div>

  </div>
  <div class="aboutCont1">
    <h2 class="container" id="heading">OUR MISSION IN SUSTAINABILITY</h2>
    <div class="text-col">
      <p id="aboutus">
        At Bluefemme, we are deeply committed to not only enhancing the confidence and empowerment of women but also to
        nurturing the planet we all call home. As part of our dedication to sustainability, we've implemented a unique
        initiative that goes beyond the realm of lingerie fashion. </p>
    </div>
    <div class="text-col">
      <p id="aboutus">For every order placed with Bluefemme, we pledge to plant
        a tree. This eco-conscious endeavor aims to offset our carbon footprint and contribute to reforestation efforts.
        We
        believe that beauty extends beyond the garments we create; it encompasses the world we live in. By planting a tree
        with each purchase, we're fostering a greener, more sustainable future, where every piece of lingerie carries the
        essence of environmental responsibility.
      </p>
    </div>
    <div class="text-col">
      <p>Join us in making a positive impact, one order at a time, as we strive to
        empower both women and the planet through conscious and meaningful choices.
      </p>
    </div>
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
  padding: 5px;
  border-bottom: solid 1px rgb(193, 181, 181);

}

p {
  font-size: 18px;
}

.lead {
  margin: 0;
  text-align: center;
}

.p-3 {
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
  background-color: rgb(180, 218, 241);
}

.aboutCont1 {
  padding: 20px 100px;
  text-align: center;
}


/* media query */
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
}</style>