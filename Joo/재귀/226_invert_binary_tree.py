# https://leetcode.com/problems/invert-binary-tree/

class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        # root부터 왼쪽과 오른쪽을 바꾸어라
        if root : 
            root.left, root.right = root.right, root.left
            if root.left:
                self.invertTree(root.left)
            if root.right:
                self.invertTree(root.right)
            return root
        else:
            return None

# 재귀함수 접근
# 처음 접근할 때 반복적으로 하는 행동을 생각해야한다.
# 그리고 돌다 언제 끝나야할 것인가를 생각하라.


