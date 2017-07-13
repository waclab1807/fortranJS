/**
 * Created by waclabdev on 28.08.16.
 */

app.factory('mainSwitch', ['ulamek', 'potega', 'pierwiastek', 'pi', 'helpers', function (ulamek, potega, pierwiastek, pi, helpers) {
    var count = function (val1, val2, operator) {

        var result = '';

        if (val1.includes('/')) {

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

            }

            else if (val2.includes('\u221a')) {

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

            }

            else if (val2.includes('^')) {

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

            }

            else if (val2.includes('π')) {

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

            }

            else if (val2.includes('.')) {

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

            }

            else {

                console.log('ulamek z liczbą');

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

        }

        else if (val1.includes('\u221a')) {

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

            }

            else if (val2.includes('\u221a')) {

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

            }

            else if (val2.includes('^')) {

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

            }

            else if (val2.includes('π')) {

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

            }

            else if (val2.includes('.')) {

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

            }

            else {

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

        }

        else if (val1.includes('^')) {

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

            }

            else if (val2.includes('\u221a')) {

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

            }

            else if (val2.includes('^')) {

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

            }

            else if (val2.includes('π')) {

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

            }

            else if (val2.includes('.')) {

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

            }

            else {

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

        }

        else if (val1.includes('π')) {

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

            }

            else if (val2.includes('\u221a')) {

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

            }

            else if (val2.includes('^')) {

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

            }

            else if (val2.includes('π')) {

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

            }

            else if (val2.includes('.')) {

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

            }

            else {

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

        }

        else if (val1.includes('.')) {

            if (val2.includes('.')) {

                console.log('liczba dziesiętna z liczbą dziesiętną');

                count(helpers.changeDotToNormal(val1), helpers.changeDotToNormal(val2), operator);

            }

            else {

                console.log('liczba dziesiętna z czymkolwiek');

                count(helpers.changeDotToNormal(val1), val2, operator);

            }

        }

        else {

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

            }

            else if (val2.includes('\u221a')) {

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

            }

            else if (val2.includes('^')) {

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

            }

            else if (val2.includes('π')) {

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

            }

            else if (val2.includes('.')) {

                console.log('liczba z liczba dziesietna');

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
            }

            else {

                var czyDzialanie = true;

                if (isNaN(parseFloat(val1)) || isNaN(parseFloat(val2))) {

                    console.log("wypelniony tylko jeden input")
                    czyDzialanie = false;
                    var onlyValue;

                    if (isNaN(parseFloat(val1))) {
                        onlyValue = parseFloat(val2);
                    }

                    else if (isNaN(parseFloat(val2))) {
                        onlyValue = parseFloat(val1);
                    }

                    else {
                        onlyValue = 0;
                    }
                }

                else {
                    console.log("liczba z liczba")
                    var value1 = parseFloat(val1);
                    var value2 = parseFloat(val2);
                }

                switch (operator) {

                    case '+':
                        if (czyDzialanie) {
                            console.log('liczba z liczba: dodawanie');
                            result = value1 + value2;
                        }
                        else {
                            result = onlyValue;
                        }
                        break;

                    case '-':
                        if (czyDzialanie) {
                            console.log('liczba z liczba: odejmowanie');
                            result = value1 - value2;
                        }
                        else {
                            result = onlyValue;
                        }
                        break;

                    case '*':
                        if (czyDzialanie) {
                            console.log('liczba z liczba: mnozenie');
                            result = value1 * value2;
                        }
                        else {
                            result = onlyValue;
                        }
                        break;

                    case '/':
                        if (czyDzialanie) {
                            console.log('liczba z liczba: dzielenie');
                            result = skrocUlamek(value1 + '/' + value2);
                        }
                        else {
                            result = onlyValue;
                        }
                        break;
                }
            }
        }

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

    function jakieToWyrazenie(value) {
        value = value.replace(/\s/g, ''); // remove whitespaces

        console.log('value', value, " (jakieToWyrazenie)");

        // value has brackets
        if (value.includes('(') && value.includes(')')) {
            if (value.replace(/\(([^()]*)\)/g, "") == '') {
                value = value.substring(1, value.length - 1);
            } else {
                value = value.replace(/\(([^()]*)\)/g, "$");
            }
            return jakieToWyrazenie(value);
        }

        //value has negative numbers
        else if (value.startsWith('-') || value.includes('+-') || value.includes('--') || value.includes('/-') || value.includes('*-')) {
            console.log("ujemne wartosci");

            if(value.replace(/^-|\+-|--|\*-|\/-/g, "") !== '') {
                value = value.replace(/^-/g, "");
                value = value.replace(/(-(-))/g, '-');
                value = value.replace(/(\+(-))/g, '+');
                value = value.replace(/(\/(-))/g, '/');
                value = value.replace(/(\*(-))/g, '*');
                return jakieToWyrazenie(value);
            }
        }

        // value has no brackets and no negatives values
        else {
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
            }

            else if (value.includes('*') || value.includes('/')) {
                if (value.includes('*') && !value.includes('/')) {
                    return '*';
                }
                if (!value.includes('*') && value.includes('/')) {
                    return '/';
                }
                // todo nie robić anagramu tylko złapać ostatnie wystąpienie znaku tak jak poniżej, powinno być już ok, do zbadania i trzeba przetestować potęgi, pierwiastki i pi
                var mal = value.lastIndexOf('*');
                var dev = value.lastIndexOf('/');
                //get first occurrence
                if (mal > dev) {
                    return '*';
                } else {
                    return '/';
                }
            }

            else if (value.includes('\u221a')) {
                return '\u221a';
            }

            else if (value.includes('^')) {
                return '^';
            }

            else if (value.includes('^')) {
                return '^';
            }

            else if (value.includes('π')) {
                return 'π';
            }

            else {
                return value;
            }
        }

    }

    function czyJestDzialaniem(value) {
        if (value.startsWith('-')){
            value = value.substring(1, value.length);
        }

        // tylko liczba
        if (!(value.includes('+')) && !(value.includes('-')) && !(value.includes('/')) && !(value.includes('*')) && !(value.includes('√')) && !(value.includes('^')) && !(value.includes('π'))){
            console.log("czyJestDzialaniem: tylko liczba");
            return false;
        }
        else if(jakieToWyrazenie(value).includes('*') ||
                jakieToWyrazenie(value).includes('+') ||
                jakieToWyrazenie(value).includes('-') ||
                ((value.match(/\//g) || []).length > 1)){
            return true;
        }
        else {
            return false;
        }
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
            return count(ul.befor, ul.after, '/');
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

    return {
        jakie: jakieToWyrazenie,
        count: count,
        czy: czyJestDzialaniem
    }
}]);
