const keyboard = [
  ["가", "호", "저", "론", "남", "드", "부", "이", "프", "설"],
  ["알", "크", "청", "울", "키", "초", "트", "을", "배", "주"],
  ["개", "캠", "산", "대", "단", "지", "역", "구", "너", "양"],
  ["라", "로", "권", "교", "마", "쿼", "파", "송", "차", "타"],
  ["코", "불", "레", "뉴", " ", "서", "한", "산", "리", "개"],
  ["터", "강", "봄", "토", "캠", "상", "호", "론", "운", "삼"],
  ["보", "람", "이", "경", "아", "두", "프", "바", "트", "정"],
  ["스", "웨", "어", "쿼", "일", "소", "라", "가", "나", "도"],
  ["판", "자", "비", "우", "사", "거", "왕", "태", "요", "품"],
  ["안", "배", "차", "캐", "민", "광", "재", "봇", "북", "하"],
];

function isInclude(str) {
  for (let i = 0; i < keyboard.length; i++) {
    if (keyboard[i].includes(str)) {
      return true;
    }
  }
  return false;
}

console.log(isInclude("랄"));
