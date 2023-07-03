<template>
    <form @submit.prevent="submitForm">

        <label>Name:</label>
        <input type="text" required v-model="name">

        <label>Email:</label>
        <input type="email" required v-model="email">

        <label>Number:</label>
        <input type="number" required v-model="password">

        <div class="terms">
            <input type="checkbox" v-model="terms" required>
            <label>Accept the terms and conditions</label>
        </div>
        <div class="btn">
            <button>Sumbit</button>
        </div>
    </form>
</template>

<script>
export default{
    data() {
        return {
            name: '',
            email: '',
            password: '',
            role: 'front-end',
            terms: false,
            error: '',
        }
    },

    methods: {
        addSkill(e) {
            if(e.key === ',' && this.initSkill) {
                if(!this.skills.includes(this.initSkill)) {
                    this.skills.push(this.initSkill)
                }
                this.initSkill = ''
            }
        },

        submitForm() {
            this.error = this.password.length > 8 ? '' : 'Password must at least 8 characters long'
 
            // alert("Form Submitted")
            // location.reload();
        }
    },
}
</script>

<style scoped>
    form{
        max-width: 400px;
        margin: 30px auto;
        background: #d9d9d9;
        padding: 40px;
        border-radius: 10px;
        text-align: left;
    }

    label{
        color: #000;
        display: inline-block;
        margin: 25px 0 15px;
        font-size: 15px;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 500;
    }

    input, select{
        /* display: block; */
        padding: 10px 6px;
        width: 100%;
        /* box-sizing: border-box; */
        border: none;
        border-bottom: 1px solid #000;
        /* color: #555; */
        background: #d9d9d9;
    }

    input[type="checkbox"]{
        display: inline-block;
        width: 16px;
        height: 16px;
        margin: 0 10px 0 0;
        position: relative;
        top: 2px;
    }

    .skills{
        display: inline-block;
        margin: 20px 10px 0 0;
        padding: 6px 12px;
        background: #333;
        border-radius: 20px;
        font-size: 15px;
        font-weight: 700;
        color: #000;
        cursor: pointer;
    }

    button{
        background: #333;
        border: none;
        padding: 10px 20px;
        margin-top: 20px;
        color: white;
        border-radius: 20px;
        cursor: pointer;
    }

    .btn{
        text-align: center;
    }

    .error{
        color: red;
        margin-top: 10px;
        font-size: 13px;
        
    }
</style>