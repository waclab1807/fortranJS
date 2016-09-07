/**
 * Created by waclabdev on 28.08.16.
 */

app.factory('pi', function() {
    function Pi (string) {

        function pi(before) {
            this.before = before;
        }

        var split = string.split("π");

        return new pi(split[0]);
    }

    return {
        Pi: Pi
    }
});
