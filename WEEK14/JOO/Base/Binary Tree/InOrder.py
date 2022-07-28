from lib2to3.pytree import Node


def inOrderTraversal(root) : 
  visited = []
  def inOrder(node):
    if (node == None):
      return None
    inOrder(node.left)
    visited.append(node.val)
    inOrder(node.right)
  inOrder(root)
  return visited