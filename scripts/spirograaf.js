var scale_factor = 0.4;
var vue;

var canvas_width = 800
var canvas_height = 800

function _translateY(y) {
  return canvas_height / 2 * (y * scale_factor + 1);
}

function _translateX(x) {
  return canvas_height / 2 * x  * scale_factor + canvas_width / 2;
}

function draw_spirograph() {
  
    clear()
    if (typeof vue === "undefined")
        return

    strokeWeight(0.2)
    stroke(0, 0, 0)

    var last_x, last_y

    for (var i = 0; i < vue.steps; i++) {

        x = cos( radians(i * vue.step_size * (vue.r1 - vue.r2) )) * vue.r1 + cos (radians(i * vue.step_size * (1 - vue.r2 / vue.r1))) * vue.r2;
        y = sin( radians(i * vue.step_size * (vue.r1 - vue.r2) )) * vue.r1 + sin (radians(i * vue.step_size * (1 - vue.r2 / vue.r1))) * vue.r2;

        if (!last_x) last_x = x
        if (!last_y) last_y = y

        line(_translateX(x),_translateY(y), _translateX(last_x), _translateY(last_y))

        last_x = x;
        last_y = y;
    }

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
            r1: 1,
            r2: 0.3,
            steps: 1000
        }, 
        watch: {
            r1: draw_spirograph,
            r2: draw_spirograph,
            steps: draw_spirograph,   
            step_size: draw_spirograph        
        }, 
        methods: {
            save_svg: () => {
                save("wub_spiro.svg")            
            }
        }
    })
})
