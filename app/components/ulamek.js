/**
 * Created by waclabdev on 28.08.16.
 */

app.factory('ulamek', function() {
    function Ulamek (string) {

        function ulamek(before, after) {
            this.before = before;
            this.after = after;
        }

        if (string.includes('/')){
            var split = string.split('/');
            return new ulamek(split[0], split[1]);
        } else {
            return new ulamek(string, '1');
        }

    }

    return {
        Ulamek: Ulamek
    }
});
