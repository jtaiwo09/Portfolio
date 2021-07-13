<template>
  <section class="contact" id="contact">
        <div class="container">
            <h2 class="title">Contact me</h2>
            <div class="content">
                <div class="left">
                    <div class="text">Get in Touch</div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur facilis vel alias a odio suscipit quod omnis quidem et non?</p>
                    <div class="icons">
                        <div class="row">
                            <i class="fas fa-user"></i>
                            <div class="info">
                                <div class="head">Name</div>
                                <div class="sub-title">Taiwo Joseph</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="info">
                                <div class="head">Address</div>
                                <div class="sub-title">Pipeline Bustop, Idimu Lagos.</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-envelope"></i>
                            <div class="info">
                                <div class="head">Email</div>
                                <div class="sub-title">taiwokelvin@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="text">Message me</div>
                    <form action="#">
                        <div class="fields">
                            <div class="field name">
                                <input type="text" placeholder="Name">
                            </div>
                            <div class="field email">
                                <input type="email" placeholder="Email">
                            </div>
                        </div>
                        <div class="field">
                            <input type="text" placeholder="Subject">
                        </div>
                        <div class="textarea">
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div class="button">
                            <button type="submit">Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.contact {
    .title {
        &::after {
            content: 'get in touch';
        }
    }
    .content {
        display: flex;
        column-gap: 20px;

        .left, .right {
            flex: 1;
        }

        .text {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 10px;
        }
        .left {
            p {
                text-align: justify;
            }
            .icons {
                margin: 10px 0;
            }
        }
        .row {
            display: flex;
            height: 65px;
            align-items: center;

            i {
                font-size: 25px;
                color: crimson;
            }

            .info {
                margin-left: 25px;

                .head {
                    font-weight: 500;;
                }
                .sub-title {
                    color: #333;
                }
            }
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
                        padding: 0 15px;
                        font-size: 17px;
                        font-family: "Poppins", sans-serif;
                        margin-bottom: 10px;
                        resize: none;
                    }
                }
                .fields {
                    display: flex;

                    .field {
                        height: 45px;
                        width: 100%;
                        margin-bottom: 15px;
                    }
                }
                .field {
                    height: 45px;
                    width: 100%;
                    margin-bottom: 15px;
                }
                .name {
                    margin-right: 10px;
                }
                .email {
                    margin-left: 10px;
                }
                .field {
                    input {
                        height: 100%;
                        width: 100%;
                        border: 1px solid lightgrey;
                        border-radius: 6px;
                        outline: none;
                        padding: 0 15px;
                        font-size: 17px;
                        font-family: "Poppins", sans-serif;
                    }
                }
                .button {
                    button {
                        width: 100%;
                        height: 100%;
                        border: 2px solid crimson;
                        background: crimson;
                        color: #fff;
                        padding: 5px 12px;
                        border-radius: 6px;
                        font-size: 20px;
                        font-weight: 500;
                        cursor: pointer;
                        transition: all 0.3 ease;
                    }
                }
            }
        }
    }
}
</style>