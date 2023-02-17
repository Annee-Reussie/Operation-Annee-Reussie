const express = require('express')
const router = express.Router()
const uuid = require('uuid')

router.get('/', (req, res) => {
    if (req.cookies['chefKey'] === undefined) {
        const secretChefKey = uuid.v4()

        let options = {
            httpOnly: true,
            sameSite: true
        }

        res.cookie('chefKey', secretChefKey, options)
    }

    res.render('index')
})

module.exports = router
