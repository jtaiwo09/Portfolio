<template>
    <div class="app-wrapper">
    <div class="app">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Ubuntu:wght@400;500;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}

html {
  scroll-behavior: smooth;
}

.app {
  // display: flex;
  // flex-direction: column;
  // min-height: 100vh;
}

.container {
  max-width: 1300px;
  padding: 0 80px;
  margin: 0 auto;
}

section {
  padding-top: 80px;

  .title {
    text-align: center;
    position: relative;
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 60px;
    padding-bottom: 20px;
    font-family: 'Ubuntu', sans-serif;

    &::before {
    content: '';
    position: absolute;
    width: 180px;
    height: 3px;
    background: #111;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
    &::after {
    position: absolute;
    background: #fff;
    color: crimson;
    bottom: -12px;
    left: 50%;
    padding: 5px;
    font-size: 20px;
    transform: translateX(-50%);
  }
  }
}

.font-family {
  font-family: 'Poppins', sans-serif;
}

.button {
  display: inline-block;
  background: crimson;
  color: #fff;
  font-weight: 500;
  margin-top: 20px;
  border-radius: 6px;
  border: 2px solid crimson;
  transition: all 0.3s ease;

  &:hover {
    background: transparent;
    color: crimson;
  }
}

</style>
