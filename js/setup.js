'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomElement = function (min, arr) {
  var randomI = Math.floor(Math.random() * (arr.length - min)) + min;
  var randomElement = arr[randomI];

  arr.splice(randomI, 1);
  return randomElement;
};

var wizards = [];

for (var i = 0; i < 4; i++) {
  wizards[i] = {
    name: getRandomElement(0, WIZARD_NAMES) + ' ' + getRandomElement(0, WIZARD_SURNAMES),
    coatColor: getRandomElement(0, WIZARD_COAT_COLOR),
    eyesColor: getRandomElement(0, WIZARD_EYES_COLOR)
  };
}

var fragment = document.createDocumentFragment();

wizards.forEach(function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  fragment.appendChild(wizardElement);
});
similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
