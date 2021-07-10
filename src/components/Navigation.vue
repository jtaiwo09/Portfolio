<template>
  <header>
      <div class="container">
            <div class="brand">
                <router-link to='#'>Portfo<span>lio.</span></router-link>
            </div>
            <nav class="nav-links">
                <router-link to="#" class="link">Home</router-link>
                <router-link to="#" class="link">About</router-link>
                <router-link to="#" class="link">Works</router-link>
                <router-link to="#" class="link">Skill</router-link>
            </nav>
            <div class="menu-btn">
                <i class="fas fa-bars"></i>
            </div>
        </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
header {
    width: 100%;
    padding: 30px 0;
    position: fixed;
    z-index: 99;
    font-family: 'Ubuntu', sans-serif;
    transition: all 0.3s ease;

    .container {
        display: flex;
        align-items: center;

        .brand {
            flex: 1;
            a {
                color: #fff;
                font-size: 35px;
                font-weight: 600;

                span {
                    color: crimson;
                }
            }
        }
        .nav-links {
            .link {
                color: #fff;
                font-size: 18px;
                font-weight: 500;
                margin-right: 25px;
                transition: color 0.3s ease;

                &.link:last-child {
                    margin-right: 0;
                }

                &:hover {
                    color: crimson;
                }
            }
        }
        .menu-btn {
            color: #fff;
            font-size: 23px;
            cursor: pointer;
            display: none;
        }
    }

}
</style>