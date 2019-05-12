<template>
    <div>
        <h1>Users</h1>
        <ol>
           <li v-for="(user, index) in users" :key="user.id" @click="removeUser(index)">{{ user.name }}</li>
        </ol>
    </div>
</template>

<script>
    export default {
        async asyncData ({ store }) {
            await store.dispatch('getUsers');
            return{
                users: store.getters.users
            }
        },
        methods: {
            removeUser(id) {
                this.$store.dispatch('removeUser', id);
            }
        }
    }
</script>

<style scoped>
    div {
        margin: 0 auto;
        max-width: 300px;
    }
    li {
        border-bottom: 1px solid darkslategray;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
        padding: 10px;
        cursor: pointer;
        box-shadow: 1px 2px 1px darkgreen;
    }

</style>