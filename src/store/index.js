import { createStore } from "vuex";

export default createStore({
  state: {
    projects: [
      {
        id: 1,
        title: 'Invoice App',
        description: "An Invoice application for keeping customers' records built with Vue.js",
        image: 'invoice.jpeg',
        link: 'https://quick-invoice.netlify.app',
        github: 'https://github.com/jtaiwo09/Invoice-App'
      },
      {
        id: 2,
        title: 'Beach Resort',
        description: ' A platform that allows leasing of rooms for rent built with react.js',
        image: 'beachResort.jpeg',
        link: ' https://beach-resort007.netlify.app',
        github: 'https://github.com/jtaiwo09/beachResortProject'
      },
      {
        id: 3,
        title: 'Alan News App',
        description: "A voice control web application that has an Ai integrated on it which allows one to read news from any source",
        image: 'alan.jpeg',
        link: 'https://ai-news-application.netlify.app',
        github: 'https://github.com/jtaiwo09/Alan-ai-news-application'
      },
      {
        id: 4,
        title: 'Social Net',
        description: "A fully functioning social web application built with react.js",
        image: 'chat.jpeg',
        link: ' https://socialapp-53957.web.app',
        github: ""
      },
      {
        id: 5,
        title: 'FireBlogs',
        description: 'A web app where you access to all programming related videos built with vue.js',
        image: 'tech-edu.jpeg',
        link: 'https:tech-edu.netlify.app',
        github: "https://github.com/jtaiwo09/FireBlogs"
      },
      {
        id: 6,
        title: 'e-Commerce Web App',
        description: 'A clone of Amazon Website, builth with react.js',
        image: 'ecommerce.jpeg',
        link: ' https://clone-435ec.web.app',
        github: ''
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
});
