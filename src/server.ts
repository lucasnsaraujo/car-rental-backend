import express from 'express';
import swagger from 'swagger-ui-express';
import swaggerConfig from './swagger.json';
import { router } from './routes';
import './database'

const app = express();

app.use(express.json())

app.use('/api-docs', swagger.serve, swagger.setup(swaggerConfig))

app.use(router)

app.listen(3333, () => {
    console.log('> Server started @ port 3333!')
})