import { userRouter, express } from './controller/UserController.js'
import { productRouter } from './controller/ProductController.js';
import { errorHandling } from './middleware/errorHandling.js'
import cookieParser from 'cookie-parser';
import path from 'path'
import cors from 'cors'
import { config } from "dotenv";
config()

const app = express();
// app.use(express.json());

const port = +process.env.port || 4000

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorisation");
    next();
})

app.use(
    express.static('./static'),
    express.json(),
    express.urlencoded({
        extended: true,
    }),
    cookieParser(),
    cors()
)
app.get('^/$|/blueFemmeDB', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, './static/index.html'))
})
app.use('/users', userRouter)
app.use('/products', productRouter)
app.use(errorHandling)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
