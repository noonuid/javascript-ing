let json = [{
    id: 1,
    label: '1',
    parentId: 0
}, {
    id: 2,
    label: '2',
    parentId: 0
}, {
    id: 3,
    label: '3',
    parentId: 0
}, {
    id: 4,
    label: '1-1',
    parentId: 1
}, {
    id: 5,
    label: '2-1',
    parentId: 2
}, {
    id: 6,
    label: '2-2',
    parentId: 2
}, {
    id: 7,
    label: '3-1',
    parentId: 3
}, {
    id: 8,
    label: '3-2',
    parentId: 3
}, {
    id: 9,
    label: '1-1-1',
    parentId: 4
}, {
    id: 10,
    label: '2-1-1',
    parentId: 5
}, {
    id: 11,
    label: '2-2-1',
    parentId: 6
}, {
    id: 12,
    label: '3-1-1',
    parentId: 7
}, {
    id: 13,
    label: '3-2-1',
    parentId: 8
}];

class TreeItem {
    constructor(id,label,parentId) {
        this.id=id;
        this.label = label;
        this.parentId=parentId;
        this.children = [];
    }
}

class TreeData {
    constructor() {
        this.data = [];
    }
}

function getTreeData() {
    // 树形数据
    let treeData = new TreeData();

    json.forEach(element => {
        if (element.parentId === 0) {// 选出根目录
            let root = new TreeItem(element.id,element.label,element.parentId);
            // 将根目录加入 treeData.data
            treeData.data.push(root);
            // 获取根目录的子目录
            getChildren(root);
        }
    });

    return treeData.data;
}

function getChildren(treeItem) {
    json.forEach(element => {
        if (element.parentId === treeItem.id) {
            let child = new TreeItem(element.id,element.label,element.parentId);
            treeItem.children.push(child);
            // 递归获取当前目录的子目录
            getChildren(child);
        }
    });
}