let $btn = document.getElementsByClassName("btn")
let $fm = document.getElementById("fm")

let num
let machineNum = parseInt(Math.random() * 10)
console.log(+machineNum);

for (let i = 0; i < 3; i++) {
    $btn[i].addEventListener("click", function(e) {
        console.log($fm.dl.value.trim());
        $fm.addEventListener("submit", function(e) {
            e.preventDefault();
            // Truy cap toi input co name la dl
            if ($fm.dl.value.trim() === machineNum) {
                function dudoan(a) {
                    alert(a);
                }
                dudoan("chúc mung ban !!!")
                return;
            } else {
                function dudoan(a) {
                    alert(a);
                }
                dudoan("chúc ban may man lan sau !!!")
            }

        })

    })
}