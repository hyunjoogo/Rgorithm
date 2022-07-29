# https://leetcode.com/problems/maximum-depth-of-binary-tree/



def maxDepth(root):
  if not root : return 0
  return max(maxDepth(root.left), maxDepth(root.right)) + 1



def maxDepth(root):
  if not root : return 0
  return 1 + checkTree(root.left, root.right)

def checkTree(left, right):
  if not left and not right: return 0
  l, r = 0,0
  if left : 
    l = checkTree(left.left, left.right)
  if right : 
    r = checkTree(left.left, left.right)
  return (1 + max(l, r))