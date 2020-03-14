<template>
<div>
    <b-container class="bv-example-row">
        <b-row>
            <b-col>
                <div class="form-filed">
                <h1>Add Post</h1>
                <form @submit.prevent="submit" novalidate="true" class="jumbotron">
                    <b-form-group
                    id="fieldset-horizontal"
                    label-cols-sm="4"
                    label-cols-lg="3"
                    label="Type your title"
                    label-for="input-horizontal"
                    >

                    <b-form-input id="input-horizontal" required="required" placeholder="Title" minlength="2" v-model="post.title"></b-form-input>
                    </b-form-group>

                    <b-row class="mt-2">
                        <b-col sm="3">
                        <label for="textarea-default">Enter Text</label>
                        </b-col>
                        <b-col sm="9">
                        <b-form-textarea
                            id="textarea-default"
                            placeholder="Textarea"
                            v-model="post.text"
                        ></b-form-textarea>
                        </b-col>
                    </b-row>
                    <br>
                     <b-button variant="outline-primary" type="submit">Add Post</b-button>
                </form>
                </div>

            </b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
import { postService } from '@/services/PostService.js'
export default {
    data(){
        return {
            post: {}
        }
    },
    methods: {
        submit(){
            this.addPost()
        },
        async addPost(){
            const respose = await postService.add(this.post)
            this.post = {}
        }
    },

}
</script>