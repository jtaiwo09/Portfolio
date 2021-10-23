import { createStore } from "vuex";

export default createStore({
  state: {
    projects: [
      {
        id: 1,
        image: 'beachResort.png',
        link: ' https://beach-resort007.netlify.app'
      },
      {
        id: 2,
        image: 'alan.png',
        link: 'https://ai-news-application.netlify.app'
      },
      {
        id: 3,
        image: 'portfolio.png',
        link: 'https://jtaiwo.netlify.app'
      },
      {
        id: 4,
        image: 'chat.png',
        link: 'https://socialapp-53957.web.app',
      },
      {
        id: 5,
        image: 'ecommerce.png',
        link: 'https://clone-435ec.web.app'
      },
      {
        id: 6,
        image: 'vca.png',
        link: 'https://vca-jtk.netlify.app'
      },
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
});
