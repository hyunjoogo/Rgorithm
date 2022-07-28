    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        visited =[]
        def postOrder(node):
            if (node == None):
                return None
            postOrder(node.left)
            postOrder(node.right)
            visited.append(node.val)
        postOrder(root)
        return visited