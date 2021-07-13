import { createStore } from "vuex";

export default createStore({
  state: {
    projects: [
      {
        id: 1,
        title: 'Beach Resort',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore commodi est similique hic tempore mollitia a, autem accusantium maiores eos.',
        image: 'beachResort.jpeg',
        link: 'https://www.fireblogspot.org'
      },
      {
        id: 2,
        title: 'Chat App',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore commodi est similique hic tempore mollitia a, autem accusantium maiores eos.',
        image: 'chat.jpeg',
        link: 'https://www.fireblogspot.org'
      },
      {
        id: 3,
        title: 'Alan New App',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore commodi est similique hic tempore mollitia a, autem accusantium maiores eos.',
        image: 'alan.jpeg',
        link: 'https://www.fireblogspot.org'
      },
      {
        id: 3,
        title: 'Facebook',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore commodi est similique hic tempore mollitia a, autem accusantium maiores eos.',
        image: 'ecommerce.jpeg',
        link: 'https://www.fireblogspot.org'
      },
      {
        id: 3,
        title: 'Twitter',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore commodi est similique hic tempore mollitia a, autem accusantium maiores eos.',
        image: 'gallery.jpeg',
        link: 'https://www.fireblogspot.org'
      },
      {
        id: 3,
        title: 'Instagram',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore commodi est similique hic tempore mollitia a, autem accusantium maiores eos.',
        image: 'profile-1.png',
        link: 'https://www.fireblogspot.org'
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
});
