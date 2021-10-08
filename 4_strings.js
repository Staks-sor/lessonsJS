// Новая фукция обратные ковычки `` в которых можно передать значени используя и обычные ковычки
// запоменает проблемы.
const title = 'hello'

const isVisible = () => Math. random() > 0.5

const template = `
    ${isVisible() ? `<p>Visible</p>` : 'huy'}
    <h1 id='demo' style="color: red">${title}</h1>
`

console.log(template)