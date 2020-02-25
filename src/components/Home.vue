<template>
  <div class="home">
    <h1>{{this.headlines.home}}</h1>

    <div class="text-container">
      <p>{{this.paragraphs.introduction1}}</p>
      <p>{{this.paragraphs.introduction2}}</p>
    </div>

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

    <div class="background"></div>
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
  color: #fff;
}

.text-container {
  // background: rgba(0,0,0,1);
  // padding: 20px;
  width: 620px;
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

.background {
  // background-color: #000;
  background-image: url("../assets/images/background.jpg");
  position: fixed;
  background-size: cover;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -100;
  // border: 2px solid red;
}

</style>
