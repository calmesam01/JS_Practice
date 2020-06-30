//Object part
function Friends (name, age, hair) {
    this.name = name;
    this.age = age;
    this.hair = hair;
}
var Friend1 = new Friends ("Sam", 23, "black");
var Friend2 = new Friends ("Ram", 73, "red");
var Friend3 = new Friends ("Pam", 33, "white");

var friendsArray = [[Friend1.name, Friend1.age, Friend1.hair], [Friend2.name, Friend2.age, Friend2.hair], [Friend3.name, Friend3.age, Friend3.hair]];

//DOM part
var friends = document.getElementById("friends");
for (let i = 0; i < 3; i++) {
    let ul1 = document.createElement("ul");
    for (let j = 0; j < 3; j++) {
        let ul2 = document.createElement("ul");
        let li = document.createElement("li");

        ul1.appendChild(ul2);
        ul2.appendChild(li);

        li.innerHTML =  friendsArray[i][j];

        friends.appendChild(ul1);
    }
} 
