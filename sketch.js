var player,playergroup,goal
var redblock,blueblock,blackblock
function setup(){
playergroup = new Group()
}
function preload(){
createCanvas(400,400)
    goal = createSprite(355,300,80,80)
	goal.shapeColor = "yellow"
	player = createSprite(20,20,10,10)
	player.shapeColor="orange"
	redblock = createSprite(115,100,10,10)
	redblock.shapeColor="red"

	redblock2 = createSprite(193,100,10,10)
	redblock2.shapeColor="red"

	redblock3 = createSprite(260,100,10,10)
	redblock3.shapeColor="red"

	redblock4 = createSprite(350,100,10,10)
	redblock4.shapeColor="red"

	blueblock = createSprite(0,200,10,400)
	blueblock.shapeColor="blue"

	blackblock = createSprite(80,80,10,500)
	blackblock.shapeColor="black"

	blackblock2 = createSprite(150,250,10,370)
	blackblock2.shapeColor="black"

	blackblock3 = createSprite(230,80,10,500)
	blackblock3.shapeColor="black"

	blackblock4 = createSprite(300,250,10,370)
	blackblock4.shapeColor="black"
}
function draw(){
	background("gray")
	playerfunc()
	redfunc()
	bluefunc()
goal.scale = goal.scale - 0.0005
if(player.isTouching(goal)){
	blackblock.visible = false
	blackblock2.visible = false
	blackblock3.visible = false
	blackblock4.visible = false
	redblock.visible = false
	redblock2.visible = false
	redblock3.visible = false
	redblock4.visible = false
	blueblock.scale = 0.01
	goal.scale = 500
}
	if(redblock.isTouching(player)||redblock2.isTouching(player)||redblock3.isTouching(player)||redblock4.isTouching(player)||blueblock.isTouching(player)||blackblock.isTouching(player)){
		player.y = 20
		player.x = 20
		blueblock.scale = 1
	}
drawSprites()
}
function redfunc(){
	redblock.scale = redblock.scale +0.05
	if(redblock.scale > 5){
		redblock.scale = 1
	}
	redblock2.scale = redblock2.scale +0.05
	if(redblock2.scale > 5){
		redblock2.scale = 1
	}
	redblock3.scale = redblock3.scale +0.05
	if(redblock3.scale > 5){
		redblock3.scale = 1
	}
	redblock4.scale = redblock4.scale +0.05
	if(redblock4.scale > 5){
		redblock4.scale = 1
	}
}
function bluefunc(){
	blueblock.scale = blueblock.scale + 0.05
	

}
function playerfunc(){
	player.velocityY = 0
	player.velocityX = 0
	if(keyDown("A")){
		player.velocityX = -3
	}
	if(keyDown("s")){
		player.velocityY = 3
	}
	if(keyDown("d")){
		player.velocityX = 3
	}
	if(keyDown("w")){
		player.velocityY = -3
	}

}

