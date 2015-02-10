var HEIGHT, WIDTH, circle;

WIDTH = 320;

HEIGHT =480;

Framer.Defaults.Animation = {
  curve: 'spring(200, 10, 0)'
};

circle = new Layer({
  x: WIDTH / 2,
  y: HEIGHT / 2,
  image: 'images/circle.png'
});

circle.on(Events.Click, function() {
  var bounce;
  bounce = new Animation({
    layer: circle,
    properties: {
      x: 100,
      y: HEIGHT * Math.random()
    }
  });
  return bounce.start();
});
