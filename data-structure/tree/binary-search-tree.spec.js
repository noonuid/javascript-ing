// @ts-check

import 'mocha';
// import { expect } from 'chai';
// import process from 'process';
// import BinarySearchTree from './binary-search-tree.js';

// describe('BinarySearchTree', function () {
//     function assertNode(node, key, left, right) {
//         if (key != null) {
//             expect(node.key).to.equal(key);
//         } else {
//             expect(node).to.equal(key);
//             return;
//         }

//         if (left != null) {
//             expect(node.left.key).to.equal(left);
//         } else {
//             expect(node.left).to.equal(left);
//         }

//         if (right != null) {
//             expect(node.right.key).to.equal(right);
//         } else {
//             expect(node.right).to.equal(right);
//         }
//     }

//     let tree = new BinarySearchTree();

//     // this.beforeEach(() => {
//     //     tree = new BinarySearchTree();
//     // });

//     it('starts empty', () => {
//         expect(tree.getRoot()).to.be.equal(null);
//     });

//     it('inserts elements in the BST', () => {
//         expect(tree.getRoot()).to.equal(null);

//         tree.insert(11);
//         tree.insert(7);
//         tree.insert(15);
//         tree.insert(5);
//         tree.insert(3);
//         tree.insert(9);
//         tree.insert(8);
//         tree.insert(10);
//         tree.insert(13);
//         tree.insert(12);
//         tree.insert(14);
//         tree.insert(20);
//         tree.insert(18);
//         tree.insert(25);

//         let node = tree.getRoot();
//         assertNode(node, 11, 7, 15);

//         node = node.left;
//         assertNode(node, 7, 5, 9);

//         node = node.left;
//         assertNode(node, 5, 3, null);

//         node = node.left;
//         assertNode(node, 3, null, null);

//         node = tree.getRoot().left.left.right;
//         assertNode(node, null, null, null);

//         node = tree.getRoot().left.right;
//         assertNode(node, 9, 8, 10);

//         node = node.left;
//         assertNode(node, 8, null, null);

//         node = tree.getRoot().left.right.right;
//         assertNode(node, 10, null, null);

//         node = tree.getRoot().right;
//         assertNode(node, 15, 13, 20);

//         node = node.left;
//         assertNode(node, 13, 12, 14);

//         node = node.left;
//         assertNode(node, 12, null, null);

//         node = tree.getRoot().right.left.right;
//         assertNode(node, 14, null, null);

//         node = tree.getRoot().right.right;
//         assertNode(node, 20, 18, 25);

//         node = node.left;
//         assertNode(node, 18, null, null);

//         node = tree.getRoot().right.right.right;
//         assertNode(node, 25, null, null);
//     });

//     it('verifies if element exists', () => {
//         expect(tree.search(11)).to.equal(true);
//         expect(tree.search(7)).to.equal(true);
//         expect(tree.search(15)).to.equal(true);
//         expect(tree.search(5)).to.equal(true);
//         expect(tree.search(9)).to.equal(true);
//         expect(tree.search(13)).to.equal(true);
//         expect(tree.search(20)).to.equal(true);

//         expect(tree.search(50)).to.equal(false);
//     });

//     it('pre order traverse', () => {
//         // expect(tree.preOrderTraverse(console.log)).to.equal(undefined);
//         expect(tree.preOrderTraverse(process.stdout.write.bind(process.stdout))).to.equal(undefined);
//     });

//     it('in order traverse', () => {
//         // expect(tree.inOrderTraverse(console.log)).to.equal(undefined);
//         expect(tree.inOrderTraverse(process.stdout.write.bind(process.stdout))).to.equal(undefined);
//     });

//     it('post order traverse', () => {
//         // expect(tree.postOrderTraverse(console.log)).to.equal(undefined);
//         expect(tree.inOrderTraverse(process.stdout.write.bind(process.stdout))).to.equal(undefined);
//     });

//     it('min key', () => {
//         expect(tree.min().key).to.equal(3);
//     });

//     it('max key', () => {
//         expect(tree.max().key).to.equal(25);
//     });

//     it('removes a leaf', () => {
//         expect(tree.remove(11)).to.equal(undefined);
//         tree.preOrderTraverse(process.stdout.write.bind(process.stdout));
//     });
// });
