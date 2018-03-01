<template>
    <div>
        <h1>{{msg }}</h1>
        <input type="text" v-model="user.firstName">
        <p v-if="showName"> {{user.firstName }} </p>
        <p v-else>Nobody</p>
        <ul>
            <li v-for="item in items">{{item.item}}</li>
        </ul>

        <button v-on:click="greet('Hello world')">Say greeting</button>
        <input type="text" v-on:keyup="pressKey">
        <br />
        <h3>{{ fullName }} </h3>
    </div>
</template>

<script>

export default{
    name: 'test',
    props: {
        msg: {
            default: "Hi",
            type: String
        }
    },
    data () {
        return {
            title: 'Hi',
            user: {
                firstName: 'Jane',
                lastName: 'Doe',
                email: 'jdoe@gmail.com'
            },
            showName: true,
            items: [
                {item: 'Item one'},
                {item: 'Item two'},
                {item: 'Item three'}
            ]
        }
    },
    methods: {
        greet: function (greeting) {
                alert(greeting);
            },
        pressKey: function (e) {
                console.log(e.target.value);
            }
    },
    computed: {
        fullName: function () {
                return this.user.firstName + " " + this.user.lastName;
            }
    }
}

</script>

<style>
</style>
