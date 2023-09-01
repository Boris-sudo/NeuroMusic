export interface Mood {
  gradient: string;
  name: string;
}
interface Genre {
  name: string;
  image: string;
  text_color: string;
}

export const MoodList: Mood[] = [
  { name: 'Бодрое', gradient: 'linear-gradient(#fa9a66, #ff6300)' },
  { name: 'Спокойное', gradient: 'linear-gradient(#6695fa, #0048ff)' },
  { name: 'Грустное', gradient: 'linear-gradient(#906bff, #6600ff)' },
  { name: 'Веселое', gradient: 'linear-gradient(#abe871, #37ff00)' },
  { name: 'Спортивное', gradient: 'linear-gradient(#da94c2, #ff00dc)' },
]

export const GenreList: Genre[] = [
  { name: 'Рок', image: 'assets/genreImages/rock.png', text_color: '#000000' },
  { name: 'Рэп', image: 'assets/genreImages/rap.png', text_color: '#000000' },
  { name: 'Поп', image: 'assets/genreImages/pop.png', text_color: '#000000' },
  { name: 'Хип-хоп', image: 'assets/genreImages/hiphop.png', text_color: '#000000' },
  { name: 'Класика', image: 'assets/genreImages/classic.png', text_color: '#000000' },
  { name: 'попец', image: 'assets/genreImages/classic.png', text_color: '#000000' },
]
