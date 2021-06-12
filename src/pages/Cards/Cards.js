import Dropdown from '../../blocks/configuration-dropdown/dropdown/Dropdown';

class Cards {
  constructor() {
    this.init();
  }

  init() {
    this.guest = {
      text: 'Сколько гостей',
      visibility: 'hide',
      buttons: true,
      words: ['гость', 'гостя', 'гостей'],
      items: [
        { name: 'Взрослые', value: 0 },
        { name: 'Дети', value: 0 },
        { name: 'Младенцы', value: 0 },
      ],
    };

    const guestCardElement = document.querySelector('.card__dropdown-guest');
    if (guestCardElement) {
      new Dropdown(guestCardElement, this.guest);
    }

    this.guest.items[0].value = 2;
    this.guest.items[1].value = 1;
    const guestValueElement = document.querySelector('.card__dropdown-guest-value');
    if (guestValueElement) {
      new Dropdown(guestValueElement, this.guest);
    }
  }
}

export default Cards;