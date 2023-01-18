const btn = document.querySelector(".btn");
const resultNode = document.querySelector(".result");

const localStor = localStorage.getItem("url", "apiData");
if (localStor) {
    displayResult(JSON.parse(localStor));
}

function displayResult(data) {
    let cards = '';

    data.forEach(item => {
        const cardBlock = `
            <div class="card">
                <img src="${item.download_url}" class="card-image"/>
            </div>
        `;
        cards = cards + cardBlock;
    });

    resultNode.innerHTML = cards;
};

btn.addEventListener("click", () => {
    let input1 = +document.querySelector(".input1").value;
    let input2 = +document.querySelector(".input2").value;

    if ((input1 > 10 || input1 < 1 || input1 === isNaN) && (input2 > 10 || input2 < 1 || input2 === isNaN)) {
        resultNode.innerHTML += `
            <p>Номер страницы и лимит вне диапазона от 1 до 10</p>
        `;

        return;
    }

    if (input1 > 10 || input1 < 1 || input1 === isNaN) {
        resultNode.innerHTML += `
            <p>Номер страницы вне диапазона от 1 до 10</p>
        `;

        return;
    }

    if (input2 > 10 || input2 < 1 || input2 === isNaN) {
        resultNode.innerHTML += `
            <p>Лимит вне диапазона от 1 до 10</p>
        `;

        return;
    }

    fetch(`https://picsum.photos/v2/list?page=${input1}&limit=${input2}`)
    .then((response) => {
        console.log("response", response);
        const result = response.json();
        return result;
    })
    .then((data) => {
        displayResult(data);
        console.log(data);
        localStorage.setItem('url', JSON.stringify(data));
    })
    .catch(() => {
        console.log('error')
    });
})

