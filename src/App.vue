<template>
  <div id="app">
  <template>
  <v-bottom-navigation v-model="value">
    <v-btn value="Home" @click="gotoHome()">
      <span>Home</span>
      <v-icon>mdi mdi-home-heart</v-icon>
    </v-btn>

    <v-btn value="Profile" @click="gotoProfile()">
      <span>Profile</span>
      <v-icon>mdi mdi-face-woman-profile</v-icon>
    </v-btn>

    <v-btn value="Project" @click="gotoProject()">
      <span>Project</span>
      <v-icon>mdi mdi-book-education</v-icon>
    </v-btn>



  </v-bottom-navigation>
  </template>

    <router-view />
  </div>
</template>

<script>
export default {
   name: 'App',

   data: () => ({
      //
   }),
  methods: {
    gotoHome() {
    if(this.$router.push !== '/'){
      this.$router.push('/')
    };
    },
    gotoProfile(){
      if(this.$router.push !== '/Profile'){
        this.$router.push('/Profile')
      };
    },
    gotoProject(){
      if(this.$router.push !== '/Project'){
        this.$router.push('/Project')
      };
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.router-link-exact-active {
  color: blue;
}
</style>