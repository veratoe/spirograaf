
var vue;

var canvas_width = 800
var canvas_height = 800

function _translateY(y) {
  return canvas_height / 2 * (y * vue.scale_factor + 1);
}

function _translateX(x) {
  return canvas_height / 2 * x  * vue.scale_factor + canvas_width / 2;
}

function draw_spirograph() {
  
    clear()
    if (typeof vue === "undefined")
        return

    strokeWeight(vue.stroke_weight)
    stroke(0, 0, 0)
    noFill()

    var r1 = Number(vue.r1)
    var r2 = Number(vue.r2)
    var r3 = Number(vue.r3)

    beginShape()

    for (var i = 1; i < vue.steps; i++) {

      
        var step_size = Number(vue.step_size)

        // i += ((Math.random() - 0.5) / 20000000)
        // r2 -= ((Math.random() - 0.5) / 20000000)

        console.log(r1, r2)

        x = cos( i * step_size * (r1 - r2) ) * r1 + cos (i * step_size * (1 + r2 / r1)) * r2;
        y = sin( i * step_size * (r1 - r2) ) * r1 + sin (i * step_size * (1 + r2 / r1)) * r2;

        x += cos(i) * r3;
        y += sin(i) * r3;
        // x += (random(100) - 50 ) / 1000
        // y += (random(100) - 50 ) / 1000

        // if (!last_x) last_x = x
        // if (!last_y) last_y = y

        // line(_translateX(x),_translateY(y), _translateX(last_x), _translateY(last_y))

        curveVertex(_translateX(x), _translateY(y))
        // last_x = x;
        // last_y = y;
    }

    endShape()
    //stroke(random(256), random(256), random(256))

}

function setup() {
    createCanvas(canvas_width, canvas_height, SVG)
    draw_spirograph()
}

function windowResized() {
    //resizeCanvas(canvas_width, canvas_height);
}

function draw() {

}

document.addEventListener("DOMContentLoaded", function(event) { 

    vue = new Vue({
        el: "#app",
        data: {
            scale_factor: 0.6,
            r1: 1,
            r2: 0.3,
            r3: 0.2,
            steps: 1000,
            step_size: 1,
            stroke_weight: 0.8
        }, 
        watch: {
            scale_factor: draw_spirograph,
            r1: draw_spirograph,
            r2: draw_spirograph,
            r3: draw_spirograph,
            steps: draw_spirograph,   
            step_size: draw_spirograph,
            stroke_weight: draw_spirograph        
        }, 
        methods: {
            save_svg: () => {
                save("wub_spiro.svg")            
            }
        }
    })
})
