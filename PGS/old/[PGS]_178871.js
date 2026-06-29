//달리기 경주

function solution(players, callings) {
  const indexMap = {};

  for (let i = 0; i < players.length; i++) {
    indexMap[players[i]] = i;
  }

  for (let i = 0; i < callings.length; i++) {
    const calledPlayer = callings[i];
    const currentIndex = indexMap[calledPlayer];

    if (currentIndex > 0) {
      const frontPlayer = players[currentIndex - 1];
      [players[currentIndex - 1], players[currentIndex]] = [
        players[currentIndex],
        players[currentIndex - 1],
      ];

      indexMap[calledPlayer] = currentIndex - 1;
      indexMap[frontPlayer] = currentIndex;
    }
  }
  return players;
}
