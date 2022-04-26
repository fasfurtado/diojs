let limit = parseInt(window.prompt());
for(let i = 0; i < limit; i++) {
    let line = window.prompt().split(" ");
    let x = parseInt(line[0]);
    let y = parseInt(line[1]);
    if (y == 0) {
        console.log("divisão impossivel");
    } else {
        let divisao = parseFloat(X / Y).toFixed(1);
        console.log(divisao);
    }
}
