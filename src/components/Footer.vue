<template>
  <div class="container">
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

.footer {
  padding-top: 10px;
  bottom: 0;
  display: flex;
  justify-content: center;
}
</style>