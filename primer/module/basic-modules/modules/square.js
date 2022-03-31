/** @type {*} 包含字符串'square'的常量。 */
const name = 'square';

/**
 * 在指定画布上绘制一个正方形，具有指定的大小，位置和颜色。 
 *
 * @param {*} ctx
 * @param {*} length
 * @param {*} x
 * @param {*} y
 * @param {*} color
 * @return {*} 返回包含正方形大小，位置和颜色的对象。
 */
function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return {
    length: length,
    x: x,
    y: y,
    color: color
  };
}

/**
 * 在给定长度的情况下，将正方形区域写入特定报告列表。
 *
 * @param {*} length
 * @param {*} listId
 */
function reportArea(length, listId) {
    let listItem = document.createElement('li');
    listItem.textContent = `${name} area is ${length * length}px squared.`
  
    let list = document.getElementById(listId);
    list.appendChild(listItem);
  }

  /**
   * 在给定长度的情况下，将正方形的周长写入特定的报告列表。
   *
   * @param {*} length
   * @param {*} listId
   */
  function reportPerimeter(length, listId) {
    let listItem = document.createElement('li');
    listItem.textContent = `${name} perimeter is ${length * 4}px.`
  
    let list = document.getElementById(listId);
    list.appendChild(listItem);
  }

  export { name, draw, reportArea, reportPerimeter };