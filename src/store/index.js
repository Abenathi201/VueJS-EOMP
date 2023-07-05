import { createStore } from "vuex";

export default createStore({
  state: {
    testimonials: null,
  },

  mutations: {
    setTestimonials: (state, testimonials) => {
      state.testimonials = testimonials;
    },
  },

  actions: {
    async getTestimonials(context) {
      try {
        const response = await fetch(
          "https://abenathi201.github.io/data/testimonials.json"
        );
        let  testimonials  = await response.json();
        context.commit("setTestimonials", testimonials);
        console.log(testimonials)
      } catch (error) {
        context.commit("Testimonials Error", error.message);
      }
    },
  },
});
