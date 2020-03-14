import { HTTP } from './conection'

export default class PostService {
    async getAll() {
        const response = await HTTP.get('/posts')

        return response.data
    }
    async add(post) {
        const response = await HTTP.post('/posts', post)

        return response
    }
    async getPost(id) {
        const response = await HTTP.get(`/posts/${id}`)

        return response.data
    }


}
export const postService = new PostService() 