import { AppState } from "../AppState"
import { Post } from "../models/Post"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

    function _handlePostResponse(response) {
        const newPosts = response.data.posts.map(postPOJO => new Post (postPOJO))
        AppState.posts = newPosts
        AppState.currentPage = response.data.currentPage
        AppState.totalPages = response.data.total_pages
    }

class PostService {



    async getPosts() {
        const response = await api.get('api/posts')
        logger.log('got posts', response.data)
        AppState.currentPage = response.data.page 
        AppState.totalPages = response.data.total_pages
        _handlePostResponse(response)
    }
    async getPostsByCreatorId(profileId) {
        const response = await api.get(`api/posts?creatorId=${profileId}`)
        logger.log ('got posts', response.data)
        const newPosts = response.data.posts.map(pojo => new Post(pojo))
        AppState.posts = newPosts
      }
      async searchPosts(searchQuery) {
        const response = await api.get(`search/post?query=${searchQuery}`)
        logger.log('searching posts', response.data)
        _handlePostResponse(response)
      }

      async changePage(pageNumber) {
        const response = await api.get(`api/posts?page=${pageNumber}`)
        logger.log('changing page', response.data)
        _handlePostResponse()
      }
}

export const postService = new PostService()