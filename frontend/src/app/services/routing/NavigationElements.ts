interface NavigationElement {
  link?: string;
  name?: string;
  svg?: string;
  chosen_svg?: string;
}

export const NavigationElements : NavigationElement[] = [
  {
    link: '',
    name: 'Главная',
    svg: 'assets/navigation_svg/home.svg',
    chosen_svg: 'assets/navigation_svg/home.chosen.svg'
  },

  {
    link: '/PlayLists',
    name: 'Плейлисты',
    svg: 'assets/navigation_svg/collections.svg',
    chosen_svg: 'assets/navigation_svg/collections.chosen.svg',
  },

  {
    link: '/Radio',
    name: 'Радио',
    svg: 'assets/navigation_svg/radio.svg',
    chosen_svg: 'assets/navigation_svg/radio.chosen.svg',
  },
]
