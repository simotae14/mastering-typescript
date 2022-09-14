enum OrderStatus {
   PENDING = 10,
   SHIPPED = 34,
   DELIVERED = 324,
   RETURNED = 98,
}

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
    return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);