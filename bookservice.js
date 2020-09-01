
const bookValidation = require('./bookvalidation')
const bookModel = require('./bookmodel');

module.exports.register = async function (req, res) { 
    let validStatus = await bookValidation.bookregistrationValidation(req.body);
    if (validStatus.status == true) {
        return res.status(400).json({
            status: false,
            data: "",
            msg: validStatus.msg
        })
    } else { 
        let result = await bookModel.create(req.body);
        return res.status(200).json({
            status: true,
            data: result,
            msg: "Successfully Registered"
        })
    }
 
}

module.exports.getDetails = async function (req, res) { 
    let result = await bookModel.find();
    return res.json({
        status: true,
        data: result,
        msg: "All Record Fetched"
    })
}

module.exports.getBookDetails = async function (req, res) { 
    let book_id = req.params.id
    let result = await bookModel.findOne({"_id": book_id});
    return res.json({
        status: true,
        data: result,
        msg: "Book information Details"
    })
}

module.exports.updateBookDetails = async function (req, res) { 
    let validStatus = await bookValidation.bookupdateValidation(req.body);
    if (validStatus.status == true) {
        return res.status(400).json({
            status: false,
            data: "",
            msg: validStatus.msg
        })
    } else { 
        let book_id = req.body.id;
        let result = await bookModel.updateOne({ "_id": book_id },{$set: { "author" : req.body.author, "title": req.body.title, "isbn": req.body.isbn, "release_date":req.body.release_date}});
        return res.json({
            status: true,
            data: result,
            msg: "Successfully updated"
        })
    }

}

module.exports.deleteBookDetails = async function (req, res) { 
    let book_id = req.params.id
    let result = await bookModel.deleteOne({"_id": book_id});
    return res.json({
        status: true,
        data: result,
        msg: "Successfully Deleted"
    })
}