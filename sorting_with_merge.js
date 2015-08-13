function merge(left, right) {

}

function mergeSort(items) {
  if (items.length <= 1) {
    return items;
  }

  var middle = Math.floor(items.length / 2),
    left = items.slice(0, middle),
    right = items.slice(0);

  return merge(mergeSort(left), mergeSort(right));
}
