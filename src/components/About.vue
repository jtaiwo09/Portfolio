<template>
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
            I'm Taiwo and I am a 
            <span class="typed-text">{{ typeValue}}</span>
            <span class="cursor" :class="{'typing': typeStatus }">&nbsp;</span>
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
          <div class='download' @click='download'>
            <span>Download CV</span>
            <i class="fa fa-download" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import {storage} from '../firebase/firebase';
import mixin from '../mixins/mixin';

export default {
  mixins: [mixin],
  methods: {
    download(){
        window.location.href = "https://drive.google.com/uc?export=download&id=0BzSnhRy7DFPNeVpWU3pvcUx5WVVoZ2VhNUFybGhSZnBScDE0";
    }
  }

}
</script>

<style lang="scss">
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
      .download {
        display: flex;
        padding: 10px 16px;
        background: crimson;
        color: #fff;
        border-radius: 8px;
        display: inline-block;
        margin-top: 10px;

        span {
          font-size: 14px;
          margin-right: 10px;
        }
        i {
          color: #fff;
        }
      }
    }
  }
}

</style>