
function testCircleRadiusDefaultsTo10() {
  var circle = new Circle();
  assert.isTrue(circle.radius === 10);
};

function testCircleDiameterIs12() {
  var circle = new Circle();
  assert.isTrue(circle.diameter === 12)
};

testCircleDiameterIs12()
