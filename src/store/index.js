import { createStore } from "vuex";

const database = "https://abenathi201.github.io/data/db.json"

export default createStore({
  state: {
    testimonials: null,
    projects: null,
    education: null,
    experience: null,
    skills: null
  },

  mutations: {
    setTestimonials: (state, testimonials) => {
      state.testimonials = testimonials;
    },

    setProjects: (state, projects) => {
      state.projects = projects;
    },

    setEducation: (state, education) => {
      state.education = education
    },

    setExperience: (state, experience) => {
      state.experience = experience
    },

    setSkills: (state, skills) => {
      state.skills = skills
    }
  },

  actions: {
    async getTestimonials(context) {
      try {
        const response = await fetch(database)
        let  {testimonials}  = await response.json();
        context.commit("setTestimonials", testimonials);
        console.log(testimonials)
      } catch (error) {
        context.commit("Testimonials Error", error.message);
      }
    },

    async getProjects(context) {
      try{
        const res = await fetch(database)
        let {projects} = await res.json();
        context.commit("setProjects", projects);
        console.log(projects);
      } catch (error) {
        context.commit("Projects Error", error.message)
      }
    },

    async getEducation(context) {
      try{
        const res = await fetch(database)
        let {education} = await res.json();
        context.commit("setEducation", education);
        console.log(education);
      } catch (error) {
        context.commit("Education Error", error.message)
      }
    },

    async getExperience(context) {
      try{
        const res = await fetch(database)
        let {experience} = await res.json();
        context.commit("setExperience", experience);
        console.log(experience);
      } catch (error) {
        context.commit("Experience Error", error.message)
      }
    },

    async getSkills(context) {
      try{
        const res = await fetch(database)
        let {skills} = await res.json();
        context.commit("setSkills", skills);
        console.log(skills);
      } catch (error) {
        context.commit("Skills Error", error.message)
      }
    }
  }
});
