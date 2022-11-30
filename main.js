const menu = {
    _meal: '',
    _price: 0,
    set meal(mealToCheck) {
      if (typeof mealToCheck === 'string') {
        return this._meal = mealToCheck;
      }
    },
    set price(priceToCheck) {
      if (typeof priceToCheck === 'number') {
        return this._price = priceToCheck;
      } else { return 'booooo'}
    },
    get todaySpecial () {
        if (this._meal && this._price) {
          return `Today's Special is ${this._meal} for £${this._price}!`;
        } else {
          return 'Meal or price was not set correctly!';
        }
      }
  };
  //menu._meal = 'meatballs';
  //menu._price = 1000;
  //console.log(menu.meal = 'd');
  //console.log(menu._meal );
  console.log(menu.price = '999');
  console.log(menu._price );
