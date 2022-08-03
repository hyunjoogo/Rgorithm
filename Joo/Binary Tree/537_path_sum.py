'''
재귀함수로 true, false를 리턴하는 문제이면
재귀함수의 return 값을 함수결과값 or 함수결과값 리턴하거나
함수결과값 and 함수결과값을 리턴하라.
'''

def hasPathSum(root, targetSum):
  if not root:
    return False
  elif not root.left and not root.right and targetSum - root.val == 0:
    return True
  else : 
    return hasPathSum(root.left, targetSum - root.val) or hasPathSum(root.right, targetSum - root.val)