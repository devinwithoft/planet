import { galaxiesService } from "../services/GalaxiesService.js";
import BaseController from "../utils/BaseController.js";
import { logger } from "../utils/Logger.js";

export class GalaxiesController extends BaseController {
    constructor() {
        super('api/galaxies')
        this.router
            .get('', this.getAll)
            .post('', this.create)
    }



    async getAll(req, res, next) {
        try {
            const allGalaxies = await galaxiesService.getAll()
            return res.send(allGalaxies)
        } catch (error) {
            next(error)
            logger.log(error)
        }
    }

    async create(req, res, next) {
        try {
            const newGalaxy = await galaxiesService.create(req.body)
            return res.send(newGalaxy)
        } catch (error) {
            next(error)
        }
    }

}