const checkUangKembali = (name, pay, price) => {
    const value = pay - price;
    if (pay > price) {
        return {
            name: name,
            price: price,
            paid: pay,
            changeMoney: value,
            status: 0,
        }
    } else if (pay < price) {
        return {
            name: name,
            price: price,
            paid: pay,
            changeMoney: value,
            status: 1,
        }
    } else if (pay === price) {
        return {
            name: name,
            price: price,
            paid: pay,
            changeMoney: value,
            status: 2,
        }
    }
}

module.exports = { checkUangKembali }