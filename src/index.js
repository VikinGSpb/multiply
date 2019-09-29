module.exports = function multiply(first, second) {
    let firstMas = first.split('');
    let secondMas = second.split('');
    let multiplyMas = [];

    for(let i = firstMas.length - 1; i >= 0; i--)
        for(let j = secondMas.length - 1; j >= 0; j--)
        {
            let number = firstMas[i] * secondMas[j];
            multiplyMas[i + j] ? multiplyMas[i + j] += number : multiplyMas[i + j] = number;
            if(multiplyMas[i + j] >= 10)
            {
                multiplyMas[i + j - 1] += Math.floor(multiplyMas[i + j] / 10);
                multiplyMas[i + j] %= 10;
            }
        }
    return multiplyMas.join('');
}
