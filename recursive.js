
function recursive(n) {
    if(n==0)
    {
        return 1;
    }
    else 
        return (n-1) * n;
}

const result = recursive(3);
console.log(result);
