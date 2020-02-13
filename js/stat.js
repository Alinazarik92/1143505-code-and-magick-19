'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var STEP = 10;
var TEXT_HEIGHT = 15;
var TEXT_GAP = 5;
var PADDING = 20;
var MARGIN = 15;
var barTopPadding = PADDING + CLOUD_Y + TEXT_HEIGHT * 2 + TEXT_GAP + MARGIN;
var BAR_PADDING = 40;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_GAP = 50;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x, y + STEP);
  ctx.lineTo(x + STEP, y);
  ctx.lineTo(x + CLOUD_WIDTH - STEP, y);
  ctx.lineTo(x + CLOUD_WIDTH, y + STEP);
  ctx.lineTo(x + CLOUD_WIDTH, y + CLOUD_HEIGHT - STEP);
  ctx.lineTo(x + CLOUD_WIDTH - STEP, y + CLOUD_HEIGHT);
  ctx.lineTo(x + STEP, y + CLOUD_HEIGHT);
  ctx.lineTo(x, y + CLOUD_HEIGHT - STEP);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  if (arr.length === 0) {
    return undefined;
  } else {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + STEP, CLOUD_Y + STEP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + PADDING, CLOUD_Y + PADDING);
  ctx.fillText('Список результатов:', CLOUD_X + PADDING, CLOUD_Y + PADDING + TEXT_HEIGHT + TEXT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_PADDING + (BAR_WIDTH + BAR_GAP) * i, barTopPadding + (BAR_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime));

    var getRandomBlueColor = function (min, max) {
      var randomSaturation = Math.floor(Math.random() * (max - min + 1)) + min;
      return 'hsl(240, ' + randomSaturation + '%, 50%)';
    };

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = getRandomBlueColor(0, 100);
    }

    ctx.fillRect(CLOUD_X + BAR_PADDING + (BAR_WIDTH + BAR_GAP) * i, barTopPadding + TEXT_HEIGHT + TEXT_GAP + (BAR_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime), BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + BAR_PADDING + (BAR_WIDTH + BAR_GAP) * i, barTopPadding + TEXT_HEIGHT + TEXT_GAP + BAR_HEIGHT + TEXT_GAP);
  }
};
