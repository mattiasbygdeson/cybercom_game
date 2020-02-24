<template>
  <div>
    <h2>{{this.headlines.score}}</h2>

    <nav class="bottom-right">
      <router-link to="/">
        <button class="button-secondary">{{this.paragraphs.buttonAbort}}</button>
      </router-link>
    </nav>

    <table>
      <tr>
        <th>{{this.paragraphs.userFormName}}</th>
        <th>{{this.paragraphs.userFormCompany}}</th>
        <th>{{this.paragraphs.score}}</th>
      </tr>
    
      <tr v-for="user in scoreboard" :key="user.id">
        <td>{{user.name}}</td>
        <td>{{user.education}}</td>
        <td>{{user.score}}</td>
      </tr>
    </table>

    <div v-if="loading" class="loading-spinner"></div>
  </div>
</template>

<script>
import { getScoreList } from "../api.js";

export default {
  name: 'Score',
  data() {
    return {
      scoreboard: [],
      loading: true,
    }
  },
  props: {
    headlines: Object,
    paragraphs: Object,
  },
  created() {
    this.requestScoreList();
  },
  methods: {
    async requestScoreList() {
      let res = await getScoreList();
      this.loading = false;
      res = res.sort(this.compare);
      res = res.slice(0,8);

      this.scoreboard = res;
    },
    compare(a, b) {
      const scoreA = a.score;
      const scoreB = b.score;

      let comparison = 0;

      if (scoreA > scoreB) {
        comparison = 1;
      } else if (scoreA < scoreB) {
        comparison = -1;
      }
      return comparison * -1;
    }
  }
}
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  border-spacing: 0;

  th, td {
    text-align: left;
  }

  td {
    font-size: 1.15em;
    padding: 15px 0 5px 0;
    border-bottom: 1px solid #707070;
  }

  th:nth-of-type(3), td:nth-of-type(3) {
    width: 7%;
  }
}

.loading-spinner {
  width: 100px;
  height: 100px;
  margin: auto;
  margin-top: 10vh;

  background-image: url("../assets/images/spinner.svg");
  background-size: 100%;
  background-repeat: no-repeat;
}

</style>
