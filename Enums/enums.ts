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

const enum ArrowKeys {
    UP = 'up',
    DOWN = 'down',
    LEFT = 'left',
    RIGHT = 'right',
    ERROR = 34
}

ArrowKeys.LEFT