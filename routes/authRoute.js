const express =  require('express')
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth.js')
const axios = require('axios')

const router = express.Router()

const BACKEND_URL = 'http://34.101.249.38:3000';

router.get('/login', async (req, res) => {
    return res.render('auth/login', {data: "it's ok"})
})

router.post('/verify', async (req, res) => {
    res.json({
        data: auth.verifyToken(req.body.accessToken)
    })
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const request = await axios({
            method: 'POST',
            url: `${BACKEND_URL}/api/auth/login`,
            data: {
                email,
                password
            }
        });
        return res.status(200).json({
            status: true,
            message: 'success',
            token: request.data.data.accessToken
        });
    } catch(e) {
        let message = 'unknown error';
        let status = 500;
        if (axios.isAxiosError(e)) {
            status = e.response?.status || 500;
            message = e.response?.data?.message || 'unknown error';
        }
        return res.status(status).json({
            status: false,
            message
        });
    }    
});

router.get('/logout', async (req, res) => {
    return res.redirect('/login')
})

module.exports = router