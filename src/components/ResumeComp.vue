<template>
    <div class="resume">

<div class="left">
    <img src="https://i.postimg.cc/hjYzpV22/C12-C2-Abenathi-Sindapi-2.jpg" width="100%" class="image"/>
    
    <div class="content">
        <h2>Contacts</h2>
        <h4>Phone:</h4>
        <p>+27 65 838 0423</p>
        <h4>Email:</h4>
        <p>abenathi.sindaphi201@gmail.com</p>
    </div>

    <div class="content">
        <h2>Reference</h2>
        <h4>Oslin Johnson</h4>
<p>Lecture at Life Choices Academy</p>
<p>+27 71 248 2443</p>
    </div>

    <div class="content interests">
        <h2>Interest</h2>
        <ul>
            <li><img src="https://i.postimg.cc/BnjNkDVm/comic.png" alt="comics"><span>Comics</span></li>
            <li><img src="https://i.postimg.cc/NfJpdbpy/headphone-symbol.png" alt="music"><span>Music</span></li>
            <li><img src="https://i.postimg.cc/fLNKVPTP/movie-clapper-open.png" alt="movies"><span>Movies</span></li>
            <li><img src="https://i.postimg.cc/VN977H8c/games.png" alt="wrestling"><span>Games</span></li>
        </ul>
    </div>
</div>

<div class="right">
    <div class="r-content">
        <h1>Abenathi <strong>Sindapi</strong></h1>
        <p class="text">Aspiring Full-Stack Developer</p>
        
        <h2>Education</h2>
        <div v-if="education">
            <EducationComp :education="education"/>
        </div>
        <div v-else>
            Loading...
        </div>

        <h2>Experience</h2>
        <div v-if="experience">
            <ExperienceComp :experience="experience"/>
        </div>
        <div v-else>
            Loading...
        </div>

        <h2>Skills</h2>
        <div v-if="skills">
            <SkillsComp :skills="skills"/>
        </div>

    </div>
</div>
</div>
</template>

<script>
import SkillsComp from './SkillsComp.vue';
import EducationComp from './EducationComp.vue';
import ExperienceComp from './ExperienceComp.vue';

export default{
    components: { SkillsComp, EducationComp, ExperienceComp },

    computed: {
        education() {
            return this.$store.state.education
        },

        experience() {
            return this.$store.state.experience
        },

        skills() {
            return this.$store.state.skills
        }
    },

    mounted() {
        return this.$store.dispatch("getEducation"),
        this.$store.dispatch("getExperience"),
        this.$store.dispatch("getSkills");
    },
}
</script>

<style scoped>
    .resume{
        width: 100%;
	    max-width: 800px;
	    margin: auto;
        margin-block: 20px;
        display: flex;
        justify-content: space-between;
        padding: 15px;
	    height: 100%;
	    background-color: #d9d9d9;
	    box-shadow: 5px 21px 19px 4px #0c0c0c57;
        border-radius: 20px;
    }
    .content{
        padding: 20px;
    }
    
    h3{
        margin: 0;
        color: black;
        font-weight: 500;
    }
    .content p{
        margin: 0;
        font-size: 15px;
        margin-top: 5px;
    }
    .interests ul{
        display: flex;
        gap: 5px;
        margin: auto;
    }
    .left{
        margin-left: 50px;
        width: 270px;
        background-color: #0c0c0c57;
        height: 100%;
        /* padding: 10px; */
    }
    .right{
        width: 500px;
        float: left;
    }
    .left .image{
        border-top: 15px solid #000;
        border-bottom: 15px solid #000;
    }

    h2{
        margin-top: 10px;
        font-weight: 200;
    }

    h4{
        margin: 0;
        color: #000;
        margin-top: 10px;
    }

    .content ul{
        margin-left: -40px;
        margin-bottom: 40px;
    }

    .content ul li{
        list-style: none;
        float: left;
        position: relative;
    }

    .content li img{
        width: 60px;
        padding-right: 15px;
    }

    .content li span{
        position: absolute;
        bottom: -12px;
        left: 5px;
        font-size: 11px;
    }

    .r-content{
        padding: 50px;
    }

    h1{
        font-size: 50px;
        font-weight: normal;
        letter-spacing: 2px;
        position: relative;
        margin-top: 10px;
    }

    .text{
        font-size: 17px;
        margin-top: -10px;
    }

    .text1{
        font-size: 13px;
    }
    .header{
        font-weight: 400;
        letter-spacing: 1px;
    }
    .text1{
        font-size: 15px;
        font-weight: 500;
    }
</style>