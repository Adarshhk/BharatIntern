
const answer = document.getElementById("ans")

const submit = () => {
    const val = Number.parseFloat(document.getElementById("temp").value)
    const suffix = document.getElementById("convert").value
    const convertTo = document.getElementById("convertTo").value

    if(suffix == convertTo)
    {
        answer.innerHTML = val + `°${suffix}`;
    }

    if(suffix == "F" && convertTo == "C")
    {
        const newAns = (5/9)*(val-32);
        answer.innerHTML = Math.round(newAns * 100) / 100 + "°C";
    }

    else if(suffix == "C" && convertTo == "F")
    {
        const newAns = (val*(9/5)) + 32;
        answer.innerHTML = newAns + "°F";
    }

}

