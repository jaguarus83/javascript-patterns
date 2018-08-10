var array = [
    {id: 4, name: 'name4', parentId: 2},
    {id: 1, name: 'name1', parentId: null},
    {id: 3, name: 'name3', parentId: 1},
    {id: 2, name: 'name2', parentId: 1},
    {id: 5, name: 'name5', parentId: null}
];

var tree = {};

array.forEach(obj => {
    var parent = array.find(function (item) { return item.id === obj.parentId});
    var child = array.find(function (item) { return item.id === obj.id});
    
    addChildToParent(parent, child);
});

function addChildToParent(parent, child) {
    if (!parent) {
        return tree[child.id] = child;
    }
    
    parent[child.id] = child;
    var newParent = array.find(function (item) { return item.id === parent.parentId});
        
    addChildToParent(newParent, parent);
}

console.log(tree);