
var tempList=[];
var listObj=[
    {
        "name": "John Smith",
        "location": "New York, NY"
    },
    {
        "name": "Jane Doe",
        "location": "Los Angeles, CA"
    },
    {
        "name": "Bob Johnson",
        "location": "Chicago, IL"
    },
    {
        "name": "Emily Davis",
        "location": "Houston, TX"
    },
    {
        "name": "Michael Brown",
        "location": "Phoenix, AZ"
    },
    {
        "name": "Sarah Miller",
        "location": "Philadelphia, PA"
    },
    {
        "name": "David Garcia",
        "location": "San Antonio, TX"
    },
    {
        "name": "Jessica Rodriguez",
        "location": "San Diego, CA"
    },
    {
        "name": "Mark Wilson",
        "location": "Dallas, TX"
    },
    {
        "name": "Elizabeth Martinez",
        "location": "San Jose, CA"
    },
    {
        "name": "Joshua Hernandez",
        "location": "Austin, TX"
    },
    {
        "name": "Karen Moore",
        "location": "Jacksonville, FL"
    },
    {
        "name": "Brian Jackson",
        "location": "Fort Worth, TX"
    },
    {
        "name": "Heather Anderson",
        "location": "Columbus, OH"
    },
    {
        "name": "Teresa Thomas",
        "location": "Charlotte, NC"
    },
    {
        "name": "Dennis Mitchell",
        "location": "Indianapolis, IN"
    },
    {
        "name": "Cynthia Lee",
        "location": "Seattle, WA"
    },
    {
        "name": "Adam Hall",
        "location": "Denver, CO"
    },
    {
        "name": "Nancy Allen",
        "location": "El Paso, TX"
    },
    {
        "name": "Lisa King",
        "location": "Washington, DC"
    },
    {
        "name": "William Wright",
        "location": "Boston, MA"
    },
    {
        "name": "Mary Scott",
        "location": "Nashville, TN"
    },
    {
        "name": "Kathryn Green",
        "location": "Portland, OR"
    },
    {
        "name": "Gerald Baker",
        "location": "Vancouver, BC"
    },
    {
        "name": "Eric Cooper",
        "location": "Sacramento, CA"
    },
    {
        "name": "Stephanie Gomez",
        "location": "Oklahoma City, OK"
    },
    {
        "name": "Edward Kelly",
        "location": "Tulsa, OK"
    },
    {
        "name": "Ashley Sanders",
        "location": "Winnipeg, MB"
    }
];

const nextButton = document.getElementById("next-button");
const ulList = document.getElementById("ulList");
var currentPage = 0;
var itemsPerPage = 3;
function show(currentPage){
	currentPage = currentPage * itemsPerPage;
	for(let i=currentPage; i< currentPage+itemsPerPage; i++){
		if(listObj[i]){
			tempList.push(listObj[i]);	
		}					
	}
	
	let newid = currentPage+1;
	tempList.forEach(el => {				
		el.id = newid;
		newid++;
	});
	console.log(tempList);			
			
	let generatedHtml = tempList.map(function (el) {
		return `<li>
					<span>${el.id}</span>
					<div class="details">
						<div class="name"><span>Name:</span> ${el.name}</div> 
						<div class="location"><span>Location:</span> ${el.location}</div>
					</div>
				</li>`
	});
	generatedHtml= generatedHtml.join("");	
	ulList.innerHTML =generatedHtml;	
			
}

if(currentPage === 0){
	show(currentPage);
}
nextButton.addEventListener("click", () => {
	currentPage++;
	tempList =[];
	const pageCount = Math.ceil(listObj.length / itemsPerPage);
	if(currentPage < pageCount ){
		show(currentPage);
	}else{
		alert("No more people!!");
	}
	
});