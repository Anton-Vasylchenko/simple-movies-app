export default class TheMovieService {
  _baseUrl = 'https://api.themoviedb.org/3';
  _apiKey = '4d8b2f4b197b6cc4163b866a0d50a1f9';

  getResource = async (url) => {
    const res = await fetch(`${this._baseUrl}${url}?api_key=${this._apiKey}`)
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    const body = res.json();
    return body;
  }

  getMovie = async (id) => {
    const movie = await this.getResource(`/movie/${id}`);
    return this._transformMovieDetail(movie);
  }

  getGenresList = async () => {
    return this.getResource(`/genre/list`);
  }

  getGenre = async (id) => {
    const genres = this.getGenresList();
    return genres
  }

  getPopularMovies = async () => {
    const peopleList = await this.getResource(`/movie/popular`);
    return peopleList.results.map(this._transformMovieDetail);
  }

  getPopularPeople = async () => {
    const peopleList = await this.getResource(`/person/popular`);
    return peopleList.results.map(this._transformPersonList);
  }

  getPerson = async (id) => {
    const person = await this.getResource(`/person/${id}`);
    return this._transformPersonDetail(person);
  }

  _transformPersonList = (person) => {
    return {
      id: person.id,
      name: person.name,
      rating: person.popularity,
      img: person.profile_path
    }
  }

  _transformMovieDetail = (movie) => {
    return {
      id: movie.id,
      name: movie.original_title,
      releaseDate: this._transformDateFormat(movie.release_date),
      rating: movie.vote_average,
      img: movie.poster_path,
      overview: movie.overview,
    }
  }

  _transformPersonDetail = (person) => {
    return {
      id: person.id,
      name: person.name,
      birthday: this._transformDateFormat(person.birthday),
      gender: this.getPersonGender(person.gender),
      bio: person.biography,
      popularity: person.popularity,
      knownFor: person.also_known_as,
      img: person.profile_path
    }
  }

  arrayToString = (array) => {
    const newArray = [];
    array.forEach(el => {
      newArray.push(el.name);
    });
    return newArray.join(', ');
  }

  _transformDateFormat = (date) => {
    if (!date) {
      return '---';
    }
    const dateArray = date.split('-').reverse();
    const newDate = dateArray.join('/');

    return newDate;
  }

  getPersonGender = (numb) => {
    if (numb === 1) return 'female'
    return 'male';
  }

}





