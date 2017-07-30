// Import the necessary modules.
import IAbstractFactory from './IAbstractFactory'
import Movie from '../../models/Movie'
import Show from '../../models/Show'
import { AnimeMovie, AnimeShow } from '../../models/Anime'

/**
 * Class for getting a model object.
 * @implements {IAbstractFactory}
 * @type {ModelFactory}
 * @flow
 */
export default class ModelFactory extends IAbstractFactory {

  /**
   * Get a model based on the name type of the model.
   * @override
   * @param {!string} modelType - The name type of the model you want to get.
   * @returns {AnimeMovie|AnimeShow|Movie|Show|undefined} - A model object.
   */
  getModel(
    modelType: string
  ): AnimeMovie | AnimeShow | Movie | Show | undefined {
    if (!modelType) {
      return undefined
    }

    const mt = modelType.toUpperCase()

    switch (mt) {
      case 'ANIMEMOVIE':
        return AnimeMovie
      case 'ANIMESHOW':
        return AnimeShow
      case 'MOVIE':
        return Movie
      case 'SHOW':
        return Show
      default:
        return undefined
    }
  }

}
