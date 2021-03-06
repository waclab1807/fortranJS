/**
 * Created by waclabdev on 28.08.16.
 */

app.factory('mainSwitch', ['ulamek', 'potega', 'pierwiastek', 'pi', 'helpers', function (ulamek, potega, pierwiastek, pi, helpers) {
    var count = function (val1, val2, operator) {
        var result = '';
        var what = '', what2 = '';
        var arr = [], arr2 = [];

        console.warn('policz:', val1, operator, val2);

        if (czyJestWyrazeniem(val1) || czyJestWyrazeniem(val2)) {
            console.log('czy', val1, 'jest wyrazeniem?', czyJestWyrazeniem(val1) ? 'tak' : 'nie');
            console.log('czy', val2, 'jest wyrazeniem?', czyJestWyrazeniem(val2) ? 'tak' : 'nie');

            if (czyJestWyrazeniem(val1) && !czyJestWyrazeniem(val2)) {
                what = helpers.jakieToWyrazenie(val1);

                arr = helpers.devide(val1, what);

                result = count(arr[0], arr[1], what);
                if (result == val1) {
                    result = result + operator + val2;
                } else {
                    result = count(result, val2, operator);
                }
            }
            if (!czyJestWyrazeniem(val1) && czyJestWyrazeniem(val2)) {
                what = helpers.jakieToWyrazenie(val2);

                arr = helpers.devide(val2, what);

                result = count(val1, count(arr[0], arr[1], what), operator);
            }
            if (czyJestWyrazeniem(val1) && czyJestWyrazeniem(val2)) {
                what = helpers.jakieToWyrazenie(val1);
                what2 = helpers.jakieToWyrazenie(val2);

                arr = helpers.devide(val1, what);
                arr2 = helpers.devide(val2, what2);

                result = count(count(arr[0], arr[1], what), count(arr2[0], arr2[1], what2), operator);
            }
        }
        else if (val1.includes('/')) {

            //var ul = ulamek.Ulamek(val1);
            //value1 = parseFloat(count(ul.before, ul.after,'/'));

            if (val2.includes('/')) {

                console.log('ulamek z ulamkiem');

                switch (operator) {
                    case '+':
                        result = dodajUlamki(val1, val2);
                        break;
                    case '-':
                        result = odejmijUlamki(val1, val2);
                        break;
                    case '*':
                        result = pomnozUlamki(val1, val2);
                        break;
                    case '/':
                        result = podzielUlamki(val1, val2);
                        break;
                }

            } else if (val2.includes('\u221a')) {

                console.log('ulamek z pierwiastkiem');

                switch (operator) {
                    case '+':
                        result = val1 + ' + ' + val2;
                        break;
                    case '-':
                        result = val1 + ' - ' + val2;
                        break;
                    case '*':
                        result = val1 + ' * ' + val2;
                        break;
                    case '/':
                        result = val1 + ' / ' + val2;
                        break;
                }

            } else if (val2.includes('^')) {

                console.log('ulamek z potęgą');

                switch (operator) {
                    case '+':
                        result = val1 + ' + ' + val2;
                        break;
                    case '-':
                        result = val1 + ' - ' + val2;
                        break;
                    case '*':
                        result = val1 + ' * ' + val2;
                        break;
                    case '/':
                        result = val1 + ' / ' + val2;
                        break;
                }

            } else if (val2.includes('π')) {

                console.log('ulamek z pi');

                switch (operator) {
                    case '+':
                        result = val1 + ' + ' + val2;
                        break;
                    case '-':
                        result = val1 + ' - ' + val2;
                        break;
                    case '*':
                        result = val1 + ' * ' + val2;
                        break;
                    case '/':
                        result = val1 + ' / ' + val2;
                        break;
                }

            } else if (val2.includes('.')) {

                console.log('ulamek z liczbą dziesiętną');

                switch (operator) {
                    case '+':
                        result = count(val1, helpers.changeDotToNormal(val2), '+');
                        break;
                    case '-':
                        result = count(val1, helpers.changeDotToNormal(val2), '-');
                        break;
                    case '*':
                        result = count(val1, helpers.changeDotToNormal(val2), '*');
                        break;
                    case '/':
                        result = count(val1, helpers.changeDotToNormal(val2), '/');
                        break;
                }

            } else {

                console.log('ulamek z liczbą');

                switch (operator) {
                    case '+':
                        result = val1 + ' + ' + val2;
                        break;
                    case '-':
                        result = val1 + ' - ' + val2;
                        break;
                    case '*':
                        result = count(val1, val2 + '/1', '*');
                        break;
                    case '/':
                        result = count(val1, '1/' + val2, '*');
                        break;
                }

            }

        } else if (val1.includes('\u221a')) {

            //var sqrt = pierwiastek.Pierwiastek(val1);
            //value1 = parseFloat(count(sqrt.before, sqrt.after,'/'));

            if (val2.includes('/')) {

                console.log('pierwiastek z ulamkiem');

                switch (operator) {
                    case '+':
                        result = val1 + ' + ' + val2;
                        break;
                    case '-':
                        result = val1 + ' - ' + val2;
                        break;
                    case '*':
                        result = val1 + ' * ' + val2;
                        break;
                    case '/':
                        result = val1 + ' / ' + val2;
                        break;
                }

            } else if (val2.includes('\u221a')) {

                console.log('pierwiastek z pierwiastkiem');

                switch (operator) {
                    case '+':
                        result = val1 + ' + ' + val2;
                        break;
                    case '-':
                        result = val1 + ' - ' + val2;
                        break;
                    case '*':
                        result = val1 + ' * ' + val2;
                        break;
                    case '/':
                        result = val1 + ' / ' + val2;
                        break;
                }

            } else if (val2.includes('^')) {

                console.log('pierwiastek z potęgą');

                switch (operator) {
                    case '+':
                        result = val1 + ' + ' + val2;
                        break;
                    case '-':
                        result = val1 + ' - ' + val2;
                        break;
                    case '*':
                        result = val1 + ' * ' + val2;
                        break;
                    case '/':
                        result = val1 + ' / ' + val2;
                        break;
                }

            } else if (val2.includes('π')) {

                console.log('pierwiastek z pi');

                switch (operator) {
                    case '+':
                        result = val1 + ' + ' + val2;
                        break;
                    case '-':
                        result = val1 + ' - ' + val2;
                        break;
                    case '*':
                        result = val1 + ' * ' + val2;
                        break;
                    case '/':
                        result = val1 + ' / ' + val2;
                        break;
                }

            } else if (val2.includes('.')) {

                console.log('pierwiastek z liczbą dziesiętną');

                switch (operator) {
                    case '+':
                        result = count(val1, helpers.changeDotToNormal(val2), '+');
                        break;
                    case '-':
                        result = count(val1, helpers.changeDotToNormal(val2), '-');
                        break;
                    case '*':
                        result = count(val1, helpers.changeDotToNormal(val2), '*');
                        break;
                    case '/':
                        result = count(val1, helpers.changeDotToNormal(val2), '/');
                        break;
                }

            } else {

                console.log('pierwiastek z liczbą');

                switch (operator) {
                    case '+':
                        result = val1 + ' + ' + val2;
                        break;
                    case '-':
                        result = val1 + ' - ' + val2;
                        break;
                    case '*':
                        result = val1 + ' * ' + val2;
                        break;
                    case '/':
                        result = val1 + ' / ' + val2;
                        break;
                }

            }

        } else if (val1.includes('^')) {

            //var pow = potega.Potega(val1);
            //value1 = parseFloat(count(pow.before, pow.after,'*'));

            if (val2.includes('/')) {

                console.log('potęga z ulamkiem');

                switch (operator) {
                    case '+':
                        result = val1 + ' + ' + val2;
                        break;
                    case '-':
                        result = val1 + ' - ' + val2;
                        break;
                    case '*':
                        result = val1 + ' * ' + val2;
                        break;
                    case '/':
                        result = val1 + ' / ' + val2;
                        break;
                }

            } else if (val2.includes('\u221a')) {

                console.log('potęga z pierwiastkiem');

                switch (operator) {
                    case '+':
                        result = val1 + ' + ' + val2;
                        break;
                    case '-':
                        result = val1 + ' - ' + val2;
                        break;
                    case '*':
                        result = val1 + ' * ' + val2;
                        break;
                    case '/':
                        result = val1 + ' / ' + val2;
                        break;
                }

            } else if (val2.includes('^')) {

                console.log('potęga z potęgą');

                switch (operator) {
                    case '+':
                        result = val1 + ' + ' + val2;
                        break;
                    case '-':
                        result = val1 + ' - ' + val2;
                        break;
                    case '*':
                        result = val1 + ' * ' + val2;
                        break;
                    case '/':
                        result = val1 + ' / ' + val2;
                        break;
                }

            } else if (val2.includes('π')) {

                console.log('potęga z pi');

                switch (operator) {
                    case '+':
                        result = val1 + ' + ' + val2;
                        break;
                    case '-':
                        result = val1 + ' - ' + val2;
                        break;
                    case '*':
                        result = val1 + ' * ' + val2;
                        break;
                    case '/':
                        result = val1 + ' / ' + val2;
                        break;
                }

            } else if (val2.includes('.')) {

                console.log('potęga z liczbą dziesiętną');

                switch (operator) {
                    case '+':
                        result = count(val1, helpers.changeDotToNormal(val2), '+');
                        break;
                    case '-':
                        result = count(val1, helpers.changeDotToNormal(val2), '-');
                        break;
                    case '*':
                        result = count(val1, helpers.changeDotToNormal(val2), '*');
                        break;
                    case '/':
                        result = count(val1, helpers.changeDotToNormal(val2), '/');
                        break;
                }

            } else {

                console.log('potęga z liczbą');

                switch (operator) {
                    case '+':
                        result = val1 + ' + ' + val2;
                        break;
                    case '-':
                        result = val1 + ' - ' + val2;
                        break;
                    case '*':
                        result = val1 + ' * ' + val2;
                        break;
                    case '/':
                        result = val1 + ' / ' + val2;
                        break;
                }

            }

        } else if (val1.includes('π')) {

            if (val2.includes('/')) {

                console.log('pi z ulamkiem');

                switch (operator) {
                    case '+':
                        result = val1 + ' + ' + val2;
                        break;
                    case '-':
                        result = val1 + ' - ' + val2;
                        break;
                    case '*':
                        result = val1 + ' * ' + val2;
                        break;
                    case '/':
                        result = val1 + ' / ' + val2;
                        break;
                }

            } else if (val2.includes('\u221a')) {

                console.log('pi z pierwiastkiem');

                switch (operator) {
                    case '+':
                        result = val1 + ' + ' + val2;
                        break;
                    case '-':
                        result = val1 + ' - ' + val2;
                        break;
                    case '*':
                        result = val1 + ' * ' + val2;
                        break;
                    case '/':
                        result = val1 + ' / ' + val2;
                        break;
                }

            } else if (val2.includes('^')) {

                console.log('pi z potęgą');

                switch (operator) {
                    case '+':
                        result = val1 + ' + ' + val2;
                        break;
                    case '-':
                        result = val1 + ' - ' + val2;
                        break;
                    case '*':
                        result = val1 + ' * ' + val2;
                        break;
                    case '/':
                        result = val1 + ' / ' + val2;
                        break;
                }

            } else if (val2.includes('π')) {

                console.log('pi z pi');

                // todo uwzględnić 'π^2' we wszystkich

                switch (operator) {
                    case '+':
                        result = dodajPi(val1, val2);
                        break;
                    case '-':
                        result = odejmijPi(val1, val2);
                        break;
                    case '*':
                        result = pomnozPi(val1, val2);
                        break;
                    case '/':
                        result = podzielPi(val1, val2);
                        break;
                }

            } else if (val2.includes('.')) {

                console.log('pi z liczbą dziesiętną');

                switch (operator) {
                    case '+':
                        result = count(val1, helpers.changeDotToNormal(val2), '+');
                        break;
                    case '-':
                        result = count(val1, helpers.changeDotToNormal(val2), '-');
                        break;
                    case '*':
                        result = count(val1, helpers.changeDotToNormal(val2), '*');
                        break;
                    case '/':
                        result = count(val1, helpers.changeDotToNormal(val2), '/');
                        break;
                }

            } else {

                console.log('pi z liczbą');

                switch (operator) {
                    case '+':
                        result = val1 + ' + ' + val2;
                        break;
                    case '-':
                        result = val1 + ' - ' + val2;
                        break;
                    case '*':
                        result = pomnozLiczbeiPi(val2, val1);
                        break;
                    case '/':
                        result = podzielLiczbeiPi(val2, val1);
                        break;
                }

            }

        } else if (val1.includes('.')) {

            if (val2.includes('.')) {

                console.log('liczba dziesiętna z liczbą dziesiętną');

                count(helpers.changeDotToNormal(val1), helpers.changeDotToNormal(val2), operator);

            } else {

                console.log('liczba dziesiętna z czymkolwiek');

                count(helpers.changeDotToNormal(val1), val2, operator);

            }

        } else {

            if (val2.includes('/')) {

                console.log('liczba z ulamkiem');
                var ul = ulamek.Ulamek(val1);

                switch (operator) {
                    case '+':
                        result = count(ul.before + '/' + ul.after, val2, '+');
                        break;
                    case '-':
                        result = count(ul.before + '/' + ul.after, val2, '-');
                        break;
                    case '*':
                        result = count(ul.before + '/' + ul.after, val2, '*');
                        break;
                    case '/':
                        result = count(ul.before + '/' + ul.after, val2, '/');
                        break;
                }

            } else if (val2.includes('\u221a')) {

                console.log('liczba z pierwiastkiem');

                switch (operator) {
                    case '+':
                        result = val1 + ' + ' + val2;
                        break;
                    case '-':
                        result = val1 + ' - ' + val2;
                        break;
                    case '*':
                        result = val1 + ' * ' + val2;
                        break;
                    case '/':
                        result = val1 + ' / ' + val2;
                        break;
                }

            } else if (val2.includes('^')) {

                console.log('liczba z potęgą');

                switch (operator) {
                    case '+':
                        result = val1 + ' + ' + val2;
                        break;
                    case '-':
                        result = val1 + ' - ' + val2;
                        break;
                    case '*':
                        result = val1 + ' * ' + val2;
                        break;
                    case '/':
                        result = val1 + ' / ' + val2;
                        break;
                }

            } else if (val2.includes('π')) {

                console.log('liczba z pi');

                switch (operator) {
                    case '+':
                        result = val1 + ' + ' + val2;
                        break;
                    case '-':
                        result = val1 + ' - ' + val2;
                        break;
                    case '*':
                        result = pomnozLiczbeiPi(val1, val2);
                        break;
                    case '/':
                        result = podzielLiczbeiPi(val1, val2);
                        break;
                }

            } else if (val2.includes('.')) {

                console.log('liczba z liczbą dziesiętną');

                switch (operator) {
                    case '+':
                        result = count(val1, helpers.changeDotToNormal(val2), '+');
                        break;
                    case '-':
                        result = count(val1, helpers.changeDotToNormal(val2), '-');
                        break;
                    case '*':
                        result = count(val1, helpers.changeDotToNormal(val2), '*');
                        break;
                    case '/':
                        result = count(val1, helpers.changeDotToNormal(val2), '/');
                        break;
                }

            } else {

                console.log('liczba z liczbą');

                var value1 = parseFloat(val1);
                var value2 = parseFloat(val2);

                switch (operator) {
                    case '+':
                        result = value1 + value2;
                        break;
                    case '-':
                        result = value1 - value2;
                        break;
                    case '*':
                        result = value1 * value2;
                        break;
                    case '/':
                        result = skrocUlamek(value1 + '/' + value2);
                        break;
                }

            }

        }

        console.warn('wynik: ', result.toString());
        return result.toString();
    };

    function usunZawartoscNawiasow(string) {
        for (var i = 0; i < string.length; i++) {
            if (value.charAt(i) == '(') {
                flagaO = i;
                counter++;
            }
            if (value.charAt(i) == ')') {

            }
        }
    }

    function removeFromBrackets(arr, a, b) {
        for (var y = a; y <= b; y++) {
            arr[y] = "$";
        }
        return arr;
    }

    function czyJestWyrazeniem(val) {
        if (helpers.jakieToWyrazenie(val).includes('*') ||
            helpers.jakieToWyrazenie(val).includes('+') ||
            (helpers.jakieToWyrazenie(val).includes('-') && !val.startsWith('-'))) {
            return true;
        }

        // jesli zawiera +, *, odejmowanie (ale nie jako pierwszy znak), dwa dzielenia
        return false;
    }

    /** get operator type */
    function operatorOperacji(string) {
        if (string.includes('+')) {
            return '+';
        } else if (string.includes('-')) {
            return '-';
        } else if (string.includes('/')) {
            return '/';
        } else if (string.includes('*')) {
            return '*';
        }
    }

    function uwymiernijUlamek(string) {
        var ul = ulamek.Ulamek(string);
        var licznik = count(ul.before(), ul.after, '*');
        var mianownik = count(ul.before(), ul.before, '*');

        return count(licznik, mianownik, '/');
    }

    function dodajUlamki(val1, val2) {

        var nominator;
        var denominator;
        var ulamek1 = ulamek.Ulamek(val1);
        var ulamek2 = ulamek.Ulamek(val2);

        if (ulamek1.after != ulamek2.after) {                // denominators aren't equal
            var nominator1 = count(ulamek1.before, ulamek2.after, '*');
            denominator = count(ulamek1.after, ulamek2.after, '*');
            var nominator2 = count(ulamek2.before, ulamek1.after, '*');
            nominator = count(nominator1, nominator2, '+');
        } else {                                            // denominators are equal
            nominator = count(ulamek1.before, ulamek2.before, '+');
            denominator = ulamek1.after;
        }

        return count(nominator, denominator, '/');
    }

    function skrocUlamek(string) {

        var ul = ulamek.Ulamek(string);
        if (ul.after == '0' || ul.after == '0.0' || ul.after == '-0' || ul.after == '-0.0') {
            console.log('nie dzieli się przez zero!');
            return 0;
        }
        if (ul.before.includes('\u221a') || ul.before.includes('^') || ul.before.includes('/') || ul.before.includes('π') || ul.after.includes('\u221a') || ul.after.includes('^') || ul.after.includes('/') || ul.after.includes('π')) {
            return count(ul.before, ul.after, '/');
        } else {
            var nwd = helpers.NWD_2(parseFloat(ul.before), parseFloat(ul.after));
            var x = parseFloat(ul.before) / nwd;
            var y = parseFloat(ul.after) / nwd;
            if (y == 1) {
                return helpers.czyJestCalkowita(x.toString());
            } else {
                return '(' + helpers.czyJestCalkowita(x.toString()) + '/' + helpers.czyJestCalkowita(y.toString()) + ')'
            }
        }
    }

    function pomnozLiczbeiPi(liczba, val2) {
        var liczbaPi = pi.Pi(val2);
        var result = count(liczba, liczbaPi.before, '*');
        if (result != 0) {
            return result + 'π';
        } else {
            return '0';
        }
    }

    function podzielLiczbeiPi(liczba, val2) {
        var liczbaPi = pi.Pi(val2);
        var tmp = count(liczba, liczbaPi.before, '/');
        if (tmp.includes('/')) {
            var ula = ulamek.Ulamek(tmp);
            return ula.before + '/' + ula.after + 'π';
        } else {
            return tmp + 'π';
        }
    }

    function odejmijUlamki(val1, val2) {
        var ul1 = ulamek.Ulamek(val1);
        var ul2 = ulamek.Ulamek(val2);
        var licznik, mianownik, licznikx, mianownikx, liczniky;

        if (ul1.after != ul2.after) {
            licznikx = count(ul1.before, ul2.after, '*');
            mianownikx = count(ul1.after, ul2.after, '*');
            liczniky = count(ul2.before, ul1.after, '*');
            licznik = count(licznikx, liczniky, '-');
            console.log(licznik);
        } else {
            licznik = count(ul1.before, ul2.before, '-');
            console.log(licznik);
            mianownikx = ul1.after;
        }
        mianownik = mianownikx;
        console.log(licznik + '/' + mianownik);
        return skrocUlamek(licznik + '/' + mianownik);
    }

    function pomnozUlamki(val1, val2) {
        var ul1 = ulamek.Ulamek(val1);
        var ul2 = ulamek.Ulamek(val2);
        var licznik, mianownik;

        licznik = count(ul1.before, ul2.before, '*');
        mianownik = count(ul1.after, ul2.after, '*');

        return count(licznik, mianownik, '/');
    }

    function podzielUlamki(val1, val2) {
        var ul1 = ulamek.Ulamek(val1);
        var ul2 = ulamek.Ulamek(val2);
        var licznik, mianownik;

        licznik = count(ul1.before, ul2.after, '*');
        mianownik = count(ul1.after, ul2.before, '*');

        return count(licznik, mianownik, '/');
    }

    function dodajPi(val1, val2) {
        var pi1 = pi.Pi(val1);
        var pi2 = pi.Pi(val2);

        var result = count(pi1.before, pi2.before, '+');

        if (result == '0') {
            return '0';
        } else {
            return result + 'π';
        }
    }

    function odejmijPi(val1, val2) {
        var pi1 = pi.Pi(val1);
        var pi2 = pi.Pi(val2);

        var result = count(pi1.before, pi2.before, '-');

        if (result == '0') {
            return '0';
        } else {
            return result + 'π';
        }
    }

    function pomnozPi(val1, val2) {
        var pi1 = pi.Pi(val1);
        var pi2 = pi.Pi(val2);

        var result = count(pi1.before, pi2.before, '*');

        if (result == '0') {
            return '0';
        } else {
            return '(' + result + ')π^2';
        }
    }

    function podzielPi(val1, val2) {
        var pi1 = pi.Pi(val1);
        var pi2 = pi.Pi(val2);

        var result = count(pi1.before, pi2.before, '/');

        if (result == '0') {
            return '0';
        } else {
            return result;
        }
    }

    function calculate (input) {
        var op = helpers.jakieToWyrazenie(input);
        var split = helpers.devide(input, op);
        return count(split[0], split[1], op);
    }

    return {
        jakie: helpers.jakieToWyrazenie,
        count: count,
        calculate: calculate
    }
}]);
