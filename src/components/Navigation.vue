<template>
  <header :class='{"sticky" : bgHeader}'>
      <div class="container">
            <div class="brand">
                <a href='#home'>Portfo<span>lio.</span></a>
            </div>
            <nav class="nav-links" v-if="!mobile">
                <a href="#home" class="link">Home</a>
                <a href="#about" class="link">About</a>
                <a href="#works" class="link">Works</a>
                <a href="#skills" class="link">Skill</a>
            </nav>
            <div class="menu-btn" v-if="mobile && !mobileNav" @click="toggleMobileNav">
                <i class="fas fa-bars"></i>
            </div>
            <div class="menu-btn" v-if="mobile && mobileNav" @click="toggleMobileNav">
                <i class="fas fa-times"></i>
            </div>
        </div>
        <transition name="mobile-nav">
            <ul class="mobile-nav"  v-if="mobileNav" @click="toggleMobileNav">
                <a href="#home" class="link">Home</a>
                <a href="#about" class="link">About</a>
                <a href="#works" class="link">Works</a>
                <a href="#skills" class="link">Skill</a>
            </ul>
        </transition>
  </header>
</template>

<script>
export default {
name: 'navigation',
data(){
    return {
        scrollPos: 0,
        windowWidth: null,
        mobileNav: null,
        mobile: null,
        bgHeader: null,
    }
},
created(){
    this.checkScreen();
    window.addEventListener('scroll', this.checkScroll)
    window.addEventListener('resize', this.checkScreen)
},
methods: {
    checkScroll(){
        this.scrollPos = window.scrollY;  
    },
    checkScreen(){
        this.windowWidth = window.innerWidth;
        if(this.windowWidth <= 750){
            this.mobile = true;
            return;
        } else {
            this.mobile = false;
            this.mobileNav = false;
            return;
        }
    },
    toggleMobileNav(){
        this.mobileNav = !this.mobileNav;
    }
},
watch: {
    scrollPos(newValue){
        if(newValue > 20){
            this.bgHeader = true;
        } else {
            this.bgHeader = false
        }
    }
}
}
</script>

<style lang="scss" scoped>
.sticky {
    background: crimson;
    padding: 15px;

    .container{
        .brand {
            a {
                span {
                    color: #fff;
                }
            }
        }
        .nav-links {
            .link {
                &:hover {
                    color: #fff;
                }
            }
        }
    }
}
header {
    width: 100%;
    padding: 30px 0;
    position: fixed;
    z-index: 99;
    font-family: 'Ubuntu', sans-serif;
    transition: all 0.5s ease;

    .mobile-nav {
        display: flex;
        flex-direction: column;
        padding-left: 35px;
        padding-top: 25px;
        position: fixed;
        height: 100%;
        background: #111;
        left: 0;
        top: 0;
        width: 70%;
        max-width: 250px;
        box-shadow: 6px 4px -1px rgba(0, 0, 0, 0.3), 4px 2px -1px rgba(0, 0, 0, 0.16);

        .link {
            padding: 15px 0;
            display: inline block;
            color: #fff;
            font-size: 18px;
            font-weight: 500;
            transition: color 0.3s ease;

            &:hover {
                color: crimson;
            }
        }
    }

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .brand {
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
        }
    }

    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
        transition: all 1s ease;
    }

    .mobile-nav-enter-from {
        transform: translateX(-250px);
    }

    .mobile-nav-enter-to {
        transform: translateX(0);
    }
    .mobile-nav-leave-to {
        transform:translateX(-250px)
    }

}

@media (max-width: 991px) {
  header {
      .container {
        padding: 0 50px;
    }
  }
}

@media (max-width: 947px) {
    header {
        .container {
            padding: 0 50px;
            
        }
    }
}
@media (max-width: 750px) {
    header {
        .container {
            padding: 0 25px;
            
        }
    }
}
</style>