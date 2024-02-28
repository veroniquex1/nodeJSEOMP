<template>
  <div class="container">
    <div class="col row links">
      <div class="col">
        <h2 class="h6" js-footer="toggle">About Us:</h2>
        <ul js-footer="menu">
          <li>
            <a href="/about">Meet the team</a>
          </li>
          <li>
            <a href="/about">Benefits</a>
          </li>
          <li>
            <a href="/contact">Where we are located</a>
          </li>
          <li>
            <a href="/contact">Work With Us</a>
          </li>
        </ul>
      </div>
      <div class="col">
        <h2 class="h6" js-footer="toggle">Contact Aakeefah:</h2>
        <ul js-footer="menu">
          <li>
            <i class="bi bi-whatsapp"> +27 79 866 6734</i>
          </li>
          <li>
            <i class="bi bi-instagram"><a href="https://www.instagram.com/_aakeefahjones_/" target="_blank"> _aakeefahjones_</a></i><br>
          </li>
          <li>
            <i class="bi bi-github"><a href="https://github.com/keeefles" target="_blank"> @keeefles</a></i><br>
          </li>
        </ul>
      </div>
      <div class="col">
        <h2 class="h6" js-footer="toggle">Contact Veronique:</h2>
        <ul js-footer="menu">
          <li>
            <i class="bi bi-whatsapp"> +27 65 944 7142</i>
          </li>
          <li>
            <i class="bi bi-instagram"><a href="https://www.instagram.com/_vdrossouw" target="_blank"> _vdrossouw</a></i>
          </li>
          <li>
            <i class="bi bi-github"><a href="https://github.com/veroniquex1" target="_blank"> @veroniquex1</a></i>
          </li>
        </ul>
      </div>
    </div>
      <div class="row">
          <p class="footer">BLUE<span class="femme">femme</span> &copy; <span>{{ currYear }}</span></p>
      </div>
  </div>
</template>

<script>
  export default {
      name: 'FooterComp',
      data() {
          return {
              currYear: new Date().getFullYear()
          }
      }
  }
</script>

<style scoped>
li {
  text-decoration: none;
  display: list-item;
}
.col {
  display: flex;
  justify-content: center;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}.container {
  margin-top: 20px;
}
.footer {
  padding-top: 10px;
  bottom: 0;
  display: flex;
  justify-content: center;
}
.container {
  font-size: small;
}
@media(max-width:349px) {
  ul {
    padding-left: 30px;
    padding-right: 30px;
    text-align: center;
  }
  h2 {
    text-align: center;
    padding-top: 15px;
  }
}
</style>