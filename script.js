async function getMatchData() {

    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=d7efc72d-de26-47bd-88f4-49b423868b6c&offset=0")
        .then(data => data.json())
        .then(data => {
            if (data.status != "success")return;

            const matchesList = data.data;

            if(!matchesList)return [];
            
            //add your api key from cricketdata.org
            const relevantData = matchesList.filter(match => match.series_id == "39bb260e-684d-46c5-9501-73cc6ee0fe31").map(match => `${match.name}, ${match.status}`);

            console.log({relevantData});

            document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match} </li>`).join('');

            return relevantData;

        })
        .catch(e => console.log(e));
}

getMatchData();