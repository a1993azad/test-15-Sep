const orders = [];

async function writeOrders(order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      orders.push(order);
      resolve();
    }, 1000);
  });
}

async function readOrders() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(orders);
    }, 1000);
  });
}

async function main() {
  const order1 = await writeOrders("order1");
  const order2 = await writeOrders("order2");
  const order3 = await writeOrders("order3");
  const orders = await readOrders();
  console.log(orders);
}
