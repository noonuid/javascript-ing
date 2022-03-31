/**
 * 在指定ID的包装器<div>内创建指定width 和height 的画布，该ID本身附加在指定的父元素内。
 *
 * @param {*} id
 * @param {*} parent
 * @param {*} width
 * @param {*} height
 * @return {*} 返回包含画布的2D上下文和包装器ID的对象。
 */
function create(id, parent, width, height) {
    let divWrapper = document.createElement('div');
    let canvasElem = document.createElement('canvas');
    parent.appendChild(divWrapper);
    divWrapper.appendChild(canvasElem);

    divWrapper.id = id;
    canvasElem.width = width;
    canvasElem.height = height;

    let ctx = canvasElem.getContext('2d');

    return {
        ctx: ctx,
        id: id
    };
}

/**
 * 创建一个附加在指定包装器元素内的无序列表，该列表可用于将报告数据输出。
 *
 * @param {*} wrapperId
 * @return {*} 返回列表的ID。
 */
function createReportList(wrapperId) {
    let list = document.createElement('ul');
    list.id = wrapperId + '-reporter';

    let canvasWrapper = document.getElementById(wrapperId);
    canvasWrapper.appendChild(list);

    return list.id;
}

export { create, createReportList };