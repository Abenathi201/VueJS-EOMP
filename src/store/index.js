import { createStore } from "vuex";

export default createStore({
  state: {
    testimonials: null,
    projects: null
  },

  mutations: {
    setTestimonials: (state, testimonials) => {
      state.testimonials = testimonials;
    },

    setProjects: (state, projects) =>{
      state.projects = projects;
    }
  },

  actions: {
    async getTestimonials(context) {
      try {
        const response = await fetch("https://abenathi201.github.io/data/testimonials.json");
        let  testimonials  = await response.json();
        context.commit("setTestimonials", testimonials);
        console.log(testimonials)
      } catch (error) {
        context.commit("Testimonials Error", error.message);
      }
    },

    async getProjects(context) {
      try{
        const res = await fetch("https://abenathi201.github.io/data/projects.json");
        let projects = await res.json();
        context.commit("setProjects", projects);
        console.log(projects);
      } catch (error) {
        context.commit("Projects Error", error.message)
      }
    }
  }
});
