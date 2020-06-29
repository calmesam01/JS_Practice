myFriends = ["Sam", "Lav", "Vis", "Kar", "Sat", "Rhy", "Ris", "Kun"];
var friends = document.getElementById("friends");
friends.innerHTML = "My Friends are: "
for (i in myFriends) {
    var friend = document.createElement("li");
    friend.innerHTML = myFriends[i];
    friends.appendChild(friend);
}
