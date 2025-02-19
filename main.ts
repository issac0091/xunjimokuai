OLED.init(128, 64)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P5) == 0) {
        OLED.writeString("White!")
        basic.pause(1000)
        OLED.clear()
    } else {
        OLED.writeString("Black!")
        basic.pause(1000)
        OLED.clear()
    }
})
