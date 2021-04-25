
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if (Client.checkForName(formText)) {
        console.log("bleble")
        fetch('http://localhost:8081/zara', {
            method: 'POST' ,
            credetials: 'same orgin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ formText }),
        })
        .then((res) => res.json())
        .then((res) => {
            updateUI(res.json());
            console.log(res.json())
        
    }).catch(err => console.log('err ========> ', err))
    }
    else {
        alert("Invalid URL")
    }   
    console.log("::: Form Submitted :::")
    
}

async function updateUI(res) {
    document.getElementById('confidence').innerHTML = 'Confidence ' + res.confidence;
    document.getElementById('subjec').innerHTML = 'Subjecjectivity ' + res.subjec;
    document.getElementById('score').innerHTML = 'Score ' + res.score;
}


export { handleSubmit }

