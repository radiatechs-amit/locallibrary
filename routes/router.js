const express = require('express')
const router = express.Router();

const libregistration = require('../bookservice')


router.post('/api/v2/library/register', libregistration.register)

router.get('/api/v2/library/bookinfo', libregistration.getDetails)
router.get('/api/v2/library/bookinfo/:id', libregistration.getBookDetails)
router.put('/api/v2/library/bookinfo', libregistration.updateBookDetails)
router.delete('/api/v2/library/bookinfo/:id', libregistration.deleteBookDetails)



module.exports = router;