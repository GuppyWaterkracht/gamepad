input.onButtonPressed(Button.A, function () {
    radio.sendString("VH")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "gestolen") {
        pins.analogWritePin(AnalogPin.P12, 1023)
        basic.pause(2000)
        pins.analogWritePin(AnalogPin.P12, 0)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("VL")
})
let lichten = 0
let timer = 1
pins.setPull(DigitalPin.P14, PinPullMode.PullNone)
pins.setPull(DigitalPin.P15, PinPullMode.PullNone)
pins.setPull(DigitalPin.P13, PinPullMode.PullNone)
pins.setPull(DigitalPin.P16, PinPullMode.PullNone)
pins.servoWritePin(AnalogPin.P12, 0)
basic.forever(function () {
    timer = 0
    basic.showNumber(lichten)
    if (pins.digitalReadPin(DigitalPin.P15) == 0) {
    	
    } else if (pins.digitalReadPin(DigitalPin.P14) == 0) {
    	
    } else if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        if (timer <= 0) {
            lichten += 1
            timer = 1
        }
    } else if (pins.digitalReadPin(DigitalPin.P16) == 0) {
    	
    } else if (pins.analogReadPin(AnalogPin.P2) < 400 || pins.analogReadPin(AnalogPin.P2) > 600) {
        radio.sendValue("Y", pins.analogReadPin(AnalogPin.P2) - 512)
    } else if (pins.digitalReadPin(DigitalPin.P8) == 0) {
        radio.sendString("stop")
    } else if (pins.analogReadPin(AnalogPin.P1) < 400 || pins.analogReadPin(AnalogPin.P1) > 600) {
        radio.sendValue("X", pins.analogReadPin(AnalogPin.P1) - 512)
    } else if (false) {
    	
    } else if (lichten >= 8) {
        lichten = 1
    } else {
        radio.sendValue("Y", 0)
    }
})
basic.forever(function () {
	
})
loops.everyInterval(100, function () {
    timer += -1
})
