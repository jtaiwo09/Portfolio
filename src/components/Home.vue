<template>
  <section class="home" id="home">
    <div class="container">
      <div class="home-content">
        <div class="text-1">Hello, my name is</div>
        <div class="text-2">Taiwo Joseph</div>
        <div class="text-3">And I'm a <span>Web Developer</span></div>
        <router-link class="button" to="#">Hire me</router-link>
      </div>
    </div>
  </section>

  <!-- about section -->
  <section class="about" id="about">
    <div class="container">
      <h2 class="title">About me</h2>
      <div class="content">
        <div class="left">
          <img src="@/assets/images/profile-1.png" alt="" />
        </div>
        <div class="right">
          <div class="text">
            I'm Taiwo and I am a <span>Web Developer</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
            aspernatur optio ex facere itaque inventore minima, quae corporis?
            Adipisci ipsam dolores ratione dignissimos fugiat corporis molestiae
            asperiores, sequi eligendi eaque dolorem id nulla odit, sapiente
            itaque veritatis, reprehenderit cupiditate dolorum nesciunt.
            Repellendus natus praesentium, quo temporibus autem cum ex maxime a
            ad. Quam qui accusamus nesciunt eligendi repellendus voluptatem nam.
          </p>
          <a class="button" href="#">Download CV</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "home",
};
</script>

<style lang="scss" scoped>
.home {
  font-family: "Ubuntu", sans-serif;
  display: flex;
  background: #000;
  height: 100vh;
  color: #fff;
  min-height: 500px;
  .container {
    margin: auto 0 auto 0px;
  }
  .home-content {
    button {
      font-size: 25px;
      padding: 12px 36px;
    }
    .text-1 {
      font-size: 27px;
    }
    .text-2 {
      font-size: 75px;
      font-weight: 600px;
      margin-left: -3px;
    }
    .text-3 {
      font-size: 40px;
      margin: 5px 0;

      span {
        color: crimson;
        font-weight: 500;
      }
    }
  }
}

// about section styling
.about {
  .title {
    &::after {
      content: "who i am";
    }
  }
  .content {
    display: flex;
    align-items: center;
    gap: 20px;

    .left {
      flex: 45%;
      img {
        width: 400px;
        height: 400px;
        object-fit: cover;
        border-radius: 6px;
      }
    }
    .right {
      flex: 55%;
      .text {
        font-size: 25px;
        font-weight: 600;
        margin-bottom: 10px;

        span {
          color: crimson;
        }
      }
      p {
        text-align: justify;
      }
      .button {
        padding: 10px 30px;
        font-size: 20px;
      }
    }
  }
}

@media (max-width: 1104px) {
  .about {
    .content {
      .left {
        img {
          height: 350px;
          width: 350px;
        }
      }
    }
  }
}

@media (max-width: 991px) {
  .container {
    padding: 0 50px;
  }
}

@media (max-width: 947px) {
  .home {
    .home-content {
      .text-2 {
        font-size: 70px;
      }
      .text-3 {
        font-size: 35px;
      }
    }
  }
}
</style>
