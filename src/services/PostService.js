import { AppState } from "../AppState"
import { Post } from "../models/Post"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class PostService {
    async getPosts() {
        const response = await api.get('api/posts')
        logger.log('got posts', response.data)
        const newPosts = response.data.posts.map(pojo => new Post(pojo))
        AppState.posts = newPosts
    }
}

export const postService = new PostService()