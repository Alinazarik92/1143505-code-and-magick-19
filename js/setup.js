'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var getRandomName = function (min, max) {
  var randomI = Math.floor(Math.random() * (max - min + 1)) + min;
  return WIZARD_NAMES[randomI] + ' ' + WIZARD_SURNAMES[randomI];
};

var wizards = [
  {
    name: getRandomName(0, 7),
    coatColor: 'rgb(241, 43, 107)',
    eyesColor: 'red'
  },
  {
    name: getRandomName(0, 7),
    coatColor: 'rgb(56, 159, 117)',
    eyesColor: 'blue'
  },
  {
    name: getRandomName(0, 7),
    coatColor: 'rgb(0, 0, 0)',
    eyesColor: 'yellow'
  },
  {
    name: getRandomName(0, 7),
    coatColor: 'rgb(101, 137, 164)',
    eyesColor: 'black'
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
