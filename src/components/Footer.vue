<template>
  <div class="footer">
    <div>
      We do not upload your data anywhere. It stays in this browser session.
    </div>
    <div>
    Get <a target="_blank"
               href="https://github.com/lbstats/letterboxd-stats"
  > source code</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>
  .footer {
    padding: 20px;
    color: white;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }

  a {
    color: white;
  }

  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }


</style>
