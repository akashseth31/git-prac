function calAngle(h, m) {
    if (h < 0 || m < 0 || h > 12 || m > 60) {
        return "Wrong input";
    }

    if (h === 12) h = 0;
    if (m === 60) m = 0;

    const hour_angle = 0.5 * ((h * 60) + m);
    const min_angle = 6 * m;

    const angle = Math.abs(hour_angle - min_angle);

    return Math.min(360 - angle, angle);
}

console.log(calAngle(3, 30));
console.log(calAngle(12, 59));
console.log(calAngle(9, 75));
