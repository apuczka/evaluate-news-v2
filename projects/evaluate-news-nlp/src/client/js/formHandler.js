
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if (Client.checkForName(formText)) {
        fetch('http://localhost:8081/zara', {
            method: 'POST' ,
            credetials: 'same orgin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ formText }),
    })
        .then((res) => {
            return res.json()
        })
        .then((result) => {
            console.log('result => ', result)
            updateUI(result);
        }).catch(err => console.log('err ========> ', err))
    } 
    else {
        alert("Invalid URL")
    }   
    console.log("::: Form Submitted :::")
    
}

async function updateUI(res) {
    document.getElementById('confidence').innerHTML = 'Confidence ' + res.confidence;
    document.getElementById('subjec').innerHTML = 'Subjecjectivity ' + res.subjectivity;
    document.getElementById('score').innerHTML = 'Score ' + res.score_tag;
}


export { handleSubmit }

