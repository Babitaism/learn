x = {
  root: {
    id: 1,
    parentId: null,
    text: "Sadar",
    children: [
      {
        id: 2,
        parentId: 1,
        text: "Geeta",
        children: [
          {
            id: 5,
            parentId: 2,
            text: "Aarav",
      
          },
          {
            id: 6,
            parentId: 2,
            text: "Baby",
            children: [
              {
                id: 9,
                parentId: 6,
                text: "Baby2",
                children: [
                  {
                    id: 10,
                    parentId: 9,
                    text: "Baby2-1",
                   
                  },
                  {
                    id: 11,
                    parentId: 9,
                    text: "Baby2-2",
                    
                  },
                ],
              },
              {
                id: 8,
                parentId: 6,
                text: "Baby1",
                
              },
            ],
          },
        ],
      },
      {
        id: 3,
        parentId: 1,
        text: "Pardeep",
        children: [
          {
            id: 7,
            parentId: 3,
            text: "Rojer",
            
          },
        ],
      },
      {
        id: 4,
        parentId: 1,
        text: "Babita",
        children: [
          {
            id: 12,
            parentId: 4,
            text: "Rishu",
          
          },{
            id: 92,
            parentId: 4,
            text: "Rishu ka bhai",
          
          }
        ],
      },
    ],
  },
};
function dfs(x) {
  let currentNode = x.root;
  console.log(currentNode.text)
  let visitedNode = {};
  let stack = [];
  visitedNode[currentNode.text] = true;
  debugger;
  let children = currentNode.children;
  for (i in children) {
    stack.push(children[i]);
  }

  while (stack.length != 0) {
    currentNode = stack.pop();
    console.log(currentNode.text);
    visitedNode[currentNode.text] = true;
    children = currentNode.children;
    if (visitedNode != true) {
      for (i in children) {
        stack.push(children[i]);
      }
    }
  }
}

dfs(x);
