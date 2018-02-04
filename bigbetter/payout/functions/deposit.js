const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

/**
* Creates a stripe order based on a Stripe Checkout token and specific product
*   skuId, optionally containing shippingInfo
* @param {string} operation The id of the SKU the user wishes to order
* @param {object} arguments Shipping information from Stripe Checkout
* @returns {object}
*/
module.exports = (operation = "", arguments = {}, context, callback) => {

    // console.log(operation);

    var args = Object.assign({}, arguments);
        if (operation === "register") {
            stripe.accounts.create({
                country: "US",
                type: "custom"
            }).then(function (err, account) {
                // asynchronously called
                console.log(account);

                return callback(err, account);
            });
        } else if (operation === "add_bet") {
            stripe.charges.create({
                amount: parseInt(_amount),
                currency: "usd",
                source: "tok_visa",
                destination: {
                    account: "acct_1BrSS5BMTSDdyXTl"//account.id
                },
            }, function (err, result) {//function(charge) {
                // asynchronously called
                // console.log(result);
                return callback(err, result);
            });
        } else if (operation === "testing") {
            stripe.charges.create({
                amount: 1000,
                currency: "usd",
                source: "tok_visa",
            }, {
                stripe_account: "acct_1BrSS5BMTSDdyXTl",
            }).then(function (charge) {
                // asynchronously called
            });
        } else {
            throw new Exception("operation not supported");
        }

};
