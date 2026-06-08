<?php

$vehiclenumber = $_POST['vehicle_number'];
$vehicletype = $_POST['vehicle_type'];
$parkinghours = $_POST['parking_hours'];


function calculateTotal($vehicletype, $parkinghours){
    $price = 0;

    if ($vehicletype == "Car"){
        $price = 3;
    }else if ($vehicletype == "Motorcycle"){
        $price = 1;
    }else if ($vehicletype == "Van"){
        $price = 5;
    }

    return $price * $parkinghours;
}

$subtotal = calculateTotal($vehicletype, $parkinghours);

echo "<h2>Payment Summary</h2>";
echo "Vehicle Number: $vehiclenumber <br>";
echo "Vehicle Type: $vehicletype <br>";
echo "Parking Hours: $parkinghours <br>";
echo "Total Fee : RM $subtotal <br>";


echo "<h3>Payment Successfull!</h3>";

?>