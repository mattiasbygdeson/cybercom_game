<template>
  <div>
    <h2>{{this.headlines.userForm}}</h2>
    <span class="sidenote">{{this.paragraphs.userFormNote}}</span>

    <nav class="bottom-right">
      <ul>
        <router-link to="/instructions">
          <button class="button-secondary">{{this.paragraphs.buttonAbort}}</button>
        </router-link>
        <router-link to="/game">
          <button class="button-primary" :disabled="disabled" @click="submitForm">{{this.paragraphs.buttonStartGame}}</button>
        </router-link>
      </ul>
    </nav>

    <form @change="checkFormCompletion">
      <label for="name">{{this.paragraphs.userFormName}}</label>
      <input id="name" type="text" v-model="name">

      <label for="company">{{this.paragraphs.userFormCompany}}</label>
      <input id="company" type="text" v-model="education">

      <label for="email">{{this.paragraphs.userFormPhone}}</label>
      <input id="email" type="text" v-model="email">

      <div>
        <input id="privacy-agreement" type="checkbox" v-model="checkbox">
        <label for="privacy-agreement" class="gdrp-agreement">
          {{this.paragraphs.userFormAgreement}}
          <span>(<a class="gdpr-link" href="https://www.cybercom.com/Legal-notice/Privacy-policy/">{{this.paragraphs.readMore}}</a>)</span>
        </label>
      </div>
    </form>

    <div class="background-image"></div>
  </div>
</template>

<script>
export default {
  name: 'UserForm',
  props: {
    headlines: Object,
    paragraphs: Object,
  },
  data() {
    return {
      name: "",
      education: "",
      email: "",
      checkbox: false,
      disabled: true,
    }
  },
  methods: {
    checkFormCompletion() {
      var name = this.name;
      var email = this.email;
      var checkbox = this.checkbox;

      if(name && email && checkbox) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },
    submitForm() {
      const current_player = {
        name: this.name,
        education: this.education,
        email: this.email,
      };

      this.$emit('submit-form', current_player);
    }
  }
}
</script>

<style lang="scss" scoped>
input[type="text"], input[type="number"] {
  display: block;
  height: 50px;
  width: 60%;
  border-radius: 3px;
  border: 1px solid #707070;
  background: #fff;
  margin-bottom: 15px;
  padding: 0px 20px;
  font-size: 1.5em;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  margin-bottom: 0;
}

input[type="checkbox"] {
  position: relative;
  top: 15px;
  min-width: 40px !important;
  min-height: 40px !important;
  margin: 0;
  margin-right: 10px;
  background: white;
}

label {
  margin-bottom: 20px;
  font-size: 1.3em;
}

.sidenote {
  font-size: 1em;
  margin-bottom: 20px;
  display: block;
}

.disabled {
  background-color: #707070;
  opacity: 0.7;
}

h2 {
  margin-bottom: 10px;
}

.gdrp-agreement {
  font-size: 1em;
}

.gdpr-link {
  margin: 0;
}

</style>
