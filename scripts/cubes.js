var x = 0;
var y = 0;
var cubes = []
var cube_size = 40
var cube_spacing = 60

var colors2 = [
    [137, 137, 82],
    [178, 148, 91],
    [208, 229, 98],
    [182, 211, 105],
    [147, 196, 139],
]

var colors = [
    [239, 71, 111],
    [255, 209, 102],
    [6, 214, 160],
    [17, 138, 178],
    [7, 59, 76],
]

function _translateY(y) {
    return 2 * (y - 0.5 * windowHeight) / windowHeight
  }
  
  function _translateX(x) {
    return 2 * (x - 0.5 * windowWidth) / windowHeight
  }

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            var cube = createVector(-300 + i * cube_spacing, -300 + j * cube_spacing);
            cube.color = colors[int(random(0, colors.length))]
            cube.size = cube_size;
            cube.v = createVector(0, 0)
            cube.r = createVector(0, 0)
            cubes.push(cube)
            
        }
    }
}


function mouseMoved() {
    for (var i = 0; i < cubes.length; i++) {
        var cube = cubes[i]

        var dx = cube.x - _translateX(mouseX) * 1000
        var dy = cube.y - _translateY(mouseY) * 1000

        console.log(_translateX(mouseX), _translateY(mouseY))

        cube.v.x += 5 * dx / (dx * dx + dy * dy)
        cube.v.y += 5 * dy / (dx * dx + dy * dy)

        cube.size = 30  + 10 / (Math.sqrt(dx * dx + dy* dy)  + 0.1)
    }
      
          
}
  
function draw() {
    background(255);
    for (var i = 0; i < cubes.length; i++) {
        var cube = cubes[i]

            cube.v.x *= 0.95
            cube.v.y *= 0.95

            cube.r.x += cube.v.x
            cube.r.y += cube.v.y

            stroke(round(cube.color[0] * 0.6) , round(cube.color[1] * 0.6), round(cube.color[2] * 0.6))
            strokeWeight(1)
            fill(cube.color[0], cube.color[1], cube.color[2])
        
            push();
            translate(cube.x, cube.y);
            rotateY(cube.r.x);
            rotateX(cube.r.y);
            smooth()
            box(cube.size);
            pop();

    }
}


document.addEventListener("DOMContentLoaded", function(event) { 

    vue = new Vue({
        el: "#app",
        data: {}
    });
})
