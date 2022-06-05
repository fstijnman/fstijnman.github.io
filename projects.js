fetch("./MOCK_DATA.json")
.then(response => {
   return response.json();
})
.then(jsondata => loopOver(jsondata));

function loopOver(data) {
    for (let i = 0; i < data.length; i++) {
        projectItem = data[i]
        const newDiv = document.createElement("div");
        const projectHeader = document.createElement("h3");
        projectHeader.innerHTML = projectItem["name"];
        newDiv.appendChild(projectHeader)
        const newContent = document.createTextNode(projectItem["description"]);
        newDiv.appendChild(newContent);
        const currentDiv = document.getElementById("project-content");
        currentDiv.appendChild(newDiv);

    }
    
}