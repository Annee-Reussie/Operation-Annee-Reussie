const express = require('express')
const CryptoJS = require("crypto-js");
const router = express.Router()

router.get('/', (req, res) => {
    if (req.cookies['You_Ended_The_Game!'] !== undefined) {
        const finalCode = req.cookies['something'].replace(/[;]/g, '')
        res.render('game/index', { valideCode: true, finalCode: finalCode })
    } else {
        res.render('game/index', { valideCode: false, finalCode: '' })
    }
})

router.get('/chapter1', (req, res) => {
    res.render('game/chapter1')
})

router.get('/chapter2', (req, res) => {
    if (req.cookies['secretURL'] !== undefined) {
        const secretURL = CryptoJS.SHA1(req.cookies['secretURL'])
        res.render('game/chapter2', { secretURL: secretURL })
    } else {
        res.render('game/chapter2', { secretURL: '' })
    }
})

router.get('/chapter3', (req, res) => {
    if (req.cookies['You_Ended_The_Game!'] !== undefined) {
        const finalCode = req.cookies['something'].replace(/[;]/g, '')
        res.render('game/chapter3', { valideCode: true, finalCode: finalCode })
    } else {
        res.render('game/chapter3', { valideCode: false, finalCode: '' })
    }
})

router.get('/chapter4', (req, res) => {
    if (req.cookies['loggedInNoteRoom']) {
        res.render('game/chapter4', { gameEnd: true })
    } else {
        res.render('game/chapter4', { gameEnd: false })
    }
})

router.get('/end', (req, res) => {
    if (req.cookies['loggedInNoteRoom'] !== undefined && req.cookies['You_Ended_The_Game!'] !== undefined) {
        res.render('game/end')
    } else {
        res.redirect('/game/chapter4')
    }
})

router.post('/chapter3', async (req, res) => {
    try {
        if (req.cookies['something'] !== undefined) {
            const finalCode = req.body.passwd
            const actualCode = req.cookies['something'].replace(/[;]/g, '')

            if (finalCode === actualCode) {
                let options = {
                    httpOnly: true,
                    sameSite: true
                }

                res.cookie('You_Ended_The_Game!', 'It_is_the_end?', options)
                res.render('game/chapter3', { valideCode: true, finalCode: actualCode })
            } else {
                res.render('game/chapter3', { valideCode: false, finalCode: 'Wrong Code!' })
            }
        } else {
            res.render('game/chapter3', { valideCode: false, finalCode: '' })
        }
    } catch (err) {
        console.log(err)
    }
})

module.exports = router
