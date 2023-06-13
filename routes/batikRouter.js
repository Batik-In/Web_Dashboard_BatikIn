const { default: axios } = require('axios');
const express =  require('express')

const router = express.Router()

const BACKEND_URL = 'https://backend.batikin.site';

router.get('/admin/batik', async (req, res) => {
    return res.render('template/sidebar', {data: "it's ok", content: "admin/batik"});
});
router.get('/admin/question', async (req, res) => {
    return res.render('template/sidebar', {data: "it's ok", content: "admin/question"});
});
router.get('/admin/question_detail', async (req, res) => {
    const { id } = req.query;
    let title = 'Buat pertanyaan baru';
    if(id) {
        title = 'Ubah pertanyaan';
    }
    return res.render('template/sidebar', {data: { id, title }, content: "admin/question_detail" });
});
router.get('/admin/quiz', async (req, res) => {
    return res.render('template/sidebar', {data: "it's ok", content: "admin/quiz"});
});
router.get('/admin/quiz_history', async (req, res) => {
    return res.render('template/sidebar', {content: "admin/quiz_history" })
});
router.get('/admin/classification', async (req, res) => {
    return res.render('template/sidebar', {data: "it's ok", content: "admin/classification_history"});
});
router.get('/admin/article', async (req, res) => {
    return res.render('template/sidebar', {data: "it's ok", content: "admin/article"});
});
router.get('/admin/article_detail', async (req, res) => {
    const { id } = req.query;
    let articleData = undefined;
    try {
        const request = await axios({
            method: 'GET',
            url: `${BACKEND_URL}/api/articles/${id}`
        });
        articleData = request.data;
    } catch(e) {
        console.log('ERROR on fetchArticle by id : ', e);
    }
    return res.render('template/sidebar', {data: articleData, content: "admin/article_detail" });
});

router.get('/admin/users', async (req, res) => {
    return res.render('template/sidebar', {data: "it's ok", content: "admin/users"});
});


router.get('/user/classification', async (req, res) => {
    return res.render('template/sidebar', {data: "it's ok", content: "user/classification"});
});
router.get('/user/classification_history', async (req, res) => {
    return res.render('template/sidebar', {data: "it's ok", content: "user/classification_history"});
});
router.get('/user/article', async (req, res) => {
    return res.render('template/sidebar', {data: "it's ok", content: "user/article"});
});

router.get('/user/article_detail', async (req, res) => {
    const { id } = req.query;
    let articleData = undefined;
    try {
        const request = await axios({
            method: 'GET',
            url: `${BACKEND_URL}/api/articles/${id}`
        });
        articleData = request.data;
    } catch(e) {
        console.log('ERROR on fetchArticle by id : ', e);
    }
    return res.render('template/sidebar', {data: articleData, content: "user/article_detail" });
});

router.get('/user/article_bookmarks', async (req, res) => {
    return res.render('template/sidebar', {data: "it's ok", content: "user/article_bookmarks"})
});

/* Doing Quiz */
router.get('/user/quiz', async (req, res) => {
    const { id } = req.query;
    return res.render('template/sidebar', {content: "user/quiz" })
});
/* Check quiz state */
router.get('/user/quiz_start', async (req, res) => {
    return res.render('template/sidebar', {content: "user/quiz_start" })
});
/* Finish quiz and update state */
router.get('/user/quiz_finish', async (req, res) => {
    return res.render('template/sidebar', {content: "user/quiz_finish" })
});
router.get('/user/quiz_history', async (req, res) => {
    return res.render('template/sidebar', {content: "user/quiz_history" })
});

module.exports = router