<template>
  <section class="skills" id="skills">
        <div class="container">
            <h2 class="title">My skills</h2>
            <div class="content">
                <div class="left">
                    <div class="text">My Creative skills & experiences</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iusto, reprehenderit repellat ad aut animi debitis, nostrum excepturi rerum dolore praesentium, voluptatibus amet consequatur. Vitae assumenda esse eos inventore aspernatur rerum, tempore minima soluta quidem hic, veritatis accusamus labore quam quia? Porro corporis laudantium fugiat illo, quos sunt perspiciatis assumenda in, voluptatibus suscipit repellat nemo, itaque temporibus earum! Nulla, quae.</p>
                    <a class='button' href="#">Read more</a>
                </div>
                <div class="right">
                    <div class="bars">
                        <div class="info">
                            <span>HTML</span>
                            <span>90%</span>
                        </div>
                        <div class="line html"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>CSS</span>
                            <span>70%</span>
                        </div>
                        <div class="line css"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>JavaScript</span>
                            <span>80%</span>
                        </div>
                        <div class="line js"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>PHP</span>
                            <span>60%</span>
                    </div>
                    <div class="line php"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>MySQL</span>
                            <span>50%</span>
                        </div>
                        <div class="line mysql"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
export default {
name: 'skills',
}
</script>

<style lang="scss">
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

</style>