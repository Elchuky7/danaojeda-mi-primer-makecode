for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.Heart)
    music.playTone(262, music.beat(BeatFraction.Eighth))
    basic.showIcon(IconNames.SmallHeart)
    music.playTone(540, music.beat(BeatFraction.Eighth))
}
basic.showString("HOLA ESTOY BIEN")
