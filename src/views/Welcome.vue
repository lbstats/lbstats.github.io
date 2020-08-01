<template>
  <div class="welcome"
       >
    <WelcomeBanner/>
    <UploadData/>
    <Footer/>
  </div>
</template>

<script>
  import WelcomeBanner from "../components/WelcomeBanner";
  import UploadData from "../components/UploadData";
  import Footer from "../components/Footer";

  export default {
    components: {Footer, UploadData, WelcomeBanner},
  }
</script>

<style>
  .welcome {
    background-color: #14181C;
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;

    justify-content: center;
    align-content: space-between;
    flex-direction: column;

  }
</style>
