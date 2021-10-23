<template>
  <section class="skills" id="skills">
        <div class="container">
            <h2 class="title">My skills</h2>
            <div class="content">
                <div class="left" data-aos="slide-up" data-aos-duration="1000">
                    <div class="text">My Creative skills & experiences</div>
                    <p>My few years of IT experience has given me a strong foundation for web development and building complex solutions. I have created successful responsive web applications that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JavaScript, building small and medium web apps, and coding interactive layouts.</p>
                </div>
                <div class="right" data-aos="slide-up" data-aos-duration="1000">
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
            <div class="other-skills" data-aos="slide-up" data-aos-duration="1000">
              <h2>Other Skills</h2>
              <div class="bg">
                <div class="skills-content">
                <div class="item-container">
                  <img :src="require('../assets/Icons/sass.svg')" alt="">
                  <p>SASS</p>
                </div>
                <div class="item-container">
                  <img :src="require('../assets/Icons/vue.png')" alt="">
                  <p>Vue</p>
                </div>
                <div class="item-container">
                  <img :src="require('../assets/Icons/react.svg')" alt="">
                  <p>React</p>
                </div>
                <div class="item-container">
                  <img :src="require('../assets/Icons/git.svg')" alt="">
                  <p>Git</p>
                </div>
                <div class="item-container">
                  <img :src="require('../assets/Icons/firebase.svg')" alt="">
                  <p>Firebase</p>
                </div>
                <div class="item-container">
                  <img :src="require('../assets/Icons/jquery.svg')" alt="">
                  <p>JQuery</p>
                </div>
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
      margin-bottom: 20px;
      .text {
        font-size: 25px;
        font-weight: 600;
        margin-bottom: 10px;
        line-height: 1.3;
      }
      p {
        text-align: justify;
        line-height: 30px;
        font-weight: 300;
        font-size: 18px;
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

    .other-skills {
    margin-top: 30px;
    h2 {
      font-size: 20px;;
      font-weight: 500;
      margin-bottom: 10px;
    }

      .bg {
        padding: 20px;
        border-radius: 15px;
        background-color: rgb(167, 136, 136);

        .skills-content {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
        grid-column-gap: 50px;
        grid-row-gap: 20px;

        .item-container {
          text-align: center;
          padding: 10px;
          border-radius: 10px;
          background: #fff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: all .3 ease-in;

          &:hover {
            box-shadow: 4px 8px 8px rgba(0, 0, 0, 0.3);
          }

          img {
            width: 35px;
            height: 35px;
          }
        }
      }
      }
  }
}

@media (max-width: 780px) {
  .skills {
    .other-skills {
      .bg {
        padding: 30px;
        .skills-content {
          gap: 12px;
        }
      }
    }
  }
}

@media (max-width: 385px) {
  .skills {
    .other-skills {
      .bg {
        padding: 10px;
        .skills-content {
          gap: 12px;
          grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
        }
      }
    }
  }
}



</style>