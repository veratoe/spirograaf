var scale_factor = 0.6;
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

    for (var i = 1; i < vue.steps; i++) {

        var r1 = Number(vue.r1)
        var r2 = Number(vue.r2)
        var step_size = Number(vue.step_size)

        i += ((Math.random() - 0.5) / 200)
        //r2 -= ((Math.random() - 0.5) / 200)

        console.log(r1, r2)

        x = cos( i * step_size * (r1 - r2) ) * r1 + cos (i * step_size * (1 + r2 / r1)) * r2;
        y = sin( i * step_size * (r1 - r2) ) * r1 + sin (i * step_size * (1 + r2 / r1)) * r2;


        // x += (random(100) - 50 ) / 1000
        // y += (random(100) - 50 ) / 1000

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
            steps: 1000,
            step_size: 1
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
