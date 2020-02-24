<template>
  <div class="forest-background">
    <h2>{{this.headlines.guide}}</h2>

    <nav class="bottom-right">
      <ul>
        <router-link to="/instructions">
          <button class="button-secondary">{{this.paragraphs.buttonAbort}}</button>
        </router-link>
        <router-link to="/userform">
          <button class="button-primary">{{this.paragraphs.buttonNext}}</button>
        </router-link>
      </ul>
    </nav>

    <!-- <p>{{this.paragraphs.guide1}}</p> -->

    <div class="wrapper">
      <div class="column">
        <img src="../assets/images/sample1.png" />

        <div class="text-container">
          <h2>{{this.paragraphs.guideTitle1}}</h2>
          <!-- <p>{{this.paragraphs.guideDescription1}}</p> -->
        </div>
      </div>

      <div class="column">
        <img src="../assets/images/sample2.png" />

        <div class="text-container">
          <h2>{{this.paragraphs.guideTitle2}}</h2>
          <!-- <p>{{this.paragraphs.guideDescription2}}</p> -->
        </div>
        
      </div>

      <div class="column">
        <img src="../assets/images/sample3.png" />
        
        <div class="text-container">
          <h2>{{this.paragraphs.guideTitle3}}</h2>
          <!-- <p>{{this.paragraphs.guideDescription3}}</p> -->
        </div>
      </div>
    </div>

    <div class="background-image"></div>
  </div>
</template>

<script>
export default {
  name: 'Guide',
  props: {
    headlines: Object,
    paragraphs: Object
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-column-gap: 20px;
}

.text-container {
  text-align: left;
  padding: 3%;

  h2 {
    margin: 0;
    margin-bottom: 8px;
    font-size: 1.3em;
  }

  p {
    padding-top: 8px;
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    font-size: 0.9em;
  }
}

.text-container:nth-of-type(2) {
  border: 2px solid red;
}

.column {
  text-align: center;
}

.column:nth-last-of-type(2) {
  position: relative;
  left: 20px;
}
</style>
