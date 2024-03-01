import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class PostService {
    async getPosts() {
        const response = await api.get('api/posts')
        logger.log('got posts', response.data)
    }
}

export const postService = new PostService()