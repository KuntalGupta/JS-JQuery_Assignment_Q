//-------------------------------------------QUESTION2:----------------------------------------------------

// Given below an objects representing different teams in Q and #teamMembers in that team

// giventeams = {aaiec: 400, 
// aaiwc: 60, 
// qai: 200, 
// poc: 100,
// gtm: 50,
// hr: 10
// };
//         Write an efficient code to display names of the teams in descending order wrt to the #teamMembers working in the teams.

const giventeams = {
                    aaiec: 400, 
                    aaiwc: 60, 
                    qai: 200, 
                    poc: 100,
                    gtm: 50,
                    hr: 10
};

var finalarray = [];

for (var team in giventeams) {
    finalarray.push([team, giventeams[team]]);
}

finalarray.sort((a, b) => b[1] - a[1]);

for (var team of finalarray){
    console.log(`${team[0]} - ${team[1]}`)
}

//---------------------------------------------------------------------------------------------------------
