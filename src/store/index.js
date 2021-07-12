import { createStore } from "vuex";

export default createStore({
  state: {
    projects: [
      {
        id: 1,
        title: 'FireBlog',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore commodi est similique hic tempore mollitia a, autem accusantium maiores eos.',
        image: require('@/assets/images/profile-1.png'),
        link: 'https://www.fireblogspot.org'
      },
      {
        id: 2,
        title: 'My Portfolio',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore commodi est similique hic tempore mollitia a, autem accusantium maiores eos.',
        image: require('@/assets/images/profile-1.png'),
        link: 'https://www.fireblogspot.org'
      },
      {
        id: 3,
        title: 'Chat App',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore commodi est similique hic tempore mollitia a, autem accusantium maiores eos.',
        image: require('@/assets/images/profile-1.png'),
        link: 'https://www.fireblogspot.org'
      },
      {
        id: 3,
        title: 'Facebook',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore commodi est similique hic tempore mollitia a, autem accusantium maiores eos.',
        image: require('@/assets/images/profile-1.png'),
        link: 'https://www.fireblogspot.org'
      },
      {
        id: 3,
        title: 'Twitter',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore commodi est similique hic tempore mollitia a, autem accusantium maiores eos.',
        image: require('@/assets/images/profile-1.png'),
        link: 'https://www.fireblogspot.org'
      },
      {
        id: 3,
        title: 'Instagram',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore commodi est similique hic tempore mollitia a, autem accusantium maiores eos.',
        image: require('@/assets/images/profile-1.png'),
        link: 'https://www.fireblogspot.org'
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
});
