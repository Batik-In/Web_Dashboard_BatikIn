const express =  require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')
var hbs = require('hbs');
var exphbs = require('express-handlebars');

const port = process.env.PORT || 5000
const app = express()

//app.set('views', path.join(__dirname, 'views'))
app.set('view engine', '.hbs')

hbs.registerHelper("inc", (value, options) => {
    return parseInt(value) + 1
})

hbs.registerHelper("ifCond", (a, b, options) => {
    if(a == b) {
        return options.fn(this)
    } else {
        return options.inverse(this)
    }
})

hbs.registerPartials(__dirname + '/views');

//app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())


app.use(express.static(path.join(__dirname, 'public')))
const authRoute = require('./routes/authRoute.js')
const batikRouter = require('./routes/batikRouter.js');

app.use(cors())

app.use(authRoute)
app.use(batikRouter)

app.listen(port, () => {
    console.log(`listen to port ${port}`)
})