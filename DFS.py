graph = {
    'A':['B','C','D'],'B':['E'],'C':['D','E'],'D':[],'E':[]
}

visited = set()

def dfs(graph,visited,root):
    if root not in visited:
        print(root)
        visited.add(root)
        for lev in graph[root]:
            dfs(graph,visited,lev)   #Recursion.................
    
dfs(graph,visited,'A')