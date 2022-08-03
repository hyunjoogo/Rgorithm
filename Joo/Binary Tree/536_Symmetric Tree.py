# 재귀함수의 left, right 값을 넣어준다.
# - 둘 다 존재하지 않으면 True
# - 둘 중 하나만 존재하면 False
# - 둘의 값이 같고 재귀함수 (left.left, right.right)가 True이고 left.right, right.left가 True



def isSymmetric(root) -> bool:
  def recur(root1, root2):
    if not root1 and not root2:
      return True
    if not root1 or not root2:
      return False
    if root1.val != root2.val:
      return False
    left = recur(root1.left, root2.right)
    right = recur(root1.right, root2.left)
    return left and right
  return recur(root.left, root.right)