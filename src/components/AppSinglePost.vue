<template>
        <b-container class="bv-example-row">
            <b-row>
                <b-col>
                    <b-jumbotron >
                        <h1>{{ post.title }}</h1>
                        <p>{{ post.text }}</p>
                    </b-jumbotron>
                </b-col>
            </b-row>
        </b-container>
</template>
<script>
import { postService } from '@/services/PostService.js'

export default {
    name: "AppSinglePost",
    data(){
        return {
            post:{}
        }
    },
   async created() {
       this.post = await postService.getPost(this.$route.params.id)
       
    },
}

</script>