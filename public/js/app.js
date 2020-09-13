const generateButton = document.getElementById('generate');
const zipInput = document.getElementById('zip');
const form = document.getElementById('form');

const openWeatherMapData = {
    BASE_URL: "http://api.openweathermap.org/data/2.5/weather?zip=",
    KEY:"cf301ca20db80baafb28fee8d8d13a95"
}

// Get Weather Data API
async function fetchWeatherData(zipCode) {
    const responseData = await sendHttpRequest(
        "GET",
        openWeatherMapData.BASE_URL + `${zipCode}` + ",us" + "&appid=" + openWeatherMapData.KEY
    );
    // console.log("responseData: " + responseData);
    return responseData;
}

//Generate Button even listener
generateButton.addEventListener("click", generateData);

function generateData() {
    // e.preventDefault();
    //Get the date
    let d = new Date();
    let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear(); 
    const zipCode = document.querySelector('#zip').value;
    const content = document.querySelector('#feelings').value;
    
    if (zipCode.length === 0 || feelings.length === 0) {
        alert("Please fill up value in fields");
        return
    }

    //Response Weather Data Temperature
    const allData = fetchWeatherData(zipCode);
    console.log(allData);
    
    //Create a result
    createPost(newDate,allData,content);
    form.reset();   
}

function sendHttpRequest(method, url, data) {
    // Inside that callback function call your async GET request with the parameters:
    // user entered zip code (see input in html with id zip)
    // personal API key
        return fetch(url,{
            method: method,
            body: data,
            // body: JSON.stringify(data),
            // header: {
            //     'Content-Type':'application/json'
            // }
        }).then(response => {
            if (response.status >= 200 && response.status < 300) {
                return response.json().then(allData => {
                    console.log(allData);
                    //updateUI();
                });
            } else {
                return response.json().then(errData => {
                    console.log(errData);
                    throw new Error('Server went wrong');
                });
            }
        });
}

//Post Data
async function createPost(newDate,data,content) {
    const projectData = {
        date: newDate,
        temp: data.main.temp,
        content: content
    };

    const fd = new FormData(form);
    fd.append('date',newDate);
    fd.append('temp',data.main.temp);
    fd.append('content',content);
    sendHttpRequest('POST', "/result",fd);
}

//Update UI
async function updateUI() {
    const request = await fetch('/result');
    try {
        const allData = await request.json()
        document.getElementById('date').innerHTML = allData.date;
        document.getElementById('temp').innerHTML = allData.main.temp;
        document.getElementById('content').innerHTML = allData.content;
    }
    catch(error) {
        console.log("error", error);
    }
}
