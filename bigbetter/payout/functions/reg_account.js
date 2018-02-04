const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const request = require('request');

const ejs = require('ejs');
const template = __dirname + '/../templates/authe.ejs';

const ENV = {
    STRIPE_CLIENT_ID: process.env.STRIPE_CLIENT_ID || '',
    STRIPE_REDIRECT: process.env.STRIPE_REDIRECT || '',
};

/**
 * The "Add to Slack" landing page for your app.
 *   To modify the template, check out /pages/index.ejs.
 * @returns {buffer}
 */
module.exports = (callback) => {

    ejs.renderFile(template, ENV, {}, (err, response) => {
        callback(err, new Buffer(response || ''), {'Content-Type': 'text/html'});
    });

};

// /**
//  * Creates an stripe connect acount based on a Stripe Checkout token and specific product
//  *   skuId, optionally containing shippingInfo
//  * @returns {object}
//  */
// module.exports = (context, callback) => {
//
//     // let order = {
//     //     currency: 'usd',
//     //     items: [
//     //         {
//     //             type: 'sku',
//     //             parent: skuId
//     //         }
//     //     ],
//     //     email: stripeToken.email
//     // };
//     //
//     // if (shippingInfo && Object.keys(shippingInfo).length) {
//     //
//     //     order.shipping = {
//     //         name: shippingInfo.shipping_name,
//     //         address: {
//     //             line1: shippingInfo.shipping_address_line1,
//     //             line2: shippingInfo.shipping_address_line2,
//     //             city: shippingInfo.shipping_address_city,
//     //             state: shippingInfo.shipping_address_state,
//     //             country: shippingInfo.shipping_address_country_code,
//     //             postal_code: shippingInfo.shipping_address_zip
//     //         }
//     //     };
//     //
//     // }
//
//     // console.log(context);
//
//     router.get('/reg_', (req, res) => {
//         // Generate a random string as state to protect from CSRF and place it in the session.
//         req.session.state = Math.random().toString(36).slice(2);
//         // Prepare the mandatory Stripe parameters.
//         let parameters = {
//             client_id: "ca_CFrMsJLbYz0H4Y13DPaw9khRMsKwUpPh",
//             state: req.session.state
//         };
//         // Optionally, Stripe Connect accepts `first_name`, `last_name`, `email`,
//         // and `phone` in the query parameters for them to be autofilled.
//         parameters = Object.assign(parameters, {
//             'stripe_user[business_type]': req.user.type || 'individual',
//             'stripe_user[first_name]': req.user.firstName || undefined,
//             'stripe_user[last_name]': req.user.lastName || undefined,
//             'stripe_user[email]': req.user.email || undefined,
//             'stripe_user[business_name]': req.user.businessName || undefined,
//         });
//         // Redirect to Stripe to start the Connect onboarding.
//         res.redirect("https://connect.stripe.com/express/oauth/authorize" + '?'
//             + "redirect_uri=http://localhost:8170/bigbetter/payout&client_id=ca_CFrMsJLbYz0H4Y13DPaw9khRMsKwUpPh&");
//
//         return callback(null, null);
//     });
//
//     // stripe.orders.create(order, (err, result) => {
//     //
//     //   if (err) {
//     //     return callback(err);
//     //   }
//     //
//     //   stripe.orders.pay(result.id, {
//     //     source: stripeToken.id
//     //   }, (err, result) => {
//     //     return callback(err, result);
//     //   });
//     //
//     // });
//
//     // stripe.accounts.create({
//     //     country: "US",
//     //     type: "custom"
//     // }).then(function(acct) {
//     //     // asynchronously called
//     //     console.log(acct);
//     // });
//
//     // stripe.charges.create({
//     //     amount: 1000,
//     //     currency: "usd",
//     //     source: "tok_visa",
//     //     destination: {
//     //         account: "acct_1BrOfmCM4YgBPFMb",
//     //     },
//     // }, function (err, result) {//function(charge) {
//     //     // asynchronously called
//     //     // console.log(result);
//     //     return callback(err, result);
//     // });
//
// };

//stripe.accounts.create({
//     country: "US",
//     type: "custom"
// }).then(function(err, result) {
//     // asynchronously called
//     return callback(err, result);//.log(acct);
// });
