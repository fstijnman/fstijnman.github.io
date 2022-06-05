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
        const projectImg = document.createElement("img");
        const newContent = document.createTextNode(projectItem["description"]);
        projectImg.src = 'img/project_' + (i + 1) + '.png';
        projectHeader.innerHTML = projectItem["name"];
        newDiv.appendChild(projectImg);
        newDiv.appendChild(projectHeader)
        newDiv.appendChild(newContent);
        const currentDiv = document.getElementById("project-content");
        currentDiv.appendChild(newDiv);

    }
    
}

$(document).ready(function() {
    $('a[href^="#"]').click(function(event) {
        var id = $(this).attr("href");    
        var offset = 60;
        var target = $(id).offset().top - offset;
        $('html, body').animate({scrollTop:target}, 500);
        event.preventDefault();
    });
    });
