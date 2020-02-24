<template>
  <div>
    <h2>{{this.headlines.instructions}}</h2>

    <nav class="bottom-right">
      <router-link to="/">
        <button class="button-secondary">{{this.paragraphs.buttonAbort}}</button>
      </router-link>
      <router-link to="/userform">
        <button class="button-primary">{{this.paragraphs.buttonNext}}</button>
      </router-link>
    </nav>

    <div class="wrapper">
      <section class="grid-item-1">
        <p>{{this.paragraphs.instructions1}}</p>
      </section>

      <section class="point-description grid-item-2">
        <div class="column">
          <p><span class="badge positive">+20 p</span> {{this.paragraphs.instructions3}}</p>
          <p><span class="badge positive">+16 p</span> {{this.paragraphs.instructions4}}</p>
        </div>

        <div class="column">
          <p><span class="badge negative">-16 p</span> {{this.paragraphs.instructions5}}</p>
          <p><span class="badge negative">-80 p</span> {{this.paragraphs.instructions6}}</p>
        </div>
      </section>

      <section class="grid-item-3">
        <p>Image</p>
      </section>
    </div>

    <div class="background-image"></div>
  </div>
</template>

<script>
export default {
  name: 'Instructions',
  props: {
    headlines: Object,
    paragraphs: Object
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: auto 30%;
  grid-template-areas: 
    "intro image"
    "score image"
}

.grid-item-1 {
  grid-area: intro;
}

.grid-item-2 {
  grid-area: score;
}

.grid-item-3 {
  grid-area: image;
}

section {
  border: 1px solid red;
}

.point-description {
  // border-top: 1px solid rgba(0, 0, 0, 0.3);
  // margin-top: 40px;
  // font-size: 0.8em;
  display: grid;
  padding-top: 40px;
  grid-template-columns: 50% 50%;

  p {
    // font-weight: bold;
    // font-style: italic;
    // margin-bottom: 10px;
  }
  
  .badge {
    width: 80px;
    text-align: center;
    font-style: initial;
    display: inline-block;
    border-radius: 3px;
    padding: 6px 15px;
    color: white;
    margin-right: 5px;

    &.positive {
      background: #389c68;
    }

    &.negative {
      background: #d14658;
    }
  }
}
</style>
