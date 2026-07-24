//캐시
//못품 - 50분 소요

//힌트 - LRU: 가장 오래 전에 사용한 데이터 제거
function solution(cacheSize, cities) {
  let answer = 0;

  cities = cities.map((v) => v.toLowerCase());

  if (cacheSize === 0) return cities.length * 5;
  let cache = [];

  for (let i = 0; i < cities.length; i++) {
    if (cache.includes(cities[i])) {
      let cacheCityIndex = cache.indexOf(cities[i]);

      cache.splice(cacheCityIndex, 1);
      cache.push(cities[i]);

      answer += 1;
      continue;
    }

    if (cache.length === cacheSize) {
      cache.shift();
    }

    cache.push(cities[i]);

    answer += 5;
  }
  return answer;
}

console.log(solution(1, ["Jeju", "Pangyo", "NewYork"]));
