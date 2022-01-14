process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);

    var star = "";
    
    for(let i = 0; i < b; i++)
    {
            for(let j = 0; j < a; j++)
                {
                    star += "*";
                }
        star += "\n";
    }
    console.log(star);
    // 다른 풀이 방법.
    // const row = '*'.repeat(a);
    // for(let i = b; i > 0; i--)
    //     {
    //         console.log(row);
    //     }
});
