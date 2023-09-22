bluetooth.onBluetoothConnected(function () {
    bluetooth.startUartService()
})
bluetooth.onBluetoothDisconnected(function () {
    mecanumRobotV2.MotorenAnhalten()
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Hash), function () {
    mecanumRobotV2.stelleMotorenPerBluetooth(bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash)))
})
basic.forever(function () {
    bluetooth.uartWriteNumber(mecanumRobotV2.ultra())
})
