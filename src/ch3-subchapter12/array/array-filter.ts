var array1 = ['maudy', 100, 'ayunda', 200, 'faza', 300];
var array2 = array1.filter(function (item) {
    return typeof item === 'string';
})
array2