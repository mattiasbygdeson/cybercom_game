<template>
  <div>
    <h1>{{this.headlines.home}}</h1>

    <p>{{this.paragraphs.introduction1}}</p>
    <p>{{this.paragraphs.introduction2}}</p>
    <p>{{this.paragraphs.introduction3}}</p>

    <nav>
      <ul>
        <router-link to="/instructions">
          <button class="button-primary">{{this.paragraphs.buttonContinue}}</button>
        </router-link>
        <router-link to="/score">
          <button class="button-secondary">{{this.paragraphs.buttonScore}}</button>
        </router-link>
      </ul>
    </nav>

    <router-link to="/adminscore">
      <li class="secret"></li>
    </router-link>

    <video autoplay muted loop id="myVideo" class="video-background">
      <!-- <source src="../assets/bgmovie.mp4" type="video/mp4"> -->
    </video>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    headlines: Object,
    paragraphs: Object
  }
}
</script>

<style lang="scss" scoped>
h1 {
  color: #fff;
}

p {
  width: 600px;
  color: #fff;
}

nav {
  margin-top: 70px;
}

.secret {
  border: 1px solid red;
  position: fixed;
  bottom: 0;
  left: 0;
  border-radius: 0;
  width: 100%;
  opacity: 0;

  &:hover {
    cursor: initial;
  }
}

.video-background {
  background-color: #000;
  position: fixed;
  top: -170px;
  left: -10px;
  width: 200vh;
  height: 150vh;
  z-index: -100;
}

</style>
