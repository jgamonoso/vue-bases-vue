

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
    },
    methods: {
        changeQuote( event ) {
            console.log('Hola mundo', event)
            this.autor = 'Juan Gamonoso'
            this.capitalize()
        },
        capitalize(){
            this.quote = this.quote.toUpperCase()
        }
    }

})

app.mount('#myApp')