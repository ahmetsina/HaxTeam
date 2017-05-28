/**
 * Created by ahmetsina on 06/05/2017.
 */
$(document).ready(function() {
    var Players = {};

    $("#btn").click(function () {

        var player_name = $("#player_name").val();
        var player_exp = $("#exp").val();
        var markup = "<tr><td><input type='checkbox' name='record'></td><td>" + player_name + "</td><td>" + player_exp + "</td></tr>";
        var deleteButton = "<div class='row'><button type='button' id='deleteBtn' class='btn btn-danger col-md-2 offset-md-10'>Sil</button></div>"
        $("#playTable").append(markup);
        Players.push({
            key: player_name,
            value: player_exp
        });
        $('#player_name').val("");
        $('#player_exp').val(1);


    });
    $("#deleteBtn").click(function () {
        $("table tbody").find('input[name="record"]').each(function () {
            if ($(this).is(":checked")) {
                $(this).parents("tr").remove();
            }
        });
    });
    $("#createTeams").click(function () {


        var teamA = [];
        var teamB = [];
        var teamz = [teamA, teamB];
        var as = 0;
        var ln = Players.length;

        if (ln > 3) {
            sortPlayers(Players);
            console.log(Players);
            var best = Players[Players.length - 1];
            console.log(best);
            //console.log(best.key);
            teamA.push(best);
            console.log(teamA);
            for (var i = ln - 2; i >= 0; i = i - 3) {
                teamz[0].push(Players[i]);
                teamz[0].push(Players[i - 1]);
                teamz[1].push(Players[i-2]);
                teamz[1].push(Players[i - 3]);
            }

        }
      for (var i = 0; i <= teamA.length; i++) {
          var markup = "<tr><td><input type='checkbox' name='record'></td><td>" + teamA[i].key + "</td><td>" + teamA[i].value + "</td></tr>";
          $("#teamA").append(markup);

      }
        for (var i = 0; i <= teamB.length; i++) {
            var markup = "<tr><td><input type='checkbox' name='record'></td><td>" + teamB[i].key + "</td><td>" + teamB[i].value + "</td></tr>";
            $("#teamB").append(markup);

        }
    });

    teamA = {};
    teamB = {};
});

// En iyi oyuncuyu atama
function assignBest(best,team) {
    team.push = best;
}

