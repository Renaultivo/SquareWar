export function getRandomNumber(min, max) {

    let value = Math.floor(
        Math.random() * max
    );

    if (value < min) {
        value = min;
    }

    return value;

}