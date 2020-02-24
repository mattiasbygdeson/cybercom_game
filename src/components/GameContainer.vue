<template>
  <div class="game-wrapper" v-scroll-lock="true">
    <div :key="retry" class="boards-container">
      <Tech
        v-for="tech in techs" 
        :key="tech.id" 
        :tech="tech" 
        v-on:add-point="addPoint" 
        v-on:remove-point="removePoint"
      />
    </div>
    
    <div v-if="gameover" class="score-container">
      <div class="score">
        <p class="name">{{current_player.name}}</p>
        <h1>{{this.paragraphs.youGot}} {{this.score}} {{this.paragraphs.score.toLowerCase()}}</h1>

        <div class="summary">
          <div>
            <p class="success">{{this.goodboards}} {{this.paragraphs.result1}}</p>
            <p class="success">{{5 - this.defectboards}} {{this.paragraphs.result2}}</p>

            <p class="failure">{{15 - this.goodboards}} {{this.paragraphs.result3}}</p>
            <p class="failure">{{this.defectboards}} {{this.paragraphs.result4}}</p>
          </div>

          <div>
            <p class="success">+ {{this.goodboards * 50}}p</p>
            <p class="success">+ {{(5 - this.defectboards) * 50}}p</p>

            <p class="failure">- {{(15 - this.goodboards) * 200}}p</p>
            <p class="failure">- {{this.defectboards * 200}}p</p>
          </div>  
        </div>

        <nav>
          <router-link to="/game">
            <button class="button-primary" @click="restart">{{this.paragraphs.buttonTryAgain}}</button>
          </router-link>
          <router-link to="/">
            <button class="button-secondary">{{this.paragraphs.buttonAbort}}</button>
          </router-link>
        </nav>
      </div>
    </div>

    <div v-if="!gameover" class="bottom-bar">
      <p class="bottom-right">{{this.timer}}</p>
      <div :key="retry" class="progress-bar"></div>
    </div>
  </div>
</template>

<script>
import Tech from "./Tech";
import { techs } from "../techs.js";
import { setScore } from "../api.js";

export default {
  name: 'GameContainer',
  props: {
    paragraphs: Object,
    current_player: Object
  },
  components: {
    Tech,
  },
  data() {
    return {
      techs: techs,
      score: 0,
      gameover: false,
      timer: 45,
      goodboards: 15,
      defectboards: 5,
      retry: 0,
    }
  },
  created() {
    this.shuffle(this.techs);
    this.countdown();
    setTimeout(this.endGame, this.timer * 1000);
  },
  methods: {
    shuffle(array) {
      var ctr = array.length, temp, index;

      while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = array[ctr];
        array[ctr] = array[index];
        array[index] = temp;
      }

      this.techs = array;
    },
    countdown() {
      if(this.timer > 0) {
        setTimeout(() => {
            this.timer -= 1
            this.countdown()
        }, 1000)
      }
    },
    addPoint() {
      this.score += 50;
      this.defectboards --;
    },
    removePoint() {
      this.score -= 100;
      this.goodboards --;
    },
    async endGame() {
      this.gameover = true;

      //eslint-disable-next-line no-console
      console.log("Calculating score");

      // Calculate points
      var positivePoints = (this.goodboards * 50) + ((5 - this.defectboards) * 50);
      var negativePoints = ((15 - this.goodboards) * 200) + (this.defectboards * 200);
      this.score = positivePoints - negativePoints;

      //eslint-disable-next-line no-console
      console.log("after: " + this.score);

      // Set score to zero if result was negative
      if(this.score < 0) {
        this.score = 0;
      }

      // Save result to database
      const name = this.current_player.name;
      const education = this.current_player.education;
      const email = this.current_player.email;
      const score = this.score;
      
      await setScore(name, education, email, score);
    },
    restart() {
      this.retry++;

      this.score = 0;
      this.gameover = false;
      this.timer = 45;
      this.goodboards = 15;
      this.defectboards = 5;

      // this.shuffle(this.woodboards);
      this.countdown();
      setTimeout(this.endGame, this.timer * 1000);
    }
  }
}
</script>

<style lang="scss" scoped>

@keyframes move {
  from { left: -400 * 20px; }
  to { left: 100vw }
}

@keyframes decrease {
  from { width: 100%; }
  to {width: 0%; }
}

.boards-container {
  position: relative;
  width: 400 * 21px;
  left: -400 * 15px;
  margin-top: 200px;

  // background-image: url("../assets/images/beltbg2.jpg");

  animation-name: move;
  animation-duration: 45s;
  animation-timing-function: linear;
}

.bottom-bar {
  min-width: 50px;
  min-height: 200px;
  background-size: cover;
  // border-top: 10px solid #2c3137;
  // background: linear-gradient(139deg, rgba(165,168,169,1) 0%, rgba(125,127,127,1) 100%);

  p {
    color: #015599;
    font-size: 3em;
    padding-top: 10px;
    bottom: 25px;
  }

  .progress-bar {
    width: 100%;
    height: 10px;
    background: #015599;
    position: fixed;
    bottom: 0;

    animation-name: decrease;
    animation-duration: 45s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }
}

.game-wrapper {
  // background-image: url("../assets/images/beltbg2.jpg");
  background: radial-gradient(circle, rgba(238,242,245,1) 0%, rgba(185,192,204,1) 100%);
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 100vh;
}

.score-container {
  position: fixed;
  top: 0px;
  width: 100%;
  height: 100vh;
  background: white;
  // background-image: url("../assets/images/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  .score {
    padding-top: 50px;
    padding-bottom: 70px;
    border: 1px solid #707070;
    width: 650px;
    text-align: center;
    margin: auto;
    margin-top: 20vh;
    background: white;
    border-radius: 3px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);

    h1 {
      font-size: 2em;
      margin: 0;
      margin-bottom: 35px;
    }

    p {
      margin-bottom: 5px;
    }

    .name {
      font-size: 1.5em;
    }

    button {
      margin-top: 50px;
    }

    nav {
      position: relative;
    }

    a, button, li {
      margin: 10px;
      margin-top: 50px;
    }
  }

  .summary {
    margin-top: 40px;
    font-size: 0.95em;
    text-align: left;
    padding: 0 10%;
    display: grid;
    grid-template-columns: 80% auto;

    div:nth-of-type(2) {
      text-align: right;
    }
  }

  .success {
    color: #389c68;
  }

  .failure {
    color: #ed2f32;
  }
}

</style>
