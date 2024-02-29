import {
    bf_connection
} from "../config/index.js"

class Products {
    fetchProducts(req, res) {
        const dbQry = `
        SELECT prodID, prodName, quantity,
        amount, Category, prodURL, prodDesc
        FROM Products;
        `
        bf_connection.query(dbQry, (error, results) => {
            if (error) throw error
            res.json({
                status: res.errorCode,
                results
            })
        })
    }
    fetchProduct(req, res) {
        const dbQry = `
        SELECT prodID, prodName, quantity,
        amount, Category, prodURL, prodDesc
        FROM Products
        WHERE prodID = ${req.params.id};
        `
        bf_connection.query(dbQry, (error, result) => {
            if (error) throw error
            res.json({
                status: res.errorCode,
                result: result[0]
            })
        })
    }
    addProduct(req, res) {
        const dbQry = `
        INSERT INTO Products
        SET ?;
        `
        bf_connection.query(dbQry, [req.body], (error) => {
            if (error) throw error
            res.json({
                status: res.errorCode,
                message: 'New product added successfully'
            })
        })
    }
    updateProduct(req, res) {
        const dbQry = `
        UPDATE Products
        SET ?
        WHERE prodID = ${req.params.id};
        `
        bf_connection.query(dbQry, [req.body], (error) => {
            if (error) throw error
            res.json({
                status: res.errorCode,
                message: "Product information successfully updated"
            })
        })
    }
}

export {
    Products
}