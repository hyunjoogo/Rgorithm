function solution(skill, skill_trees) {
  var answer = 0;
  for (let i = 0; i < skill_trees.length; i++) {
    let canUse = true;
    let selectedTree = skill_trees[i];
    let learnedSkill = new Array(skill.length).fill(0);
    for (let j = 0; j < selectedTree.length; j++) {
      if (!skill.includes(selectedTree[j])) {
        continue;
      }
      if (learnedSkill.slice(0, skill.indexOf(selectedTree[j])).includes(0)) {
        canUse = false;
        break;
      } else {
        learnedSkill[skill.indexOf(selectedTree[j])] = 1;
      }
    }
    if (canUse) {
      answer += 1;
    }
  }
  return answer;
}
