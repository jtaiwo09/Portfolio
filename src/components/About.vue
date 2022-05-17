<template>
  <!-- about section -->
  <section class="about" id="about">
    <div class="container">
      <h2 class="title">About me</h2>
      <div class="content">
        <div class="left">
          <div class="image-bg" data-aos="fade-right" data-aos-duration="1000">
            <img
              src="https://res.cloudinary.com/citi-tasker/image/upload/v1652806109/profile_hdqnbw.png"
              alt=""
              data-aos="fade-up"
              data-aos-duration="1000"
            />
          </div>
        </div>
        <div class="right" data-aos="slide-up" data-aos-duration="1000">
          <p>
            I’m a Front-End Web Developer based in Lagos, Nigeria. I am
            passionate about coding, solving problems through code, and creating
            intuitive, and dynamic user experiences.
          </p>

          <p>
            I'm a well organised person, a problem solver with high attention to
            detail. I'm Interested in the entire frontend spectrum and I am
            excited to work alongside with other amazing programmers and learn
            so much more!
          </p>
          <div class="download">
            <span>Download CV</span>
            <i class="fa fa-download" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import mixin from "../mixins/mixin";

export default {
  mixins: [mixin],
  methods: {
    download() {
      window.location.href =
        "https://drive.google.com/uc?export=download&id=1DRwCrxPmZfPxJ3CCYI4jtVMn2LWXAKal";
    },
  },
};
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
    gap: 30px;

    .left {
      flex: 45%;
      .image-bg {
        position: relative;
        background: crimson;
        border-radius: 6px;
        width: 350px;
        height: 350px;

        img {
          width: 350px;
          height: 350px;
          object-fit: cover;
          border-radius: 6px;
          position: absolute;
          top: 15px;
          left: 15px;
        }
      }
    }
    .right {
      flex: 55%;
      .text {
        font-size: 23px;
        font-weight: 600;
        margin-bottom: 8px;
        line-height: 1.1;

        span {
          color: crimson;
        }
      }
      p {
        text-align: initial;
        font-size: 18px;
        font-weight: 300;
        // word-spacing: 1px;
        line-height: 30px;
        margin-bottom: 10px;
      }
      .download {
        display: flex;
        padding: 10px 16px;
        background: crimson;
        color: #fff;
        border-radius: 8px;
        display: inline-block;
        margin-top: 20px;
        cursor: pointer;

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
