// *
// * *
// * * *
// * * * *
// * * * * *

let x,y,chr;
for(x=1; x <=5; x++) {
    chr = " "
    for (y = 1; y <= x; y++) {
        chr = chr + ("*");
    }
    console.log(chr);
}

for (let i=1;i<=5;i++) {
console.log (i)
    let result = ""
    for (let j = 1; j <= i; j++) {
        final = result+1
        console.log(j)
    }
}
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// *
// * *
// * * *
// * * * *
// * * * * *

let x,y,chr;
for(x=5; x >=1; x--) {
    chr = " "
    for (y = x; y >= 1; y--) {
        chr = chr + ("*");
    }
    console.log(chr);
}

// * * * * *
// * * * * *
// * * * * *
// * * * * *

// using double loop
let x,y
for (x=1;x<=4;x++) {
    chr = " "
    for (y = 1; y <= 5; y++) {
        chr = chr + ('*')
    }
    console.log(chr)
}

//using single loop
let chr = " "
let count = 1
    for (let y = 1; y <= 20; y++) {
        chr = ('*')  + chr
        if( y % 5 ===0 ){
            console.log(chr,count)
            chr = " "
            count = count + 1
        }
    }