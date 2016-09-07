/**
 * Created by waclabdev on 28.08.16.
 */

app.factory('potega', function() {
    function Potega (string) {

        function potega(before, after) {
            this.before = before;
            this.after = after;
        }

        var split = string.split("^");

        return new potega(split[0], split[1]);
    }

    return {
        Potega: Potega
    }
});
