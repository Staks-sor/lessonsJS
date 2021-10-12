// Новая фукция обратные ковычки `` в которых можно передать значени используя и обычные ковычки
// запоменает проблемы.
// const title = 'hello'
//
// const isVisible = () => Math. random() > 0.5
//
// const template = `
//     ${isVisible() ? `<p>Visible</p>` : 'random'}
//     <h1 id='demo' style="color: red">${title}</h1>
// `
//
// console.log(template)

// Methods

const str = 'Hello'

console.log(str.startsWith('He')) // Начинается ли со букв слова true
console.log(str.startsWith('e'))
console.log(str.endsWith('lo')) // Оканчивается ли на эти буквы слово
console.log(str.endsWith('e'))

console.log(str.includes('llo')) // есть ли в слове

console.log(str.repeat(5)) // повторение на вывод

console.log(str.trim()) // Удаление пробелов
console.log(str.trimEnd()) // Удаление пробела в конце слова
console.log(str.trimStart()) // Удаление пробела в начале

console.log(str.padStart(13, '1234'), str.padEnd(43, 'sadsda')) // минимальное количество длины


console.log(str.startsWith('He'), str.startsWith('e'), str.endsWith('lo'), str.endsWith('e'), str.includes('llo'), str.repeat(5), str.trim(), str.trimEnd(), str.trimStart(), str.padStart(13, '1234'), str.padEnd(43, 'sadsda'))
