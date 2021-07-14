<template>
  <footer>
      <div class="container">
          <div class="left">
                  <ul>
                      <li>
                          <a href="#">
                              <i class="fa fa-github" aria-hidden="true"></i>
                          </a>
                      </li>
                      <li>
                          <a href="#">
                              <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                          </a>
                      </li>
                      <li>
                          <a href="#">
                             <i class="fa fa-twitter" aria-hidden="true"></i>
                          </a>
                      </li>
                      <li>
                          <a href="#">
                              <i class="fa fa-instagram" aria-hidden="true"></i>
                          </a>
                      </li>
                  </ul>
          </div>
          <div class="right">
              <p>Copyright 2021 All Rights Reserved</p>
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
    padding: 30px 25px;

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
        }
        }
    }
}

@media (max-width: 600px) {
    footer {
        padding: 20px 0;
        .container {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 10px;
        }
    }
}
</style>