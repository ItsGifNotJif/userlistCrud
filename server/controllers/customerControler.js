const Customer = require('../models/Customer');
const mongoose = require('mongoose');

exports.homepage = async (req, res) => {
    const messages = await req.consumeFlash('info');

    const locals = {
        title: "Vartotojų Sąrašas",
        description: "userList CRUD app"
    }

    let perPage = 10;
    let page = req.query.page || 1;

    try {
        const customers = await Customer.aggregate([{ $sort: { updatedAt: -1 } }])
            .skip(perPage * page - perPage)
            .limit(perPage)
            .exec();
        const count = await Customer.count();

        res.render('index', {
            locals,
            customers,
            current: page,
            pages: Math.ceil(count / perPage),
            messages
        });

    } catch (error) {
        console.log(error)
    }
}


//GET /New customer

exports.addCustomer = async (req, res) => {
    const locals = {
        title: "Kuriamas Vartotojas",
        description: "userList CRUD app"
    }
    res.render('customer/add', locals);
}


//Post /Create new customer

exports.postCustomer = async (req, res) => {
    console.log(req.body);

    const newCustomer = new Customer({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        age: req.body.age
    })

    const locals = {
        title: "Kuriamas Vartotojas",
        description: "userList CRUD app"
    }

    try {
        await Customer.create(newCustomer);
        await req.flash('info', 'Naujas Vartotojas Sukurtas')
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
}



//GET /Edit customer data
exports.edit = async (req, res) => {

    try {
        const customer = await Customer.findOne({ _id: req.params.id })

        const locals = {
            title: "Redaguojamas Vartotojas",
            description: "userList CRUD app"
        };

        res.render('customer/edit', {
            locals,
            customer
        })

    } catch (error) {
        console.log(error);
    }

}

//GET /Post updated customer data
exports.editPost = async (req, res) => {

    try {
        await Customer.findByIdAndUpdate(req.params.id, {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            age: req.body.age
        });
        res.redirect(`/edit/${req.params.id}`)
    } catch (error) {
        console.log(error)
    }
}


//GET /Delete customer data
exports.deleteCustomer = async (req, res) => {
    try {
        await Customer.deleteOne({ _id: req.params.id });
        res.redirect("/")
    } catch (error) {
        console.log(error);
    }
}

//GET /Search customers in the list
exports.searchCustomers = async (req, res) => {

    const locals = {
        title: "Vartotojų paieška",
        description: "Free NodeJs User Management System",
    };

    try {
        let searchTerm = req.body.searchTerm;
        const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9 ]/g, "");

        const customers = await Customer.find({
            $or: [
                { firstName: { $regex: new RegExp(searchNoSpecialChar, "i") } },
                { lastName: { $regex: new RegExp(searchNoSpecialChar, "i") } },
            ]
        });

        res.render("search", {
            customers,
            locals
        })

    } catch (error) {
        console.log(error);
    }

}


