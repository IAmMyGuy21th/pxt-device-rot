// Add your code here

enum Axis {
    //% block="X"
    X,
    //% block="Y"
    Y,
}

//% icon="❍"
namespace DeviceRotation {
    function Sub(num: number) {
        return Math.asin(num) % (2 * Math.PI);
    }

    function Final(num: number) {
        return Sub(num / 1023);
    }

    function Fix(num: number) {
        if (num >= 0 && num <= 1050) {
            return num;
        } else if (num >= 3000) {
            return num - 4096;
        } else {
            return 0;
        }
    }

    //% block="Meowbit Acceleration $axis"
    export function MeowbitAccel(axis: Axis) {
        if (axis === 0) {
            return Math.constrain(-Fix(-controller.acceleration(ControllerDimension.X)), -1023, 1023);
        } else if (axis === 1) {
            return Math.constrain(Fix(controller.acceleration(ControllerDimension.Y)), -1023, 1023);
        } else {
            return Math.constrain(Fix(controller.acceleration(ControllerDimension.Z)), -1023, 1023);
        }
    }

    //% block="Get Rotation Using Acceleration $num"
    export function RotFromAccel(num: number) {
        return (Final(num));
    }
}