// lab_4.1
// Гринчук Тарас
// Лабораторна робота № 4.1
// Цикли
// Варіант №4

let N = parseInt(prompt("Введіть значення N:"));

// Спосіб 1 while(…) { … }
let S = 0; 
let i = 1;
while (i <= N) {
   S += (1 + i / N) / i * i;
   i++;
}
console.log("1) while(…) { … } :  " + S.toFixed(3));

// Спосіб 2 do{ … } while(…)
S = 0;
i = 1;
do {
   S += (1 + i / N) / i * i;
   i++;
} while (i <= N);
console.log("2) do{ … } while(…) :  " + S.toFixed(3));

// Спосіб 3 for(…; …; n++) {… }
S = 0;
for (let i = 1; i <= N; i++) {
   S += (1 + i / N) / i * i;
}
console.log("3) for(…; …; n++) {… } :  " + S.toFixed(3));

// Спосіб 4 for(…; …; n--) {… }
S = 0;
for (let i = N; i >= 1; i--) {
   S += ((1 + i / N) / i) * i;
}
console.log("4) for(…; …; n--) {… } :  " + S.toFixed(3));