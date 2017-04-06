/**
 * Created by waclabdev on 28.08.16.
 */

app.factory('pierwiastek', function() {
    function Pierwiastek (string) {

        if(string.startsWith("-√")) {
            string = string.replace("-\u221a", "(-1)\u221a");
        }

        if(string.startsWith("√")) {
            string = string.replace("\u221a", "(1)\u221a");
        }

        if(!string.includes("(") && !string.includes(")")){
            string = "(" + string.replace("\u221a", ")\u221a(") + ")";
        }

        if(string.startsWith("()√")) {
            string = string.replace("()\u221a", "(1)\u221a");
        }

        if(string.startsWith("√")) {
            string = string.replace("\u221a", "(1)\u221a");
        }

        if(!string.contains(")√")) {
            string = string.replace("\u221a", ")\u221a");
            string = string.substring(0,string.length()-1);
        }

        var tmp = string.split("\u221a");
        var a, b;
        if (tmp.length > 2) {         //pierwiastek z pierwiastka
            a = string.substring(0, string.indexOf("\u221a") + 1);
            b = string.substring(string.indexOf("\u221a") + 1, string.length());
            b = b.replace("\u221a", "|");
            string = a + b;
        }
        var t = pierwiastek.split("\u221a");

        if(t[0].startsWith("(") && t[0].endsWith(")")) {
            var x = t[0].substring(1, t[0].length() - 1);       //jak first albo inside jest dzialaniem to zamienia nawiasy na kwadratowe
            console.log("pierwKonstrx " + t[0] + " & " + x);
            x = x.replace("(", "[");
            x = x.replace(")", "]");
            console.log("pierwKonstrPox " + x);
            t[0] = x;
        }

        if(t[1].contains("(") && t[1].includes(")")) {
            var y = t[1].substring(1, t[1].length() - 1);
            console.log("pierwKonstry " + t[1] + " & " + y);
            y = y.replace("(", "[");
            y = y.replace(")", "]");
            console.log("pierwKonstrPoy " + y);
            t[1] = y;
        }

        if (string.charAt(1) == ")" || string.charAt(0) == "\u221a") { // ()p(x)
            first = "1";
        } else {
            t[0] = t[0].replace("(", "");
            t[0] = t[0].replace(")", "");
            t[0] = t[0].replace("[", "(");
            t[0] = t[0].replace("]", ")");
            first = t[0];
        }

        t[1] = t[1].replace("(", "");
        t[1] = t[1].replace(")", "");
        t[1] = t[1].replace("[", "(");
        t[1] = t[1].replace("]", ")");
        t[1] = t[1].replace("|", "\u221a");
        inside = t[1];
        console.log("first " + first);
        console.log("inside " + inside);

        function pierwiastek (before, after) {
            this.before = before;
            this.after = after;
        }

        var split = string.split("\u221a");

        return new pierwiastek (split[0], split[1]);
    }

    function wartoscPierwiastka (string) {
        var p = Pierwiastek (string);

    }

    function skrocPierwiastek (pierw) {
        var pierwiastek = Pierwiastek (pierw);
        var dzielnik = 1;
        var end = true;
        var tmp, result;

        while (end) {
            tmp = Math.sqrt(parseFloat(pierwiastek.after) / dzielnik);
            if (tmp - parseInt(tmp) == 0) {
                if (dzielnik ==1) {
                    result = parseInt(parseInt(pierwiastek.before) * tmp);
                    end = false;
                } else {
                    result = '(' + (parseInt(pierwiastek.before) * tmp) + ")\u221a(" + parseInt(dzielnik) + ')';
                    end = false;
                }
            } else {
                dzielnik ++;
            }
        }
        return result;
    }

    return {
        Pierwiastek: Pierwiastek,
        wartoscPierwiastka: wartoscPierwiastka
    }
});