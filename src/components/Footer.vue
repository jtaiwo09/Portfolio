<template>
  <footer>
      <div class="container">
          <div class="left">
                  <ul>
                      <li>
                          <a href="https://github.com/jtaiwo09 ">
                              <i class="fa fa-github" aria-hidden="true"></i>
                          </a>
                      </li>
                      <li>
                          <a href="https://www.linkedin.com/in/joseph-taiwo-55214b7b/">
                              <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                          </a>
                      </li>
                      <li>
                          <a href="https://www.instagram.com/taiwojoseph65/?hl=en">
                              <i class="fa fa-instagram" aria-hidden="true"></i>
                          </a>
                      </li>
                  </ul>
          </div>
          <div class="right">
              <p>Copyright {{new Date().getFullYear() }} All Rights Reserved</p>
          </div>
      </div>
  </footer>
</template>

<script>
export default {
name: 'footer-vue',
}
</script>

<style lang="scss">
footer {
    background: crimson;
    padding: 25px 20px;

    .container {
        display: flex;
        justify-content: space-between;

        .left {
            i {
                font-size: 25px;
                color: white;
            }

            ul {
                gap: 16px;
                list-style: none;
                display: flex;
            }

        }
        .right { 
            p {
            color: #fff;
            font-size: 12px;
        }
        }
    }
}

@media (max-width: 600px) {
    footer {
        padding: 10px 0;
        margin-top: 20px;
        .container {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 10px;
        }
    }
}
</style>