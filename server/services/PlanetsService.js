import { dbContext } from "../db/DbContext.js"

class PlanetsService {
    async getAll() {
        const allPlanets = await dbContext.Planets.find().populate('parentGalaxy')
        return allPlanets
    }

    async create(planetData) {
        const newPlanet = await dbContext.Planets.create(planetData)
        return newPlanet
    }
}

export const planetsService = new PlanetsService()