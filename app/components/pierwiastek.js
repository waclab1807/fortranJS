/**
 * Created by waclabdev on 28.08.16.
 */

app.factory('pierwiastek', function() {
    function Pierwiastek (string) {

        function pierwiastek (before, after) {
            this.before = before;
            this.after = after;
        }

        var split = string.split("\u221a");

        return new pierwiastek (split[0], split[1]);
    }

    return {
        Pierwiastek: Pierwiastek
    }
});
