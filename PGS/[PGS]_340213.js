//[PCCP 기출문제] 1번 / 동영상 재생기

function solution(video_len, pos, op_start, op_end, commands) {
  let [videoMin, videoSec] = video_len.split(":").map(Number);
  let [curMin, curSec] = pos.split(":").map(Number);
  let [opStartMin, opStartSec] = op_start.split(":").map(Number);
  let [opEndMin, opEndSec] = op_end.split(":").map(Number);

  const isInOpening = (cm, cs) => {
    if (
      (cm > opStartMin || (cm === opStartMin && cs >= opStartSec)) &&
      (cm < opEndMin || (cm === opEndMin && cs <= opEndSec))
    ) {
      curMin = opEndMin;
      curSec = opEndSec;
    }
  };

  for (let i = 0; i < commands.length; i++) {
    isInOpening(curMin, curSec);
    let command = commands[i];

    if (command === "prev") {
      if (curMin === 0 && curSec < 10) {
        curMin = 0;
        curSec = 0;
      } else {
        curSec = curSec - 10;
        if (curSec < 0) {
          curMin--;
          curSec = 60 - Math.abs(curSec);
        }
      }
    } else {
      curSec = curSec + 10;
      if (curSec > 59) {
        curMin++;
        curSec = Math.abs(60 - curSec);
      }

      if (videoMin === curMin && videoSec - curSec < 10) {
        curMin = videoMin;
        curSec = videoSec;
      }
    }
  }

  isInOpening(curMin, curSec);

  if (curMin < 10) curMin = "0" + curMin.toString();
  if (curSec < 10) curSec = "0" + curSec.toString();

  return curMin + ":" + curSec;
}
