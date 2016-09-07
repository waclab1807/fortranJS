/**
 * Created by waclabdev on 28.08.16.
 */

app.factory('helpers', function() {

    function changeDotToNormal (string) {
        var split = string.split(".");
        var licz = split[0] + split[1];
        var mian = '1' + generateZeros(split[1].length);

        return licz + '/' + mian;
    }

    function generateZeros (count) {
        var zeros = '';
        var counter = parseInt(count);
        while(counter > 0) {
            zeros = zeros + '0';
            counter--;
        }

        return zeros;
    }

    function NWD_2 (first, second) {
        if (second == 0) {
            return first;
        } else {
            return NWD_2(second, first % second);
        }
    }

    function czyJestCalkowita (string) {
        if (parseFloat(string) - parseInt(string) == 0) {
            return parseInt(string);
        } else {
            return parseFloat(string)
        }
    }

    return {
        changeDotToNormal: changeDotToNormal,
        NWD_2: NWD_2,
        czyJestCalkowita: czyJestCalkowita
    }
});