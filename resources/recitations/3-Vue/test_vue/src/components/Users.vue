<template>
    <div>
        <form v-on:submit="addUser">
            <input type="text" v-model="newUser.name">
            <input type="text" v-model="newUser.email">
            <input type="submit" value="submit">
        </form>
        <ul>
            <li v-for="user in users">
                <input type="checkbox" v-model="user.contacted" class="toggle">
                <span v-bind:class="{contacted: user.contacted}">
                <p>{{ user.name }}</p>
                <p>{{ user.email }}</p>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>

export default{
    name: 'test',
    data () {
        return {
            users: [
            ],
            newUser: {}
        }
    },
    methods: {
        addUser: function (e) {
                this.users.push({
                    name: this.newUser.name,
                    email: this.newUser.email,
                    contacted: false
                })
                e.preventDefault();
            }
    },
    created: function () {
        this.$http.get('https://jsonplaceholder.typicode.com/users').then(function (response) {
        this.users = response.data;
})
    }
}

</script>

<style scoped>
.contacted {
    text-decoration: line-through;
}
</style>
