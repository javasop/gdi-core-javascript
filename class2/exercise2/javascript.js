function calculate(){

    var income = 100;

    var days = 30;

    var per_day = income/days;

    var per_week= per_day * 7;

    if(per_day > 5){
        alert("You have $" + per_day + " to spend per day and $"+per_week+" spend per week. You are Rich!" );
    }else{
        alert("You have $" + per_day + " to spend per day and $"+per_week+" spend per week , Make some phone calls!" );
    }
}

function favoriteThings(){
    var favoriteThings = ['Rabbits', 'Orange', 'Yogurt', 'Brussel Sprouts', 'Otters'];
    var result = 'My favorite things are: ';
    for (var i = 0; i<favoriteThings.length; i++){
        if (i < favoriteThings.length - 1){
            result += favoriteThings[i] + ', ';
        }else{
            result += "and " + favoriteThings[i] + '.';
        }
    }
    alert(result);
}
function myFriends(){
    var friends = [
        {name: 'Santa Claus',
        hair: 'red'},
        {name: 'Easter Bunny',
        hair: 'brown'},
        {name: 'Tooth Fairy',
        hair: 'blue'}
    ];
    var results = "My friends: "
    for(var i = 0; i < friends.length; i++){
        results += describeFriend(friends[i]);
    }
    alert(results)
}
function describeFriend(friend){
    return "My friend " + friend.name + " has " + friend.hair + " hair. ";
}