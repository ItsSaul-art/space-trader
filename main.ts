enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Button = SpriteKind.create()
}
function level_control () {
    if (level == 0) {
        scene.setBackgroundImage(assets.image`myImage5`)
        sprites.destroy(cursor)
        sprites.destroy(Back_button)
        sprites.destroy(Play)
        sprites.destroy(Help)
        scene.setBackgroundImage(assets.image`myImage4`)
        tiles.setCurrentTilemap(tilemap`level3`)
        Play = sprites.create(assets.image`Play button`, SpriteKind.Button)
        Help = sprites.create(assets.image`help button`, SpriteKind.Button)
        title = sprites.create(assets.image`title`, SpriteKind.Player)
        cursor = sprites.create(assets.image`myImage7`, SpriteKind.Player)
        Play.setPosition(44, 70)
        Help.setPosition(44, 108)
        controller.moveSprite(cursor)
        animation.runMovementAnimation(
        title,
        animation.animationPresets(animation.bobbing),
        3000,
        true
        )
    }
    if (level == 1) {
        sprites.destroy(Back_button)
        sprites.destroy(cursor)
        sprites.destroy(Help)
        sprites.destroy(Play)
        sprites.destroy(title)
        tiles.setCurrentTilemap(tilemap`level2`)
        playersprite = sprites.create(assets.image`myImage1`, SpriteKind.Player)
        scene.cameraFollowSprite(playersprite)
        controller.moveSprite(playersprite)
        music.play(music.createSong(hex`009a000408040205001c000f0a006400f4010a00000400000000000000000000000000000000027e0000000400011d04000800011e08001000011d10001400011d14001800011e18002000011d20002400011d24002800011e28002c00011d2c003000011930004000011d40004800012248004c00011e4c005000011d50005800011e58006000011d60006400011d64006800011e68006c00011d6c007000011970008000011d06001c00010a006400f401640000040000000000000000000000000000000002580000000400030d12160c001000030d111418002000030d0f1424002800011128003000011230004000010d40004800030c0f144c005000011150005800011258006000030c0f1464006800011168007000011270007400010d`), music.PlaybackMode.LoopingInBackground)
        characterAnimations.loopFrames(
        playersprite,
        [img`
            . . . . f f f f . . . . 
            . . f f 6 6 7 7 f f . . 
            . f f 6 7 7 7 7 7 f f . 
            f f 6 7 7 7 7 7 7 7 f f 
            f 6 6 6 7 7 7 7 6 6 7 f 
            f 6 f f 6 7 7 6 f f 7 f 
            f 6 f 1 f 7 7 f 1 f 7 f 
            f 6 f f 1 7 7 1 f f 7 f 
            f 6 6 f f 7 7 f f 7 7 f 
            . f 6 6 7 7 7 7 7 7 f . 
            . f f 6 6 7 7 7 7 f f . 
            f 9 f f 6 7 7 7 f f 9 f 
            f 1 f 1 f f f f 1 f 1 f 
            f 7 f c 1 1 1 1 c f 7 f 
            . . . f c c c c f . . . 
            . . . f f . . f f . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . f f f 6 7 7 7 f f f . 
            f f 6 6 6 7 7 7 7 7 f f 
            f 6 6 6 7 7 7 7 7 7 7 f 
            f 6 6 6 7 7 7 7 6 6 7 f 
            f 6 f f 6 7 7 6 f f 7 f 
            f 6 f 1 f 7 7 f 1 f 7 f 
            f 6 f f 1 7 7 1 f f 7 f 
            f 6 6 f f 7 7 f f 7 7 f 
            . f 6 6 6 7 7 7 f f f . 
            f f f 6 6 7 7 f 7 6 f . 
            6 7 f c 1 1 1 f 7 6 f . 
            . . f f c c c c f f . . 
            . . f f f f f f f . . . 
            . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . f f f 6 7 7 7 f f f . 
            f f 6 6 6 7 7 7 7 7 f f 
            f 6 6 6 7 7 7 7 7 7 7 f 
            f 6 6 6 7 7 7 7 6 6 7 f 
            f 6 f f 6 7 7 6 f f 7 f 
            f 6 f 1 f 7 7 f 1 f 7 f 
            f 6 f f 1 7 7 1 f f 7 f 
            f 6 6 f f 7 7 f f 7 7 f 
            . f f f 6 7 7 7 7 7 f . 
            . f 6 7 f 7 7 7 7 f f f 
            . f 6 7 f 1 1 1 c f 7 6 
            . . f f c c c c f f . . 
            . . . f f f f f f f . . 
            . . . . . . . f f f . . 
            `],
        200,
        characterAnimations.rule(Predicate.MovingDown)
        )
        characterAnimations.loopFrames(
        playersprite,
        [img`
            . . . . f f f f . . . . 
            . . f f 7 7 7 7 f f . . 
            . f f 7 7 7 7 7 7 f f . 
            f f 7 7 7 7 7 7 7 7 f f 
            f 6 7 7 7 7 7 7 7 7 6 f 
            f 6 6 7 7 7 7 7 7 6 6 f 
            f 6 6 6 7 7 7 7 6 6 6 f 
            f 6 6 6 6 6 6 6 6 6 6 f 
            f f 6 6 6 6 6 6 6 6 f f 
            . f f 6 6 6 6 6 6 f f . 
            . f f f f f f f f f f . 
            f 9 f 9 9 9 9 9 9 f 9 f 
            f 1 f 1 1 1 1 1 1 f 1 f 
            f 7 f c c 1 1 c c f 7 f 
            . . . f c c c c f . . . 
            . . . f f . . f f . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . . f f f f . . . . 
            . . f f 7 7 7 7 f f . . 
            . f f 7 7 7 7 7 7 f f . 
            f f 7 7 7 7 7 7 7 7 f f 
            f 6 7 7 7 7 7 7 7 7 6 f 
            f 6 6 7 7 7 7 7 7 6 6 f 
            f 6 6 6 7 7 7 7 6 6 6 f 
            f 6 6 6 6 6 6 6 6 6 6 f 
            f f 6 6 6 6 6 6 6 6 f f 
            . f f 6 6 6 6 6 6 f f . 
            . f f f f f f f f f f . 
            . 6 f 9 9 9 9 9 f 6 7 f 
            . 7 f c 1 1 1 1 f 6 7 f 
            . . f f c c c c c f f . 
            . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . . f f f f . . . . 
            . . f f 7 7 7 7 f f . . 
            . f f 7 7 7 7 7 7 f f . 
            f f 7 7 7 7 7 7 7 7 f f 
            f 6 7 7 7 7 7 7 7 7 6 f 
            f 6 6 7 7 7 7 7 7 6 6 f 
            f 6 6 6 7 7 7 7 6 6 6 f 
            f 6 6 6 6 6 6 6 6 6 6 f 
            f f 6 6 6 6 6 6 6 6 f f 
            . f f 6 6 6 6 6 6 f f . 
            . f f f f f f f f f f . 
            f 7 6 f 9 9 9 9 9 f 6 . 
            f 7 6 f 1 1 1 1 c f 7 . 
            . f f c c c c c f f . . 
            . . . . . . . f f f . . 
            `],
        200,
        characterAnimations.rule(Predicate.MovingUp)
        )
        characterAnimations.loopFrames(
        playersprite,
        [img`
            . . . f f f f f . . . . 
            . . f 7 7 7 7 7 f f . . 
            . f 7 7 7 7 7 7 7 6 f . 
            f 7 7 7 6 6 6 7 7 6 6 f 
            f 7 7 6 f f 6 7 6 6 6 f 
            f 7 6 f 1 f 7 7 6 6 6 f 
            f 7 f 1 f f 7 7 6 6 6 f 
            f 7 f f f 7 7 6 6 6 6 f 
            f 7 7 7 7 7 7 6 6 6 f . 
            . f 7 7 7 6 6 6 f f f . 
            . . f 6 6 6 6 f f f . . 
            . . f 9 9 9 f 9 1 f . . 
            . . f 1 1 1 f c c f . . 
            . . f c c c f 7 6 f . . 
            . . . f f c c f f . . . 
            . . . . . f f f . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . . f 7 7 7 7 7 7 f f . 
            . f 7 7 7 7 7 7 7 6 f f 
            f 7 7 7 6 6 6 7 6 6 6 f 
            f 7 7 6 f f 6 7 6 6 6 f 
            f 7 6 f 1 f 7 7 6 6 6 f 
            f 7 f 1 f f 7 6 6 6 6 f 
            f 7 f f f 7 7 6 6 6 6 f 
            f 7 7 7 7 7 6 6 6 6 f . 
            . f 7 7 7 6 6 f f f f . 
            . . f 6 6 6 f f 9 f . . 
            . . f 9 1 f 7 c 1 f . . 
            . f f c c f 6 c 1 f f . 
            . f f f f f f f f f f . 
            . . f f f . . . f f . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . . f 7 7 7 7 7 7 f f . 
            . f 7 7 7 7 7 7 7 6 f f 
            f 7 7 7 6 6 6 7 6 6 6 f 
            f 7 7 6 f f 6 7 6 6 6 f 
            f 7 6 f 1 f 7 7 6 6 6 f 
            f 7 f 1 f f 7 6 6 6 6 f 
            f 7 f f f 7 7 6 6 6 6 f 
            f 7 7 7 7 7 6 6 6 6 f . 
            . f 7 7 7 6 6 f f f f . 
            . . f 6 6 6 f 9 9 c c f 
            . . f 9 9 1 f 1 c 7 7 f 
            . f f c c c c f f 6 6 f 
            . f f f f f f f f f f . 
            . . f f f . . . f f . . 
            `],
        200,
        characterAnimations.rule(Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
        playersprite,
        [img`
            . . . . f f f f f . . . 
            . . f f 7 7 7 7 7 f . . 
            . f 6 7 7 7 7 7 7 7 f . 
            f 6 6 7 7 6 6 6 7 7 7 f 
            f 6 6 6 7 6 f f 6 7 7 f 
            f 6 6 6 7 7 f 1 f 6 7 f 
            f 6 6 6 7 7 f f 1 f 7 f 
            f 6 6 6 6 7 7 f f f 7 f 
            . f 6 6 6 7 7 7 7 7 7 f 
            . f f f 6 6 6 7 7 7 f . 
            . . f f f 6 6 6 6 f . . 
            . . f 1 9 f 9 9 9 f . . 
            . . f c c f 1 1 1 f . . 
            . . f 6 7 f c c c f . . 
            . . . f f c c f f . . . 
            . . . . f f f . . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . f f 7 7 7 7 7 7 f . . 
            f f 6 7 7 7 7 7 7 7 f . 
            f 6 6 6 7 6 6 6 7 7 7 f 
            f 6 6 6 7 6 f f 6 7 7 f 
            f 6 6 6 7 7 f 1 f 6 7 f 
            f 6 6 6 6 7 f f 1 f 7 f 
            f 6 6 6 6 7 7 f f f 7 f 
            . f 6 6 6 6 7 7 7 7 7 f 
            . f f f f 6 6 7 7 7 f . 
            . . f 9 f f 6 6 6 f . . 
            . . f 1 c 7 f 1 9 f . . 
            . f f 1 c 6 f c c f f . 
            . f f f f f f f f f f . 
            . . f f . . . f f f . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . f f 7 7 7 7 7 7 f . . 
            f f 6 7 7 7 7 7 7 7 f . 
            f 6 6 6 7 6 6 6 7 7 7 f 
            f 6 6 6 7 6 f f 6 7 7 f 
            f 6 6 6 7 7 f 1 f 6 7 f 
            f 6 6 6 6 7 f f 1 f 7 f 
            f 6 6 6 6 7 7 f f f 7 f 
            . f 6 6 6 6 7 7 7 7 7 f 
            . f f f f 6 6 7 7 7 f . 
            f c c 9 9 f 6 6 6 f . . 
            f 7 7 c 1 f 1 9 9 f . . 
            f 6 6 f f c c c c f f . 
            . f f f f f f f f f f . 
            . . f f . . . f f f . . 
            `],
        200,
        characterAnimations.rule(Predicate.MovingRight)
        )
    }
    if (level == 2) {
        sprites.destroy(cursor)
        sprites.destroy(Help)
        sprites.destroy(Play)
        sprites.destroy(title)
        Back_button = sprites.create(assets.image`back button`, SpriteKind.Button)
        cursor = sprites.create(assets.image`myImage7`, SpriteKind.Player)
        Back_button.setPosition(44, 107)
        controller.moveSprite(cursor)
        scene.setBackgroundImage(assets.image`myImage0`)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Button, function (sprite, otherSprite) {
    if (otherSprite == Play && controller.A.isPressed()) {
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
        level = 1
        level_control()
    }
    if (otherSprite == Back_button && controller.A.isPressed()) {
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
        level = 0
        level_control()
    }
    if (otherSprite == Help && (controller.A.isPressed() && !(otherSprite == Help))) {
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
        level = 2
    }
})
let playersprite: Sprite = null
let title: Sprite = null
let Help: Sprite = null
let Play: Sprite = null
let Back_button: Sprite = null
let cursor: Sprite = null
let level = 0
level = 0
level_control()
