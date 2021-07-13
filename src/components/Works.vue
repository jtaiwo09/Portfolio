<template>
  <div class="cards">
      <div class="card" v-for="(project, i) in projects" :key="i">
            <img :src="require(`@/assets/images/${project.image}`)" alt="">
    <div :class="{'overlay': taiwo}">
      <h2>{{project.title}}</h2>
    </div>
    </div>
  </div>
</template>

<script>
export default {
name: 'works',
data(){
  return {
    taiwo: true
  }
},
computed: {
  projects(){
    return this.$store.state.projects;
  }
}

}
</script>

<style lang="scss">



.works {
  .container {
    .cards {
      display: flex;
      justify-content: center;
      max-width: 80%;
      margin: auto;
      flex-wrap: wrap;
      gap: 20px;

      .card{
        max-height: 300px;
        max-width: 250px;
        background: #fff;
        margin-bottom: 50px;
        display: flex;
        flex-direction: column;
        cursor: pointer;
        border-radius: 8px;
        transition: all 0.5s ease;
        box-shadow: 2px 4px 8px rgba(0,0,0,0.3);
        position: relative;

        img, .text {
          flex: 1;
        }
        img {
          width: 100%;
          object-fit: cover;
          min-height: 200px;
          border-radius: 8px 8px 0 0;
        }
        .text {
          padding: 32px 16px;
          height: 100%;
          display: flex;
          flex-direction: column;

          p {
            margin-top: auto;
          }
        }
        .overlay {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100%;
          width: 100%;
          background: #000;
          opacity: 0;
          border-radius: 8px;
          color: #fff;

          h2 {
            
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            position: absolute;
          }

          &:hover {
            opacity: 0.8;
          }
}
      }
    }
  }
}
</style>