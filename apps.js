'use strictly'

//I want to display a Physicist images and have a textbox appear asking them to fill in the Physicist name
//First, I declare an empty array that will store my Physicist 
var physicistsArray = [];
createPhysicist.storedData=[];

//Displaying the physicists to the user in the elements labelled with the displayPhysicistImage id
var targetSection = document.getElementById('displayPhysicistImage');

//constructor function to create the physicist objects
//includes a counter to show user how many questions they have done so far
//Includes 2 parameters, the image path and the name of the Physicist
function createPhysicist(imgPath, name) {
    this.imgPath = '';
    this.name='';
    physicistsArray.push(this);
}

//Render the created Physicist
createPhysicist.prototype.loadImage= function(){

    var thePhysicist = document.createElement('li');
    var displayPhysicistImage = document.createElement('img');
    var nameofPhysicist = document.createElement('p');
    
    displayPhysicistImage.src = this.imgPath;
    displayPhysicistImage.id = this.name;

    thePhysicist.appendChild(displayPhysicistImage);
    thePhysicist.appendChild(nameofPhysicist);
    targetSection.appendChild(thePhysicist);

}

//Function to display the Physicist Image
function showPhysicistImage(){
    targetSection.innerHTML='';
    var currentPhysicist = document.createElement('div');
    currentPhysicist.id = 'currentPhysicist';
    targetSection.appendChild(currentPhysicist);

    //randomly choose a physicist from the possible choices
    var index = Math.floor(Math.random()*physicistsArray.length);
    physicistsArray[index].loadImage();

}//end of showPhysicistImage function

//Once the user inputs a name, generate a new image

//Creating all of the Physicist Objects

var marieCurie = new createPhysicist ('/assetts/marieCurie.jpeg', 'Marie Curie');

console.log(physicsarray)




