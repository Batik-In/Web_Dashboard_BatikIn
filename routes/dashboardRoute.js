const express =  require('express')

const router = express.Router()
const templateController = require('../controllers/templateController.js')

router.get('/', async (req, res) => {
    return res.redirect('/login')
})

router.get('/home', async (req, res) => {
    return res.render('index', { data: [] })
})

router.get('/template', async (req, res) => {
    let result = []

    const status = [
        {label: "SUBMITTED", count: 1},
        {label: "APPROVED", count: 1},
        {label: "REJECTED", count: 1}
    ]

    const data = {
        status,
        result
    }
    return res.json({
        data  
    })
})

router.post('/template', async (req, res) => {
    const data = {
        id: req.body.id_template,
        status: req.body.status_template
    }
    //await templateController.updateTemplate(data)
    return res.redirect('/home')
})

module.exports = router