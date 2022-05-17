<template>
  <section class="works" id="works">
    <div class="container">
      <h2 class="title">Projects</h2>
      <div class="content">
        <div class="cards">
          <div class="card" v-for="(project, i) in projects" :key="i">
            <div class="browser">
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
            <a :href="project.link" target="_blank">
              <img class="card-image" :src="project.image" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "works",
  data() {
    return {
      showIndex: null,
      disabled: null,
    };
  },
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
};
</script>

<style lang="scss">
.works {
  .container {
    .title {
      &::after {
        content: "what i've done";
      }
    }
    .cards {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 20px;

      .card {
        max-height: 300px;
        max-width: 350px;
        margin-bottom: 50px;
        border-radius: 10px 10px 0 0;
        border: 2px solid rgb(243, 242, 242);
        overflow: hidden;
        position: relative;

        .browser {
          height: 20px;
          width: 100%;
          display: flex;
          align-items: center;
          background-color: gray;
          position: sticky;
          z-index: 2;

          .circle {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: #fff;
            margin: 3px;
          }
        }

        &:hover {
          img {
            transform: translateY(-100%);
          }
        }

        img {
          width: 100%;
          object-fit: cover;
          transition: all 10s ease;
        }
      }
    }
  }
}
</style>
