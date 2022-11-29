const menu = {
    _meal: '',
    _price: 0,
    set meal(mealToCheck) {
      if (typeof mealToCheck === 'string') {
        return this._meal = mealToCheck;
      }
    }
  };
  
  menu._meal = 'meatballs';
  menu._price = 1000;
  console.log(menu.meal = 'd');
  console.log(menu._meal );