'use strict';

var { placeOrder } = require('*/cartridge/scripts/checkoutHelpers');

/**
 * Attempts to place the order
 * @param {dw.order.Order} order - The order api
 * @param {Object} fraudDetectionStatus - an Object returned by the fraud detection hook
 * @returns {Object} an error object
 */
exports.placeOrder = function (order, fraudDetectionStatus) { 
    var Order = require('dw/order/Order');

    // prepend
    if (order.paymentStatus !== Order.PAYMENT_STATUS_PAID) {
        return {
           status: "not_paid",
           error: true
         };
     }
    
    // calling base placeOrder if it's not called then this will be considered as replaced
    var result = placeOrder(order, fraudDetectionStatus)

    // append
    if (fraudDetectionStatus.status === 'flag') {
        return {
            status: "flagged",
            error: true
        };
    }

    return result
}