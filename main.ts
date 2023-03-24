let j = 0
let i = 0
basic.forever(function () {
    j = 0
    for (let index = 0; index < 5; index++) {
        i = 0
        for (let index = 0; index < 5; index++) {
            led.plot(i, j)
            basic.pause(100)
            led.unplot(i, j)
            basic.pause(100)
            i += 1
        }
        j += 1
    }
})
