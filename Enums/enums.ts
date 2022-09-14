enum OrderStatus {
   PENDING,
   SHIPPED,
   DELIVERED,
   RETURNED 
}

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
    return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);