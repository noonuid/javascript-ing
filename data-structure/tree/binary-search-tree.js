// @ts-check

import Node from './node.js';

const CompareResult = {
    LessThan: -1,
    Equal: 0,
    BiggerThan: 1
}

export default class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    /**
     * @param {number} a
     * @param {number} b
     */
    compareFn(a, b) {
        if (a === b) {
            return CompareResult.Equal;
        }
        return a < b ? CompareResult.LessThan : CompareResult.BiggerThan;
    }

    /**
     * @param {any} key
     */
    insert(key) {
        if (this.root === null) {
            this.root = new Node(key);
        }
        else {
            this.insertNode(this.root, key);
        }
    }
    /**
     * @param {Node} node
     * @param {any} key
     */
    insertNode(node, key) {
        if (this.compareFn(key, node.key) === CompareResult.LessThan) {
            if (node.left == null) {
                node.left = new Node(key);
            }
            else {
                this.insertNode(node.left, key);
            }
        }
        else if (node.right == null) {
            node.right = new Node(key);
        }
        else {
            this.insertNode(node.right, key);
        }
    }
    
    getRoot() {
        return this.root;
    }
    /**
     * @param {number} key
     * @return {boolean} 指示查找的值是否存在
     */
    search(key) {
        return this.searchNode(this.root, key);
    }
    /**
     * @param {Node} node
     * @param {number} key
     */
    searchNode(node, key) {
        if (node == null) {
            return false;
        }
        if (this.compareFn(key, node.key) === CompareResult.LessThan) {
            return this.searchNode(node.left, key);
        }
        else if (this.compareFn(key, node.key) === CompareResult.BiggerThan) {
            return this.searchNode(node.right, key);
        }
        return true;
    }
    /**
     * @param {Function} callback
     */
    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this.root, callback);
    }
    /**
     * @param {Node} node
     * @param {Function} callback
     */
    preOrderTraverseNode(node, callback) {
        if (node != null) {
            callback(node.key + ' ');
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
        }
    }
    /**
     * @param {(arg0: any) => void} callback
     */
    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.root, callback);
    }
    /**
     * @param {Node} node
     * @param {(arg0: any) => void} callback
     */
    inOrderTraverseNode(node, callback) {
        if (node != null) {
            this.inOrderTraverseNode(node.left, callback);
            callback(node.key + ' ');
            this.inOrderTraverseNode(node.right, callback);
        }
    }
    /**
     * @param {(arg0: any) => void} callback
     */
    postOrderTraverse(callback) {
        this.postOrderTraverseNode(this.root, callback);
    }
    /**
     * @param {Node} node
     * @param {(arg0: any) => void} callback
     */
    postOrderTraverseNode(node, callback) {
        if (node != null) {
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node.key + ' ');
        }
    }
    min() {
        return this.minNode(this.root);
    }
    /**
     * @param {Node} node
     */
    minNode(node) {
        let current = node;
        while (current != null && current.left != null) {
            current = current.left;
        }
        return current;
    }
    max() {
        return this.maxNode(this.root);
    }
    /**
     * @param {Node} node
     */
    maxNode(node) {
        let current = node;
        while (current != null && current.right != null) {
            current = current.right;
        }
        return current;
    }
    /**
     * @param {number} key
     */
    remove(key) {
        this.root = this.removeNode(this.root, key);
    }
    /**
     * @param {Node} node
     * @param {number} key
     */
    removeNode(node, key) {
        if (node == null) {
            return null;
        }
        if (this.compareFn(key, node.key) === CompareResult.LessThan) {
            node.left = this.removeNode(node.left, key);
            return node;
        }
        else if (this.compareFn(key, node.key) === CompareResult.BiggerThan) {
            node.right = this.removeNode(node.right, key);
            return node;
        }

        // key is equal to node.key
        // handle 3 special conditions
        // 1 - a leaf node
        // 2 - a node with only 1 child
        // 3 - a node with 2 children
        // case 1
        if (node.left == null && node.right == null) {
            node = null;
            return node;
        }
        // case 2
        if (node.left == null) {
            node = node.right;
            return node;
        }
        else if (node.right == null) {
            node = node.left;
            return node;
        }
        // case 3
        const aux = this.minNode(node.right);
        node.key = aux.key;
        node.right = this.removeNode(node.right, aux.key);
        return node;
    }
}