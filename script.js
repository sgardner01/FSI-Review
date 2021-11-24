

let dogVotes = localStorage.getItem('dogVotes'); 
if (dogVotes === null) {
    dogVotes = 0;
} else {
    dogVotes = parseInt(dogVotes)
}
document.querySelector("#doggo-votes").textContent = dogVotes;




let catVotes = localStorage.getItem('catVotes')
if (catVotes === null) {
    catVotes = 0;
} else {
    catVotes = parseInt(catVotes)
}
document.querySelector("#catto-Votes").textContent = catVotes;





let fishVotes = localStorage.getItem('fishVotes')
if (fishVotes === null) {
    fishVotes = 0;
} else {
    fishVotes = parseInt(fishVotes)
}
document.querySelector("#fish-votes").textContent = fishVotes;






















// selectors for each individual animal div
let dogDiv = document.querySelector("#doggo");
let dogVoteBtn = document.createElement('button');
dogVoteBtn.textContent = "Vote For Doggo";
dogDiv.append(dogVoteBtn);

dogVoteBtn.addEventListener('click', function(){
    dogVotes = dogVotes + 1;
    document.querySelector("#doggo-votes").textContent = dogVotes;
    localStorage.setItem('dogVotes', dogVotes);
})
let subdogVoteBtn = document.createElement("button");
subdogVoteBtn.textContent = "Remove Doggo Vote";
dogDiv.append(subdogVoteBtn);

subdogVoteBtn.addEventListener('click', function(e) {
    // if (dogVotes > 0){
    dogVotes = dogVotes - 1;
    localStorage.setItem('dog-votes', dogVotes);
    console.log(dogVotes)
    // }
});















let catDiv = document.querySelector("#catto");
let catVoteBtn = document.createElement('button');
catVoteBtn.textContent = "Vote For Catto";
catDiv.append(catVoteBtn)

catVoteBtn.addEventListener('click', function(){
    catVotes = catVotes + 1;
    document.querySelector("#catto-Votes").textContent = catVotes;
    localStorage.setItem('catVotes', catVotes);
})
let subcatVoteBtn = document.createElement("button");
subcatVoteBtn.textContent = "Remove Catto Vote";
catDiv.append(subcatVoteBtn);









let fishDiv = document.querySelector("#fish");
let fishVoteBtn = document.createElement('button');
fishVoteBtn.textContent = "Vote For Fish"
fishDiv.append(fishVoteBtn);

fishVoteBtn.addEventListener('click', function(){
    fishVotes = fishVotes + 1;
    document.querySelector("#fish-votes").textContent = fishVotes;
    localStorage.setItem('fishVotes', fishVotes);
})
let subfishVoteBtn = document.createElement("button");
subfishVoteBtn.textContent = "Remove Fish Vote";
fishDiv.append(subfishVoteBtn);
