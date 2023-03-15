// https://learnersbucket.com/examples/interview/program-to-find-friend-of-friends/

const mutualFriends = (mapping, person) => {
    const friendsList = mapping[person];

    if(friendsList && friendsList.length > 0) {
        const finalList = [...friendsList]
        for(let friend of friendsList) {
            const mutualFriendsList = mutualFriends(mapping, friend);
            finalList.push(...mutualFriendsList);
        }

        return finalList;
    }

    return [] // if there are no friends 
}


const mapping = {
    a: ['b', 'c'],
    b: ['d', 'g'],
    d: ['p', 'q'],
    l: ['x', 'y']
  };
  
  console.log(mutualFriends(mapping, 'a'));
  
//   Output:
//   ["b","c","d","g","p","q"]