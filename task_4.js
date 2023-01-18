const btn = document.querySelector(".btn");
const resultNode = document.querySelector(".result");

btn.addEventListener("click", () => {
    let input1 = +document.querySelector(".input1").value;
    let input2 = +document.querySelector(".input2").value;

    if ((input1 > 300 || input1 < 100) || (input2 > 300 || input2 < 100)) {
        resultNode.innerHTML += `
            <p>Одно из чисел вне диапазона от 100 до 300</p>
        `;
    } else {
        fetch(`https://picsum.photos/${input1}/${input2}`)
        .then((response) => {
            let card = `
                <div class="card">
                    <img src="${response.url}" class="card-image"/>
                </div>
            `;
    
            resultNode.innerHTML = card;
        })
        .then((data) => {
            console.log(data);
        })
        .catch(() => {
            console.log('error')
        });
    }
});
