import '../component/movie-list.js'
import '../component/search-bar.js'
import DataSource from '../data/data-source.js'

const main = () => {
  const searchElement = document.querySelector('search-bar')
  const movieListElement = document.querySelector('movie-list')

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchMovie(searchElement.value)
      renderResult(result)
    } catch (message) {
      fallbackResult(message)
    }
  }

  const renderResult = (results) => {
    movieListElement.movies = results
  }

  const fallbackResult = (message) => {
    movieListElement.renderError(message)
  }

  searchElement.clickEvent = onButtonSearchClicked

  const getAllMovies = async () => {
    try {
      const result = await DataSource.getMovie()
      renderResult(result)
    } catch (message) {
      fallbackResult(message)
    }
  }
  getAllMovies()
}

export default main
