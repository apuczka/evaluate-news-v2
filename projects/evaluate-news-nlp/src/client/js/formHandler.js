
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if (Client.checkForName(formText)) {
        console.log("bleble")
        fetch('https://localhost:8081/zara', {
            method: 'POST' ,
            credetials: 'same orgin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ formText }),
        })
        .then((res) => res.json())
        .then((res) => {
            updataUI(res);
            console.log(res)
    })
    }
    else {
        alert("Invalid URL")
    }   
    console.log("::: Form Submitted :::")
}

const updateUI = async () => {
        console.log("bkij")
        const req = await fetch('/zara')
        try{
            const allData = await req.json()
            console.log(res);
            document.getElementById('confidence').innerHTML = `Confidence: ${confidence}`;
            document.getElementById('subjec').innerHTML = `Subjecjectivity: ${subjec}`;
            document.getElementById('score').innerHTML = `Score: ${score}`;
        }catch(error){
            console.log("error", error)
        }  
}


export { handleSubmit }

