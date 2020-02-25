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
        <p>{{this.paragraphs.instructions2}}</p>
      </section>

      <section class="point-description grid-item-2">
        <div class="column">
          <p><span class="badge positive">+50 p</span> {{this.paragraphs.instructions3}}</p>
          <p><span class="badge positive">+50 p</span> {{this.paragraphs.instructions4}}</p>
        </div>

        <div class="column">
          <p><span class="badge negative">-200 p</span> {{this.paragraphs.instructions5}}</p>
          <p><span class="badge negative">-200 p</span> {{this.paragraphs.instructions6}}</p>
        </div>
      </section>

      <section class="grid-item-3">
        <img src="../assets/images/instructions.png" alt="Different logotypes">
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

img {
  max-width: 90%;
  position: relative;
  top: -20px;
}

.point-description {
  font-size: 0.8em;
  display: grid;
  grid-template-columns: 50% 50%;

  p {
    font-weight: bold;
    font-style: italic;
    margin-bottom: 10px;
  }
  
  .badge {
    text-align: center;
    font-style: initial;
    display: inline-block;
    border-radius: 3px;
    padding: 6px 15px;
    color: white;

    &.positive {
      background: #389c68;
    }

    &.negative {
      background: #d14658;
    }
  }
}
</style>
