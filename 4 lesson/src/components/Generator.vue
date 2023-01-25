<script>
    export default {
        data() {
            return {
                name: '',
                surname: '',
                email: '',
                date: '',
                isDisabled: true,
                isSent: false
            }
        },
        methods: {
            countAge() {
                if(this.date!=''){
                    let nowDate = new Date();
                    let pastDate = new Date(this.date);

                    let res = nowDate.getFullYear()-pastDate.getFullYear()
                    
                    if(res>=18) {
                        this.isDisabled=false
                    }else {
                        this.isDisabled=true
                    }
                }
            },
            sent() {
                this.isSent=true
            },
            closeWindow() {
                this.isSent= false;
            }
        }
    }
</script>

<template>
        <form class="reg-form" @submit.prevent v-if="!isSent">
            <h1>REGISTRATION</h1>
            <input type="text" class="name" placeholder="name.." v-model="name">
            <input type="text" class="surname" placeholder="surname.." v-model="surname">
            <input type="email" id="email" placeholder="email.." v-model="email">
            <input type="date" class="age" v-model="date" @change="countAge">
            <input class="confirm" :disabled='isDisabled' type="submit" placeholder="123" @click='sent'>
        </form>

        <div class="results" v-if='isSent'>
            <div class="item">{{name}}</div>
            <div class="item">{{surname}}</div>
            <div class="item">{{email}}</div>
            <div class="item">{{date}}</div>
            <button class="closeW" @click="closeWindow">Close window</button>
        </div>
</template>

<style scoped>
    .reg-form {
        width: 400px;
        height: 300px;
        margin: 0 auto;
        border: 1px solid black;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    input {
        margin-bottom: 10px;
    }
    .results {
        width: 300px;
        height: 300px;
        border: 1px solid black;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .item {
        width: 200px;
        height: 50px;
        border: 1px solid black;
}
</style>
