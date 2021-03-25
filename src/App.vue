<template>
  <div id="app">
    <router-view/>
    <div id="nav">
      <div class="abottom">
      <!-- <router-link to="/experts">Experts</router-link>
      <router-link to="/info">Info</router-link>
      <router-link to="/">Home</router-link> |
      <router-link to="/contacts">Contacts</router-link>
      <router-link to="/mine">Mine</router-link> -->
      </div>

    </div>
    
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family:PingFangSC;
  text-align: center;
  color: #2c3e50;

}

#nav {
  padding: 30px;
}


#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.abottom{
  position: fixed;
  left: 18%;
  bottom: 0;
}
</style>
