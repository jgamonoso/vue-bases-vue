

console.log(Vue)

const app = Vue.createApp({
    // template: `
    // <h1>Hola mundo</h1>
    // <p>Desde app.js</p>
    // <p> {{ true ? 'Activo' : 'Inactivo' }} </p>
    // `

    data() {
        return {
            quote: "I'm Batman",
            autor: 'Bruce Wayne'
        }
    }
})

app.mount('#myApp')