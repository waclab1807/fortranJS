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

    function jakieToWyrazenie (value) {         // TODO -1*8 returns '-' but should return '*'
        value = value.replace(/\s/g, ''); // remove whitespaces

        // value has brackets
        if (value.includes('(') && value.includes(')')) {
            if (value.replace(/\(([^()]*)\)/g, "") == '') {
                value = value.substring(1, value.length-1);
            } else {
                value = value.replace(/\(([^()]*)\)/g, "$");
            }
            return jakieToWyrazenie(value);
        } else {
            // value has no brackets
            //console.log('value', value);
            if (value.includes('+') || value.includes('-')) {
                //delete minus from beginning of string
                if (value.startsWith('-')) {
                    value = value.substr(1, value.length);
                }
                if (value.includes('+') && !value.includes('-')) {
                    return '+';
                }
                if (!value.includes('+') && value.includes('-')) {
                    return '-';
                }

                var add = value.lastIndexOf('+');
                var min = value.lastIndexOf('-');
                //get first occurrence
                if (add > min) {
                    return '+';
                } else {
                    return '-';
                }
            } else if
            (value.includes('*') || value.includes('/')) {
                if (value.includes('*') && !value.includes('/')) {
                    return '*';
                }
                if (!value.includes('*') && value.includes('/')) {
                    return '/';
                }
                var mal = value.lastIndexOf('*');
                var dev = value.lastIndexOf('/');
                //get first occurrence
                if (mal > dev) {
                    return '*';
                } else {
                    return '/';
                }
            } else if (value.includes('\u221a')) {
                return '\u221a';
            } else if (value.includes('^')) {
                return '^';
            } else if (value.includes('^')) {
                return '^';
            } else if (value.includes('π')) {
                return 'π';
            } else {
                return value;
            }
        }

    }

    // function is replacing characters inside brackets with '$' sign, and splitting it by operator into array
    function devide (text, operator) {
        var arr = [];
        var change = false;
        var counter = 0;
        var textReplaced = '';

        if (text.replace(/\(([^()]*)\)/g, "") == '') {
            text = text.substring(1, text.length-1);
        }

        for (var x in text) {
            if (text[x] == '(') {
                change = true;
                counter++;
            }

            if (change && counter != 0) {
                textReplaced += '$';
            }
            if (!change && counter == 0) {
                textReplaced += text[x];
            }

            if (text[x] == ')') {
                change = false;
                counter--;
            }
        }

        var position = textReplaced.lastIndexOf(operator);

        arr[0] = text.substring(0, position);
        arr[1] = text.substring(position + 1);
        return arr;
    }

    return {
        changeDotToNormal: changeDotToNormal,
        NWD_2: NWD_2,
        czyJestCalkowita: czyJestCalkowita,
        jakieToWyrazenie: jakieToWyrazenie,
        devide: devide
    }
});