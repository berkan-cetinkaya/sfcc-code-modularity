'use strict';

var { placeOrder } = require('*/cartridge/scripts/checkoutHelpers');

// imaginary function to show calling additonal service during placing order
exports.sendNotification = function ({ orderApi }) {
    return {
        error: false,
        status: "notification_sent"
    }
}

/**
 * Attempts to place the order
 * @param {dw.order.Order} order - The order api
 * @param {Object} fraudDetectionStatus - an Object returned by the fraud detection hook
 * @returns {Object} an error object
 */
exports.placeOrder = function (order, fraudDetectionStatus) { 

    var notificationResult = exports.sendNotification({ orderApi: order })
    
    if (notificationResult.error) {
        return notificationResult;
    }

    var result = placeOrder(order, fraudDetectionStatus)
    return result
}