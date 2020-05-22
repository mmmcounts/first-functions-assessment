function add(x, y) {
    return x + y
}

console.log(add(2, 4))



function multiply(x, y) {
    let total = 0
    for (let i = 0; i < y; i++) {
        total = add(x, total)
    }
    return total
}

console.log(multiply(6, 4))



function power(x, n) {
    let total = 1
    for (let i = 1; i <= n; i++) {
        total = multiply(x, total)
    }
    return total
}

console.log(power(3, 4))



function factorial(f) {
    let total = f

    for (let i = f - 1; i > 0; i--) {
        total = multiply(total, 1)
    }
    return total
}

console.log(factorial(4))



function fibonacci(p) {
    let total1 = 0
    let total2 = 1
    let sumOfPrev2

    for (let i = 3; i <= p; i++) {
        sumOfPrev2 = add(total2, total3)
        total1 = total3;
        total2 = sumOfPrev2
        total.push = sumOfPrev2
    }
    console.log(total)
    return sumOfPrev2
}

console.log(fibonacci(5))