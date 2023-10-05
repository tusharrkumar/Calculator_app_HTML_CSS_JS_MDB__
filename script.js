let firstTag = document.getElementById('first');
let secondTag = document.getElementById('second');

let plusBtn = document.getElementById('plus');
let minusBtn = document.getElementById('minus');
let multiBtn = document.getElementById('multi');
let divisionBtn = document.getElementById('division');

let resultTag = document.getElementById('result');



plusBtn.addEventListener('click', function() {
    let resultPlus = Number(firstTag.value) + Number(secondTag.value);
    resultTag.innerText = `${Number(firstTag.value)} + ${Number(secondTag.value)} = ${resultPlus}`;
    // console.log(resultPlus);
})



minusBtn.addEventListener('click', function() {
    let resultMinus = Number(firstTag.value) - Number(secondTag.value);
    resultTag.innerText = `${Number(firstTag.value)} - ${Number(secondTag.value)} = ${resultMinus}`;
    /// console.log(resultMinus);
})


multiBtn.addEventListener('click', function() {
    let resultMulti = Number(firstTag.value) * Number(secondTag.value);
    resultTag.innerText = `${Number(firstTag.value)} * ${Number(secondTag.value)} = ${Number(resultMulti)}`;
    // console.log(resultMulti);
})



divisionBtn.addEventListener('click', function() {
    let resultDivision = Number(firstTag.value) / Number(secondTag.value);
    resultTag.innerText = `${Number(firstTag.value)} / ${Number(secondTag.value)} = ${resultDivision}`;
    // console.log(resultDivision);
})