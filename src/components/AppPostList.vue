<template>
<div>
    <div v-for="post in posts" :key="post.id">
        <h1>{{ post.title }}</h1>
            <p>{{ post.text }}</p>
              <router-link :to="`/posts/${post.id}`">View Post</router-link>
    </div>
</div>

</template>
<script>

export default {
    name: 'AppPostList',
    props:{
        posts: {
            type: Array,
            required: true
        }
    },

    mounted() {

    },
}

</script>
