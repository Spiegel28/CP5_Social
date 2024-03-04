import { AppState } from "../AppState"
import { Commercial } from "../models/Commercial"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class AdsService {
    async getAds() {
        const response = await api.get('api/ads')
        logger.log('got ads', response.data)
        const newCommercials = response.data.map(pojo => new Commercial(pojo))
        AppState.commercials = newCommercials
    }
}


export const adsService = new AdsService 