var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 10] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 34] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 324] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 98] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
var myStatus = OrderStatus.DELIVERED;
function isDelivered(status) {
    return status === OrderStatus.DELIVERED;
}
isDelivered(OrderStatus.RETURNED);
