var bobsFollowers = ['Tyson', 'Rook', 'Dekker', 'Tuukka'];
var tinasFollowers = ['Rook', 'Tuukka', 'Willie'];
var mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}
