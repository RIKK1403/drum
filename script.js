var sound = new Howl({
    src: ['drums2.mp3','drums2.webm'],
    sprite: {
        "close": [
            0,
            744.0136054421769
        ],
        "crash": [
            2000,
            6240
        ],
        "kick": [
            10000,
            1295.9863945578238
        ],
        "open": [
            13000,
            1560.0000000000005
        ],
        "ride": [
            16000,
            6455.986394557822
        ],
        "snare": [
            24000,
            1152.0181405895685
        ],
        "splash": [
            27000,
            5135.986394557825
        ],
        "tom": [
            34000,
            2255.9863945578227
        ]
    }
});

$(document).ready(function () {
    $("#close").click(function () {
        sound.play('close');
        console.log('close');
    });

    $("#crash").click(function () {
        sound.play('crash');
        console.log('crash');
    });

    $("#kick").click(function () {
        sound.play('kick');
        console.log('kick');
    });

    $("#open").click(function () {
        sound.play('open');
        console.log('open');
    });

    $("#ride").click(function () {
        sound.play('ride');
        console.log('ride');
    });

    $("#snare").click(function () {
        sound.play('snare');
        console.log('snare');
    });

    $("#snare2").click(function () {
        sound.play('snare');
        console.log('snare2');
    });

    $("#splash").click(function () {
        sound.play('splash');
        console.log('splash');
    });

    $("#tom").click(function () {
        sound.play('tom');
        console.log('tom');
    });
});