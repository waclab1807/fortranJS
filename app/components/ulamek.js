/**
 * Created by waclabdev on 28.08.16.
 */

app.factory('ulamek', function(helpers) {
    function Ulamek (string) {

        function ulamek(before, after) {
            this.before = before;
            this.after = after;
        }

        // todo uwzględnić nawiasy => (16 / 7)
        if (string.includes('/')){
            var arr = helpers.devide(string, '/');
            return new ulamek(arr[0], arr[1]);
        } else {
            return new ulamek(string, '1'); // jesli string nie byl ulamkiem to zrobi z niego ulamek => x/1
        }

    }

    return {
        Ulamek: Ulamek
    }
});
