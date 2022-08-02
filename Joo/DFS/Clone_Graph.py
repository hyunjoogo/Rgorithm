class Solution:
    def cloneGraph(self, node: 'Node') -> 'Node':
      mapping = {}
      def helper(node):
        if not node:
          return node
        elif id(node) in mapping:
          return mapping[id(node)]

        mapping[ id(node) ] = Node( val=node.val, neighbors=[] )
        for original_neighbor in node.neighbors:
                # update neighbor list for current node
          mapping[ id(node) ].neighbors.append( helper(original_neighbor) )
            
          return  mapping[ id(node) ]

    return helper(node)




# 이게 DFS랑 무슨 상관이 있는거야???


