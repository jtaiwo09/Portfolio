<template>
        <div class="cards">
        <img :src="require(`../assets/images/${project.image}.png`)" alt="">
        <div class="info">
            <h4>{{project.title}}</h4>
            <div class="description">
                {{project.description}}
            </div>
            <router-link to="#" class="link">Read More...</router-link>
        </div>
    </div>
</template>

<script>
export default {
name: 'works',
components: { },
props: ['project'],
}
</script>

<style lang="scss">
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

</style>