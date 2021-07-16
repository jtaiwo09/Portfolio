<template>
  <section class="works" id="works">
          <div class="container">
            <h2 class="title">Projects</h2>
            <div class="content">
              <div class="cards">
                <div class="card"  data-aos="fade-up" data-aos-duration="2000" v-for="(project, i) in projects" :key="i" @mouseover=" showIndex = i" @mouseout=" showIndex = null">
                  <img :src="require(`@/assets/images/${project.image}`)" alt="">
                  <div :class="showOverlay(i)">
                    <div class="hover-content">
                      <h2>{{project.title}}</h2>
                      <p>{{project.description}}</p>
                      <div class="action-btn">
                        <button class="button" @click="visitLink(project.link)">Visit Site</button>
                        <button class="button" :disabled="disabled" @click="visitLink(project.github)">Github</button>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            </div>
          </div>
  </section>
</template>

<script>
export default {
name: 'works',
data(){
  return {
    showIndex: null,
    disabled: null,
  }
},
computed: {
  projects(){
    return this.$store.state.projects;
  }
},
methods: {
  visitLink(url){
    if(url != ""){
      this.disabled = false;
      window.open(url);
      return;
    } else {
      this.disabled = true;
      return;
    }
  },
  showOverlay(i){
    if(this.showIndex == i){
      return 'overlay-show';
    } else {
      return 'overlay';
    }
  }
}

}
</script>

<style lang="scss">
.overlay-show {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100%;
          width: 100%;
          background: #000;
          border-radius: 8px;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          transition: all 0.3s ease-in;
          opacity: 1;

          .hover-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0 15px;
            text-align: center;
            top: 20px;

            h2 {
              font-size: 18px;
              font-weight: 600;
              margin-bottom: 10px;
            }
            p {
              margin-bottom: 10px;
              font-size: 14px;
            }
            .action-btn {
              display: flex;
              gap: 20px;

              .button {
                padding: 8px 12px;
                text-transform: uppercase;
                font-size: 12px;
                cursor: pointer;

                &:hover{
                  background: crimson;
                  color: #fff;
                }
              }
            }
          }
        }

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

      .card{
        max-height: 300px;
        max-width: 250px;
        background: #fff;
        margin-bottom: 50px;
        display: flex;
        flex-direction: column;
        border-radius: 8px;
        transition: all 0.5s ease;
        box-shadow: 2px 4px 8px rgba(0,0,0,0.3);
        position: relative;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px;
        }

        .overlay {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          height: 0;
          width: 100%;
          background: #000;
          border-radius: 8px;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          transition: all 0.3s ease-in;
          opacity: 0;

          .hover-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0 15px;
            text-align: center;
            top: 20px;

            h2 {
              font-size: 18px;
              font-weight: 600;
              margin-bottom: 10px;
            }
            p {
              margin-bottom: 10px;
              font-size: 14px;
            }
            .action-btn {
              display: flex;
              gap: 20px;

              .button {
                padding: 8px 12px;
                text-transform: uppercase;
                font-size: 12px;
                cursor: pointer;

                &:hover{
                  background: crimson;
                  color: #fff;
                }
              }
            }
          }
        }
        
        &:hover {
          box-shadow: 8px 14px 12px rgba(0,0,0,0.6);
        }
      }
    }
  }
}
</style>