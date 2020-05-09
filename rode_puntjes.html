<!DOCTYPE html>
<html>
	<head>
        <meta charset="UTF-8">
	<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"> </script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.js"> </script>
        <style>
            html, body {
                height: 100%;
                font-family: monospace;
            }

            body {
                margin: 0;
                display: flex;

                /* This centers our sketch horizontally. */
                justify-content: center;

                /* This centers our sketch vertically. */
                align-items: center;
            }

            #controls  {
	        background-color: rgba(0, 0, 0, 0.5);
                position: fixed;
                top: 0;
                padding: 20px;
                border-radius: 4px;
                border: 1px solid #eee;
                margin: 20px;
                
            }

            label {
                padding: 4px;
                margin: 4px;
                vertical-align: top;
            }

            .slider {
                margin: 4px
            }
        
	</style>
    
	
</head>
	<body>

        
		<div id="app"><div id="controls"><div class="slider"><label for="">max_lines </label> <input type="range" min="0" max="2500"> 700
				</div> <div class="slider"><label for="">muis power </label> <input type="range" min="0" max="50"> 28
				</div> <div class="slider"><label for="">line_count </label> 701
				</div> <div class="slider"><label for="">wrijving </label> <input type="checkbox"></div> <div class="slider"><label for="">Alleen als muis beweegt</label> <input type="checkbox"></div> <div class="slider"><label for="">punten tekenen</label> <input type="checkbox"></div> <div class="slider"><label for="">Chaos in beweging</label> <input type="checkbox"></div></div></div>
		<canvas id="defaultCanvas0" class="p5Canvas"> </canvas>
	
	<script>

		var points = []
		var lines = []
		var max_points = 400
		var max_lines = 1000
		var max_velocity = 7 
		var r = 40

var vue;

		var scale_factor = 0.4

		function setup() {
			
		vue = new Vue({
		    el: "#app",
		    data: {
			    max_lines: 700,
			    line_count: 0,
			    damping: true,
			    mouse_strength: 50,
			    on_mouse_move_only: true
		    },
		    watch: {
		    }
		})
		    createCanvas(windowWidth, windowHeight)

		    for (var i = 0; i < max_points; i++) {
			    var p = createVector(random(windowWidth), random(windowHeight))
			    while ((Math.pow(p.x - 0.5 * windowWidth, 2) + Math.pow(p.y - 0.5 * windowHeight, 2) > 240 * 240)) { 
				    //||  (Math.pow(p.x - 0.5 * windowWidth, 2) + Math.pow(p.y - 0.5 * windowHeight, 2) k 200 * 200 )) { 
				    p = createVector(random(windowWidth), random(windowHeight))
			    }
			     
			    //p.velocity = createVector(random(max_velocity) * (random(2) - 1), random(max_velocity) * (random(2) - 1))
			    p.velocity = createVector(0, 0)
			    points.push(p)
		    }


		}

		function windowResized() {
		    resizeCanvas(windowWidth, windowHeight);
		}


		function mouseMoved() {
			if (!vue.on_mouse_move_only)
				return
			for (var i = 0; i < points.length; i++) {
				var p = points[i]
				var dx = p.x - mouseX
				var dy = p.y - mouseY

				p.velocity.x += vue.mouse_strength * dx / (dx * dx + dy * dy)
				p.velocity.y += vue.mouse_strength * dy / (dx * dx + dy * dy)

			}
				
		}



		function draw() {
			clear()
			lines = []
			update_points()
			draw_lines()
		}

		function update_points() {
			for (var i = 0; i < points.length; i++) {
				var p = points[i]
				var dx = p.x - mouseX
				var dy = p.y - mouseY

				if (!vue.on_mouse_move_only) {
					p.velocity.x += vue.mouse_strength * dx / (dx * dx + dy * dy)
					p.velocity.y += vue.mouse_strength * dy / (dx * dx + dy * dy)
				}
				if (vue.draw_points) {
					stroke(255, 0, 0)
					point(p.x, p.y)
				}

				if (vue.chaos) {
					if (random(100) > 95) {
						p.velocity.x += ((random(2) - 1) * random(10))/ 20
						p.velocity.y += ((random(2) - 1) * random(10))/ 20
					}
				}

			}

			for (var i = 0; i < points.length; i++) {
				var p = points[i]
				
				var m = p.velocity.x * p.velocity.x + p.velocity.y * p.velocity.y
				if (m == 0) {
					continue
				}
					
				if (m > max_velocity * max_velocity) {
					p.velocity.setMag(max_velocity)
				} else {
					if (vue.damping) {
						p.velocity.x *= 0.99
						p.velocity.y *= 0.99
					}
				}

				if (abs(p.velocity.x) < 0.1) {
					p.velocity.x = 0
				}

				if (abs(p.velocity.y) < 0.1) {
					p.velocity.y = 0
				}

				p.x += p.velocity.x 
				p.y += p.velocity.y

				if (p.x < 0 || p.x > windowWidth) {
					p.x = p.x < 0 ? 0 : windowWidth
					p.velocity.x = -p.velocity.x
				}
				if (p.y < 0 || p.y > windowHeight) { 
					p.y = p.y < 0 ? 0 : windowHeight
					p.velocity.y = -p.velocity.y
				}

					
			}
		}


		function draw_lines() {
			for (var i = 0; i < points.length; i++) {
				var p1 = points[i]

				for (var j = 0; j < points.length; j++) {

					var p2 = points[j]

					if (i == j) {
						continue
					}


					var dx = p2.x - p1.x
					var dy = p2.y - p1.y
					if (dx * dx + dy * dy < r * r) {

						if (lines.length > vue.max_lines) {
							continue
						}

					        var double = false
						for (var k = 0; k < lines.length; k++) {
			      				var line = lines[k]
							      if (line[0].x == p2.x && line[0].y == p2.y && line[1].x == p1.x && line[1].y == p1.y) {
			      						double = true
							      }
						}
						if (!double) {
							lines.push([p1, p2, Math.sqrt(dx * dx + dy * dy)])
					        }
					}

				}
			}

		      for (var k = 0; k < lines.length; k++) {
			      	if (k > vue.max_lines) {
					continue
				}
				drawingContext.beginPath()
				var line = lines[k]
				var opacity = (1 - line[2] / r )
			      	//opacity = 1
				drawingContext.moveTo(round(line[0].x), round(line[0].y))
				drawingContext.lineTo(round(line[1].x), round(line[1].y))
				drawingContext.strokeStyle = "rgba(255, 0, 0, " + opacity + ")"
				drawingContext.stroke()
				//line(lines[k][0].x, lines[k][0].y, lines[k][1].x, lines[k][1].y)

			}

			vue.line_count = lines.length;
			}



    </script>

<canvas id="defaultCanvas1" class="p5Canvas" style="width: 1600px; height: 143px;" width="3200" height="286"></canvas></body>
