let power = false;

function togglePower() {
    power = !power; // تقليب حالة الطاقة

    if (power === false) {
        console.log("Power is off");
    } else {
        console.log("Power is on");
    }
}

let speed = 0;

function increaseSpeed() {
    if (!power) {
        console.log("Can't increase speed. Power is off.");
    } else {
        speed += 1;

        if (speed > 3) {
            speed = 1;
        }

        console.log("Speed is now", speed);
    }
}

let temperature = 24;

function decreaseTemperature() {
    if (!power) {
        console.log("Can't decrease temperature. Power is off.");
    } else {
        if (temperature > 16) {
            temperature -= 1;
            console.log("Temperature is now", temperature);
        } else {
            console.log("Minimum temperature reached (16°C)");
        }
    }
}

function increaseTemperature() {
    if (!power) {
        console.log("Can't increase temperature. Power is off.");
    } else {
        if (temperature < 28) {
            temperature += 1;
            console.log("Temperature is now", temperature);
        } else {
            console.log("Maximum temperature reached (28°C)");
        }
    }
}
