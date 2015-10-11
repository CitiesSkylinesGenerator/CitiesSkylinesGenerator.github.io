var populateName = function(firstName, lastName) {

  var firstList = [
  'Autumn','Flat','Adams','Afton','Alamo','Ardmore','Ready','Ridge','Roan','Taft','Talbott','Turtle','Trezevant','Tiny','Whitwell','Sardis','Shiloh','Rutledge','Rives','Pleasant View','Parsons','Pelham','McDonald','Mansfield','Macon',
  'Jasper','old','Mohawk','Bright','Birch','Black','Cedar','Cotton','Cherry','Elm','Flat','Gold','Golden','Maple','Marble','New','Oak','Ocean','Old','Orange','Pine','Rich','River','Rock','Rose','Spring',
  'Silver','Spruce','Stone','Sun','Sweet','White'
  ];


  var secondList = [
   'Port','Mont','View','Bank','Bay','Ville','Island','Falls','Field','Way','Land','Water','Hills','Hill','Wood','Woods','Town','Ridge','Hurst','Mills','Heights','Wells','Shore','Shores','Spring','Springs',
   'Bluff', 'Terrace','Ford','Grove','Valley','Peak','Park','Parke','Lake','Holler','Square','Pass','Junction','District','Brook'
  ];

  var randomFirstName = firstList[Math.floor(Math.random() * firstList.length)];
  $(firstName).html(randomFirstName);

  var randomLastName = secondList[Math.floor(Math.random() * secondList.length)];
  $(lastName).html(randomLastName);

};

$('.populate').on('click', function() {
  populateName('.first', '.second');
});
