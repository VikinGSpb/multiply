module.exports = function multiply(first, second) {
    let firstMas = first.split('').reverse();
    let secondMas = second.split('').reverse();
    let multiplyMas = [];

    for(let i = 0; i < firstMas.length; i++)
        for(let j = 0; j < secondMas.length; j++)
        {
            let number = firstMas[i] * secondMas[j];
            multiplyMas[i + j] ? multiplyMas[i + j] += number : multiplyMas[i + j] = number;
            if(multiplyMas[i + j] >= 10)
            {
                multiplyMas[i + j + 1] ? multiplyMas[i + j + 1] += Math.floor(multiplyMas[i + j] / 10) : multiplyMas[i + j + 1] = Math.floor(multiplyMas[i + j] / 10);
                multiplyMas[i + j] %= 10;
            }
        }
    return multiplyMas.reverse().join('');
}
