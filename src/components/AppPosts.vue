<template>
    <div>
        <b-container class="bv-example-row">
            <b-row>
                <b-col><AppPostList :posts="posts" /></b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import { postService } from '@/services/PostService.js'
import AppPostList from '@/components/AppPostList'

export default {
    components:{
        AppPostList
    },
    data(){
        return {
            posts: []
        }
    },
    async created() {
        this.posts = await postService.getAll()
    },
    
}
</script>