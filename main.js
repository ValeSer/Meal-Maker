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
    }
  };
  //menu._meal = 'meatballs';
  //menu._price = 1000;
  //console.log(menu.meal = 'd');
  //console.log(menu._meal );
  console.log(menu.price = 'iiii');
  console.log(menu._price );