let babitaFamily = {
  id: 1,
  parentId: null,
  text: "Sadar",
  children: [
    { id: 2, parentId: 1, text: "Geeta", children: [{id: 5, parentId: 2, text: "Aarav",children:[{}]},
     {id: 6, parentId: 2, text: "Baby",children:[{id: 9, parentId: 6, text: "Baby2",children:[{id: 10, parentId: 9, text: "Baby2-1",children:[{}]},{id: 11, parentId: 9, text: "Baby2-2",children:[{}] }]},{id: 8, parentId: 6, text: "Baby1",children:[{}]}]}] },
    { id: 3, parentId: 1, text: "Pardeep", children: [{id: 7, parentId: 3, text: "Rojer",children:[{}]}] },
    { id: 4, parentId: 1, text: "Babita", children: [{id: 12, parentId: 4, text: "Rishu",children:[{}]}] },
  ],
};
