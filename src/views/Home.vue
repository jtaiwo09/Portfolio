<template>
    <div class="scroll-up-btn" :class="toggleScrollUpBtn" @click="handleScroll">
        <i class="fas fa-angle-up"></i>
    </div>
    <Navigation />
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
  <About />
  <Skills />
  <section class="works" id="works">
      <div class="container">
          <h2 class="title">My Works</h2>
          <div class="carousel owl-carousel">
            <Works :project='project' v-for="(project, index) in projects" :key='index'/>
          </div>
          <!-- <h2>Like to see more of my project? <router-link to="#">Click here</router-link></h2> -->
      </div>
  </section>
</template>

<script>
import Navigation from '../components/Navigation.vue';
import About from '../components/About.vue';
import Skills from '../components/Skills.vue';
import Works from '../components/Works.vue';
export default {
  name: "home",
  components: {Navigation, About, Skills, Works},
  data(){
    return {
      scrollPos: 0,
      showScrollUpBtn: null,
    }
  },
  created(){
    window.addEventListener('scroll', this.checkScroll);
  },
  computed: {
    projects (){
        return this.$store.state.projects
    },
    toggleScrollUpBtn() {
      return this.showScrollUpBtn ? 'scroll-up-btn-show' : ''
    }
},
  methods: {
    checkScroll(){
      this.scrollPos = window.scrollY;
    },
    handleScroll(){
      window.scrollTo({top: 0, behaviour: 'smooth'})
    }
  },
  watch: {
    scrollPos(newValue){
      if(newValue > 500){
        this.showScrollUpBtn = true;
        return;
      } else {
        this.showScrollUpBtn = false;
        return;
      }
    }
  }
};
</script>

<style lang="scss">
//scroll-up-btn
.scroll-up-btn {
  position: fixed;
  height: 45px;
  width: 42px;
  background: crimson;
  right: 30px;
  bottom: 10px;
  text-align: center;
  line-height: 45px;
  color: #fff;
  z-index: 500;
  font-size: 30px;
  border-radius: 6px;
  cursor: pointer;
  pointer-events: none;
  transition: all 0.3s ease;
  opacity: 0;
}

.scroll-up-btn-show {
  opacity: 1;
  pointer-events: auto;
  bottom: 30px;
}

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
    .button {
      font-size: 25px;
      padding: 12px 36px;
    }
    .text-1 {
      font-size: 27px;
      margin-bottom: 4px;
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

//Skill section
.skills {
  .title {
    &::after {
      content: 'what i know'
    }
  }
  .content {
    display: flex;
    align-items: center;
    gap: 30px;

    .left, .right {
      flex: 50%;
    }
    .left {
      .text {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 10px;
      }
      p {
        text-align: justify;
      }
      .button {
        font-size: 18px;
        padding: 8px 16px;
      }
    }
    .right {
      .bars {
        margin-bottom: 15px;
      }
      .info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 5px;
      }
      span {
        font-weight: 500;
        font-size: 18px;
      }
      .line {
        width: 100%;
        height: 5px;
        background-color: lightgrey;
        position: relative;

        &::before {
          content: '';
          position: absolute;
          height: 100%;
          left: 0;
          top: 0;
          background: crimson;
        }
      }
      .html::before {
        width: 90%;
      }
      .css::before {
        width: 70%;
      }
      .js::before {
        width: 80%;
      }
      .php::before {
        width: 50%;
      }
      .mysql::before {
        width: 60%;
      }
    }
  }
}

//Work Sections
.works {
  .title {
    &::after {
      content: 'My projects';
    }
  }
  .carousel {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;

    .cards, .info {
      flex: 1;
    }

    .cards {
      background: #222;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.5s ease;
      max-height: 250px;
      max-width: 250px;
      display: flex;
      flex-direction: column;

      &:hover {
        background: crimson;
        transform: scale(1.04) rotateZ(-3deg);
        box-shadow: 4px 6px -1px rgba(0, 0, 0, 0.30) 2px 4px -1px rgba(0, 0, 0, 0.16);

        img {
          border-color: #fff;
        }
      }
      img, .info { flex: 50%}

      img {
        z-index: 1;
        height: 100;
        width: 100%;
        min-height: 120px;
        border-radius: 8px 8px 0 0;
        object-fit: cover;
        border: 5px solid crimson;
      }

      .info {
        height: 100%;
        display: flex;
        flex-direction: column;
        z-index: 3;
        padding: 10px 16px;
        color: #fff;

        h4 {
          padding-bottom: 6px;
          font-size: 20px;
          font-weight: 400;
        }
        .description {
          white-space: nowrap;
          font-size: 14px;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .link {
          margin-top: auto;
          font-weight: 500;
          padding-bottom: 4px;
          color: #fff;
          font-size: 12px;
        }
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
      .button {
          font-size: 23px;
          padding: 10px 30px;
      }
    }
    .container {
        max-width: 800px;
    }
  }
}


@media (max-width: 780px) {
  section {
    padding-top: 40px;
  }
  .content {
    flex-direction: column;
  }
  .skills {
    .title {
          margin-bottom: 40px;
        }
    .content {
      gap: 0;
      .left {
        margin-bottom: 60px;
        
      }
      .right {
        width: 100%;
        .bars {
          width: 100%
        }
      }
    }
  }
}

@media (max-width: 690px) {
  .home {
      .home-content {
        .text-2 { font-size: 60px;}
        .text-3 { font-size: 32px;}
        .button {
          font-size: 20px;
        }
      }
    }
}

@media (max-width: 500px) {
  .container {
    padding: 0 30px;
  }
  .home {
      .home-content {
        
        padding-left: 10px;
        .text-2 { font-size: 50px;}
        .text-3 { font-size: 27px;}
      }
    }
    .about {
      .content {
        .left {
          img {
          height: 300px;
          width: 300px;
        }
        }
      }
    }
}

@media (max-width: 435px) {
  .home {
      .home-content {
        .text-1 { font-size: 20px}
        .text-2 { font-size: 43px;}
        .text-3 { font-size: 23px;}
        .button {
          font-size: 23px;
          padding: 8px 25px;
        }
      }
    }
    .about {
      .content {
        .left {
          img {
          height: 200px;
          width: 200px;
        }
        }
      }
    }
}
</style>
