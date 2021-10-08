const defaultB = 30
const getDefault = c => c * 2
// дефолтные значения
function compute(a = 10, b = getDefault(a)) {
    return a + b
}
// можно задать числовые значения отличающийся от дефолтных
console.log(compute())