let temp = 0
OLED.init(64, 128)
basic.forever(function () {
    temp = smarthome.ReadTemperature(TMP36Type.TMP36_temperature_C, AnalogPin.P1)
    OLED.clear()
    OLED.writeString("temp")
    OLED.writeNum(temp)
    if (temp >= 5) {
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
})
