//2024 KAKAO WINTER INTERNSHIP 가장 많이 받은 선물
//1시간 소요

function solution(friends, gifts) {
  let map = {};
  let giftmap = {};
  let resultmap = {};

  for (let i = 0; i < friends.length; i++) {
    map[friends[i]] = {};
    giftmap[friends[i]] = [0, 0, 0];
    resultmap[friends[i]] = 0;
    for (let j = 0; j < friends.length; j++) {
      if (friends[i] !== friends[j]) map[friends[i]][friends[j]] = 0;
    }
  }

  for (let i = 0; i < gifts.length; i++) {
    let [giver, taker] = gifts[i].split(" ");
    map[giver][taker]++;
  }

  for (let i = 0; i < friends.length; i++) {
    let currentFriend = friends[i];
    let totalGives = Object.values(map[currentFriend]).reduce(
      (a, b) => a + b,
      0
    );
    giftmap[currentFriend][0] = totalGives;

    let totalTakes = 0;
    for (let j = 0; j < friends.length; j++) {
      if (friends[j] !== currentFriend)
        totalTakes += map[friends[j]][currentFriend];
    }
    giftmap[currentFriend][1] = totalTakes;
  }

  for (let i = 0; i < friends.length; i++) {
    let currentFriend = friends[i];
    giftmap[currentFriend][2] =
      giftmap[currentFriend][0] - giftmap[currentFriend][1];
  }

  for (let i = 0; i < friends.length; i++) {
    let currentFriend = friends[i];

    for (let j = i + 1; j < friends.length; j++) {
      let innerFriend = friends[j];

      if (map[currentFriend][innerFriend] > map[innerFriend][currentFriend]) {
        resultmap[currentFriend]++;
      } else if (
        map[currentFriend][innerFriend] === map[innerFriend][currentFriend] ||
        (map[currentFriend][innerFriend] === 0 &&
          map[innerFriend][currentFriend] === 0)
      ) {
        if (giftmap[currentFriend][2] > giftmap[innerFriend][2]) {
          resultmap[currentFriend]++;
        } else if (giftmap[currentFriend][2] < giftmap[innerFriend][2]) {
          resultmap[innerFriend]++;
        }
      } else {
        resultmap[innerFriend]++;
      }
    }
  }

  return Math.max(...Object.values(resultmap));
}
