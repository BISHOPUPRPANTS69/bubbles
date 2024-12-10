controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bubble.tossBubble()
    bubble.load_bubble()
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    bubble.tilt_angle(bubble.Choice.Right)
    bubble.tilt_angle(bubble.Choice.Right)
})
bubble.createBoard()
let mySprite = sprites.create(io2_images.joy, SpriteKind.Player)
bubble.load_bubble()
mySprite.top = 102
