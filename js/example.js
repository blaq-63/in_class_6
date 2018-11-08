// ADD NEW ITEM TO END OF LIST
var ulElement = document.getElementsByTagName('ul')[0];

// ADD NEW ITEM START OF LIST
var newLiLast = document.createElement('li');
var lastLITextNode = document.createTextNode('cream');
newLiLast.appendChild(lastLITextNode);
ulElement.appendChild(newLiLast); //This adds to the UL

// Adding element to LAST of list
var firstItemLI = document.createElement('li');
var liTextNode = document.createTextNode('kale');
firstItemLI.appendChild(liTextNode);
ulElement.insertBefore(firstItemLI, ulElement.firstChild);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var listItems = document.querySelectorAll("li");

var i;
for (i = 0; i < listItems.length; i++)
{
    listItems[i].className = "cool";
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var headingElement = document.querySelector("h2");
var headingText = headingElement.firstChild.nodeValue;
var totalItems = listItems.length;
var newHeading = headingText + " <span>" + totalItems + "</span>";
headingElement.innerHTML = newHeading;
