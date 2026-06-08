function validateForm(){
    
    let vehicletype = document.getElementById("vehicle type").value;
    let vehiclenumber = document.getElementById("vehicle number").value;
    let parkinghours = document.getElementById("parking hours").value;

    if (vehicletype == ""){
        alert("Vehicle Type cannot be empty!");
        return false;
    }
    if (vehiclenumber == ""){
        alert("Vehicle Number cannot be empty!");
        return false;
    }
    if(parkinghours<=0){
        alert("Parking hours must be greater than 0!");
        return false;
    }
    return true;
}
function calculateEstimate(){

    let vehicletype = document.getElementById("Vehicle Type").value;
    let parkinghours = document.querySelector('input[name="Vehicle Type"]:checked').value;

    let price = 0;

    if( vehicletype === "Car"){
        price = 3;
    } else if (vehicletype === "Motorcycle"){
        price = 1;
    } else if (vehicletype === "Van"){
        price = 5;
    }
      if (parkinghours === "perhour"){
        price = price + perhour;
    } 


    let total = price * parkinghours;

    DocumentTimeline.getElementById("estimate").innerText = total;
}