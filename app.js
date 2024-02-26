const express = require('express')

const PORT = process.env.PORT | 8080
const app = express()

app.get('/', (_, res) => {
    res.send(`
        <h1>K8s Testing Web App</h1>
        <p>Testing Kubernetes deployment</p>
        <p>Send request to "/error" to crash the app and test if k8s will create another instance of the app</p>
    `)
})

app.get('/error', () => {
    process.exit(1)
})

app.listen(PORT, () => console.log(`Application started on port ${PORT}`))
