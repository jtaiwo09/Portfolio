<template>
    <div class="scroll-up-btn" :class="toggleScrollUpBtn" @click="handleScroll">
        <i class="fas fa-angle-up"></i>
    </div>
    <Navigation />
  <section class="home" id="home">
    <div class="container">
      <div class="home-content">
        <div class="text-1">Hi, my name is</div>
        <div class="text-2">Taiwo Joseph</div>
        <div class="text-3">And I'm a 
          <span class="typed-text">{{ typeValue}}</span>
          <span class="cursor" :class="{'typing': typeStatus }">&nbsp;</span>
        </div>
        <router-link class="button" to="#">Hire me</router-link>
      </div>
    </div>
  </section>
  <About />
  <Skills />
  <section class="works" id="works">
      <div class="container">
        <vueper-slides
        autoplay
        class="no-shadow"
      :visible-slides='3'
      slide multiple
      :gap='3'
      :slide-ratio='1 / 4'
      :dragging-distance='200'>
        <vueper-slide v-for="(project, i) in projects" :key="i"/>
        <template v-slot:content>
          Hello World
        </template>
      </vueper-slides>
      </div>
  </section>
</template>

<script>
// import { VueperSlides, VueperSlide } from 'vueperslides'
// import 'vueperslides/dist/vueperslides.css'
import Navigation from '../components/Navigation.vue';
import About from '../components/About.vue';
import Skills from '../components/Skills.vue';
// import Works from '../components/Works.vue';
import mixin from '../mixins/mixin';
export default {
  name: "home",
  components: {Navigation, About, Skills},
  data(){
    return {
      scrollPos: 0,
      showScrollUpBtn: null,
    }
  },
  mixins: [mixin],
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
    },
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
.typicalWrapper::after {
  content: "|";
  animation: blink 1s infinite step-start;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}


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
    margin: 50px 0 auto 0px;
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

      .typed-text {
        color: crimson;
        font-weight: 500;
      }
      .cursor {
        display: inline-block;
        margin-left: 3px;
        width: 4px;
        background-color: #fff;
        animation: cursorBlink 1s infinite;

        &.typing {
          animation: none;
        }
      }
    }
  }
}

@keyframes cursorBlink {
  49% { background-color: #fff; }
  50% { background-color: transparent; }
  99% { background-color: transparent; }
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
    padding-top: 100px;
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
        .text-3 { font-size: 20px;}
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
