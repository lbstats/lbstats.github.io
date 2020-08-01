<template>
  <div class="welcome-banner">
    <img alt="Vue logo" class="logo" src="../assets/lbstats.png">
    <div class="subtitle"> visualize Letterboxd stats</div>
  </div>
</template>

<script>

  export default {
    name: 'WelcomeBanner'
  }
</script>

<style scoped>
  .subtitle {
    font-size: 1.5rem;
  }

  .welcome-banner {
    padding: 20px;
  }

  .logo {
    width: 15rem;
  }
</style>
