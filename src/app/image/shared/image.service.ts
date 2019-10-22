import { Injectable } from '@angular/core';


@Injectable()


export class ImageService {
  visibleImages = [];

  getImages() {
    // tslint:disable-next-line: no-use-before-declare
    return this.visibleImages = IMAGES.slice(0);
  }

  getImage(id: number) {
    // tslint:disable-next-line: no-use-before-declare
    return IMAGES.slice(0).find(image => image.id === id);
  }
}

const IMAGES = [
  {
    id: 1,
    moviesTitle: 'Jay and Silent Bob',
    yearOfProduction: '2017',
    url: 'assets/images/fn1.jpg',
    rated: '4 stars',
    released: '2019',
    runtime: '1:54:30',
    Genre: 'Comedy, Drama, Thriller',
    director: 'Mark Shurai',
    writer: 'Dominic Udofia',
    Language: 'English',
    country: 'Nigeria',
    category: 'favourite'
  },
  {
    id: 2,
    moviesTitle: 'Spider-Man',
    yearOfProduction: '2016',
    url: 'assets/images/fn2.jpg',
    rated: '4 stars',
    released: '2019',
    runtime: '1:54:30',
    Genre: 'Comedy, Drama',
    director: 'Mark Shurai',
    writer: 'Dominic Udofia',
    Language: 'English',
    country: 'Nigeria'
  },
  {
    id: 3,
    moviesTitle: 'DOCTOR SLEEP',
    yearOfProduction: '2005',
    url: 'assets/images/fn3.jpg',
    rated: '4 stars',
    released: '2019',
    runtime: '1:54:30',
    Genre: 'Comedy, Drama',
    director: 'Mark Shurai',
    writer: 'Dominic Udofia',
    Language: 'English',
    country: 'Nigeria',
    category: 'favorite'
  },
  {
    id: 4,
    moviesTitle: 'CLEMENCY',
    yearOfProduction: '2006',
    url: 'assets/images/fn4.jpg',
    rated: '4 stars',
    released: '2019',
    runtime: '1:54:30',
    Genre: 'Comedy, Drama',
    director: 'Mark Shurai',
    writer: 'Dominic Udofia',
    Language: 'English',
    country: 'Nigeria'
  },
  {
    id: 5,
    moviesTitle: 'FREE GUY',
    yearOfProduction: '2007',
    url: 'assets/images/fn5.jpg',
    rated: '4 stars',
    released: '2019',
    runtime: '1:54:30',
    Genre: 'Comedy, Drama',
    director: 'Mark Shurai',
    writer: 'Dominic Udofia',
    Language: 'English',
    country: 'Nigeria',
    category: 'favourite'
  },
  {
    id: 6,
    moviesTitle: 'THE IRISHMAN',
    yearOfProduction: '2008',
    url: 'assets/images/fn6.jpg',
    rated: '4 stars',
    released: '2019',
    runtime: '1:54:30',
    Genre: 'Comedy, Drama',
    director: 'Mark Shurai',
    writer: 'Dominic Udofia',
    Language: 'English',
    country: 'Nigeria'
  },
  {
    id: 7,
    moviesTitle: 'BLACK AND BLUE',
    yearOfProduction: '2009',
    url: 'assets/images/fn7.jpg',
    rated: '4 stars',
    released: '2019',
    runtime: '1:54:30',
    Genre: 'Comedy, Drama',
    director: 'Mark Shurai',
    writer: 'Dominic Udofia',
    Language: 'English',
    country: 'Nigeria'
  },
  {
    id: 8,
    moviesTitle: 'BLACK CHRISTMAS',
    yearOfProduction: '2010',
    url: 'assets/images/fn8.jpg',
    rated: '4 stars',
    released: '2019',
    runtime: '1:54:30',
    Genre: 'Comedy, Drama',
    director: 'Mark Shurai',
    writer: 'Dominic Udofia',
    Language: 'English',
    country: 'Nigeria',
    category: 'favourite'
  },
  {
    id: 9,
    moviesTitle: 'BAD BOYS FOR LIFE',
    yearOfProduction: '2011',
    url: 'assets/images/fn9.jpg',
    rated: '4 stars',
    released: '2019',
    runtime: '1:54:30',
    Genre: 'Comedy, Drama',
    director: 'Mark Shurai',
    writer: 'Dominic Udofia',
    Language: 'English',
    country: 'Nigeria'
  },
  {
    id: 10,
    moviesTitle: 'JOKER',
    yearOfProduction: '2012',
    url: 'assets/images/fn10.jpg',
    rated: '4 stars',
    released: '2019',
    runtime: '1:54:30',
    Genre: 'Comedy, Drama',
    director: 'Mark Shurai',
    writer: 'Dominic Udofia',
    Language: 'English',
    country: 'Nigeria'
  },
  {
    id: 11,
    moviesTitle: 'JUMANJI',
    yearOfProduction: '2013',
    url: 'assets/images/fn11.jpg',
    rated: '4 stars',
    released: '2019',
    runtime: '1:54:30',
    Genre: 'Comedy, Drama',
    director: 'Mark Shurai',
    writer: 'Dominic Udofia',
    Language: 'English',
    country: 'Nigeria'
  },
  {
    id: 12,
    moviesTitle: 'MARRIAGE STORY',
    yearOfProduction: '2014',
    url: 'assets/images/fn12.jpg',
    rated: '4 stars',
    released: '2019',
    runtime: '1:54:30',
    Genre: 'Comedy, Drama',
    director: 'Mark Shurai',
    writer: 'Dominic Udofia',
    Language: 'English',
    country: 'Nigeria',
    category: 'favourite'
  },
  {
    id: 13,
    moviesTitle: 'JOKER',
    yearOfProduction: '2015',
    url: 'assets/images/fn13.jpg',
    rated: '4 stars',
    released: '2019',
    runtime: '1:54:30',
    Genre: 'Comedy, Drama',
    director: 'Mark Shurai',
    writer: 'Dominic Udofia',
    Language: 'English',
    country: 'Nigeria'
  },
  {
    id: 14,
    moviesTitle: 'KNIVES OUT',
    yearOfProduction: '2016',
    url: 'assets/images/fn14.jpg',
    rated: '4 stars',
    released: '2019',
    runtime: '1:54:30',
    Genre: 'Comedy, Drama',
    director: 'Mark Shurai',
    writer: 'Dominic Udofia',
    Language: 'English',
    country: 'Nigeria',
    category: 'favourite'
  },
  {
    id: 15,
    moviesTitle: 'MARY',
    yearOfProduction: '2017',
    url: 'assets/images/fn15.jpg',
    rated: '4 stars',
    released: '2019',
    runtime: '1:54:30',
    Genre: 'Comedy, Drama',
    director: 'Mark Shurai',
    writer: 'Dominic Udofia',
    Language: 'English',
    country: 'Nigeria'
  },
  {
    id: 16,
    moviesTitle: 'THE COMMAND',
    yearOfProduction: '2018',
    url: 'assets/images/fn16.jpg',
    rated: '4 stars',
    released: '2019',
    runtime: '1:54:30',
    Genre: 'Comedy, Drama',
    director: 'Mark Shurai',
    writer: 'Dominic Udofia',
    Language: 'English',
    country: 'Nigeria'
  },
  {
    id: 17,
    moviesTitle: 'NIGHT HUNTER',
    yearOfProduction: '2019',
    url: 'assets/images/fn17.jpg',
    rated: '4 stars',
    released: '2019',
    runtime: '1:54:30',
    Genre: 'Comedy, Drama',
    director: 'Mark Shurai',
    writer: 'Dominic Udofia',
    Language: 'English',
    country: 'Nigeria'
  },
  {
    id: 18,
    moviesTitle: 'NO TIME TO DIE',
    yearOfProduction: '2020',
    url: 'assets/images/fn18.jpg',
    rated: '4 stars',
    released: '2019',
    runtime: '1:54:30',
    Genre: 'Comedy, Drama',
    director: 'Mark Shurai',
    writer: 'Dominic Udofia',
    Language: 'English',
    country: 'Nigeria',
    category: 'favourite'
  },
  {
    id: 19,
    moviesTitle: 'OFFICIAL SECRETS',
    yearOfProduction: '2016',
    url: 'assets/images/fn19.jpg',
    rated: '4 stars',
    released: '2019',
    runtime: '1:54:30',
    Genre: 'Comedy, Drama',
    director: 'Mark Shurai',
    writer: 'Dominic Udofia',
    Language: 'English',
    country: 'Nigeria'
  },
  {
    id: 20,
    moviesTitle: 'TERMINATOR - DARK FATE',
    yearOfProduction: '2017',
    url: 'assets/images/fn20.jpg',
    rated: '4 stars',
    released: '2019',
    runtime: '1:54:30',
    Genre: 'Comedy, Drama',
    director: 'Mark Shurai',
    writer: 'Dominic Udofia',
    Language: 'English',
    country: 'Nigeria'
  }

];
