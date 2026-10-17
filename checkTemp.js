function checkTemp(temp)
{
    let message=" ";

    if (temp < 20)
        message = "Cold"
    else if (temp >=20 && temp<=30)
        message = "Normal"
    else
        message = "Hot"

    return message;
}

console.log("Temperature 15:", checkTemp(15))
console.log("Temperature 28:", checkTemp(28))
console.log("Temperature 35:", checkTemp(35))