// Sort Columns/Cards
/**
 * For Vietnamese with love :D
 * Xác định các phần tử trong array gốc ban đầu (originalArray) xem nó nằm ở đâu trong array thứ 2 (orderArray)
 * (là array mà mình dùng để sắp xếp) bằng cách tìm index (indexOf) rồi sẽ sắp xếp theo index đó bằng hàm sort của Javascript
 */

export const mapOrder = (originalArray, orderArray, key) => {
  if (!originalArray || !orderArray || !key) return []
  return [...originalArray].sort((a, b) => orderArray.indexOf(a[key]) - orderArray.indexOf(b[key]))

  // const clonedArray = [...originalArray]
  // const orderedArray = clonedArray.sort((a, b) => {
  //   return orderArray.indexOf(a[key]) - orderArray.indexOf(b[key])
  // })

  // return orderedArray
}

/**
 * Example: Sắp xếp mảng ban đầu dựa trên mảng thứ 2 với key là id
 */
// const originalItems = [
//   { id: 'id-1', name: 'One' },
//   { id: 'id-2', name: 'Two' },
//   { id: 'id-3', name: 'Three' },
//   { id: 'id-4', name: 'Four' },
//   { id: 'id-5', name: 'Five' }
// ]
// const itemOrderIds = ['id-5', 'id-4', 'id-2', 'id-3', 'id-1']
// const key = 'id'

// const orderedArray = mapOrder(originalItems, itemOrderIds, key)
// console.log('Original:', originalItems)
// console.log('Ordered:', orderedArray)
/**
 * Results:
 *
 * Original: Of course, nothing changes =))
 *
 * Ordered:
 *  [
      { id: 'id-5', name: 'Five' },
      { id: 'id-4', name: 'Four' },
      { id: 'id-2', name: 'Two' },
      { id: 'id-3', name: 'Three' },
      { id: 'id-1', name: 'One' }
  * ]
 */