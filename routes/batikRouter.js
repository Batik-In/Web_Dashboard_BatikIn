const { default: axios } = require('axios');
const express =  require('express')

const router = express.Router()

const BACKEND_URL = 'https://backend.batikin.site';

/* TODO (FE - admin) */
// DONE
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
router.get('/admin/answer', async (req, res) => {
    return res.render('template/sidebar', {data: "it's ok", content: "admin/answer"});
});
router.get('/admin/quiz', async (req, res) => {
    return res.render('template/sidebar', {data: "it's ok", content: "admin/quiz"});
});
// DONE
router.get('/admin/classification', async (req, res) => {
    return res.render('template/sidebar', {data: "it's ok", content: "admin/classification_history"});
});

// DONE
router.get('/admin/article', async (req, res) => {
    return res.render('template/sidebar', {data: "it's ok", content: "admin/article"});
});
// DONE
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


/* TODO (FE - user) */
router.get('/user/classification', async (req, res) => {
    return res.render('template/sidebar', {data: "it's ok"})
});
router.get('/user/classification/history', async (req, res) => {
    return res.render('template/sidebar', {data: "it's ok"})
});
router.get('/user/article', async (req, res) => {
    return res.render('template/sidebar', {data: "it's ok"})
});
router.get('/user/article/:id', async (req, res) => {
    return res.render('template/sidebar', {data: "it's ok"})
});
router.get('/user/bookmarks', async (req, res) => {
    return res.render('template/sidebar', {data: "it's ok"})
});
router.get('/user/quiz/start', async (req, res) => {
    return res.render('template/sidebar', {data: "it's ok"})
});
router.get('/user/quiz/finish', async (req, res) => {
    return res.render('template/sidebar', {data: "it's ok"})
});
router.get('/user/quiz/history', async (req, res) => {
    return res.render('template/sidebar', {data: "it's ok"})
});


router.get('/profile', async (req, res) => {
    return res.render('template/sidebar', {data: "it's ok", content: "admin/question"});
});
router.get('/user/profile', async (req, res) => {
    return res.render('template/sidebar', {data: "it's ok", content: "admin/batik"});
});

module.exports = router