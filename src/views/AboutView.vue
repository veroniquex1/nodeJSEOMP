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
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ullam illo accusantium accusamus itaque nisi culpa adipisci quidem. Quae, assumenda. Omnis ducimus quis reiciendis odio, voluptas eius temporibus harum eligendi.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque illum quae, similique maiores quisquam recusandae tempore autem dolor, sed unde harum. Exercitationem nesciunt maxime tenetur eligendi totam aliquam quod veniam.</p>

  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, excepturi non? Repellendus placeat fugiat dolore in perspiciatis ipsa quos suscipit cupiditate ut, ratione nesciunt enim adipisci sint at incidunt hic.
  Sunt alias in maxime quis quaerat rerum suscipit, amet nisi nesciunt sit perspiciatis fugiat omnis tempore laboriosam, modi quasi impedit sint eos nemo pariatur quibusdam mollitia. Voluptate sapiente iusto facilis?
  Suscipit, nemo voluptates eum, quibusdam inventore quo, doloremque dolores explicabo quia expedita voluptatem in quasi vero quod? Eum minima debitis, quibusdam similique sunt totam, nihil libero ipsum vero repellat magnam.</p>
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
}
</style>