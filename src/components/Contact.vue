<template>
  <section class="contact" id="contact">
        <div class="container">
            <h2 class="title">Contact me</h2>
            <div class="content" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <div class="right">
                    <form @submit.prevent="sendEmail">
                        <div class="field">
                            <input type="text" placeholder="Name" name="name" v-model="name" required>
                        </div>
                        <div class="field">
                            <input type="email" placeholder="Email" name="email" v-model="email" required>
                        </div>
                        <div class="field">
                            <input type="text" placeholder="Subject" name="subject" v-model="subject" required>
                        </div>
                        <div class="textarea">
                            <textarea v-model="message" name="message" required></textarea>
                        </div>
                        <div class="btn">
                            <button type="submit">Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import emailjs from 'emailjs-com';
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'

export default {
name: 'contact',
data(){
    return {
        name: '',
        email: '',
        subject: '',
        message: '',
        errors: '',
    }
},
methods: {
    sendEmail(e) {
      emailjs.sendForm('service_5mvmk79', 'template_u4cs6j9', e.target, 'user_k4aESwB4eZ5t902ZlAVe8', {
          message: this.message,
          name: this.name,
          subject: this.subject,
          email: this.email,
      })
        .then(() => {
            createToast({
                title: 'Message sent successfully',
                description: 'Thanks for reaching out.'
            }, {
                position: 'top-right',
                type: 'success',
                transition: 'bounce',
                showIcon: 'true',
                hideProgressBar: 'true',
                timeout: 5000
            })
        })
        .catch(err => console.log(err))
        this.message = '';
        this.name = '';
        this.subject = '';
        this.email = '';
    }
}
}
</script>

<style lang="scss" scoped>
.contact {
    margin-bottom: 40px;
    .title {
        &::after {
            content: 'get in touch';
        }
    }
    .content {
        background: lightgray;
        padding: 30px 15px;
        
        .right {
            max-width: 500px;
            margin: auto;
        }
        .right {
            form {
                .textarea {
                    height: 100px;
                    width: 100%;

                    textarea {
                        height: 100%;
                        width: 100%;
                        border: 1px solid lightgrey;
                        border-radius: 6px;
                        outline: none;
                        padding: 5px 10px;
                        font-size: 15px;
                        font-family: "Poppins", sans-serif;
                        margin-bottom: 10px;
                        resize: none;
                    }
                }
                .field {
                    margin-bottom: 10px;
                    input {
                        height: 100%;
                        width: 100%;
                        border: 1px solid lightgrey;
                        border-radius: 6px;
                        outline: none;
                        padding: 8px 10px;
                        font-size: 15px;
                        font-family: "Poppins", sans-serif;
                    }
                }

                button {
                    font-size: 15px;
                    font-weight: 500;
                    background: crimson;
                    color: #fff;
                    padding: 10px 16px;
                    border-radius: 8px;
                    border: none;
                    margin-top: 10px;
                    &:focus {
                        outline: none;
                    }
                }
            }
        }
    }
}
</style>