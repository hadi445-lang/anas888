function login(user, callback) {
    setTimeout(() =>{
        console.log(`${user} logged in`);
        callback();
    }, 1000);
}

function selectRestaurant(callback) {
    setTimeout(() => {
        console.log("Resturant selected");
        callback();
    }, 1000);
}


function placeorder(callback) {
    setTimeout(() => {
        console.log("Order placed");
        callback();
    }, 1000);
}

function makepayment(callback) {
    setTimeout(() => {
        console.log("Payment Successful");
        callback();
    }, 1000);
}

function confirmDelivery() {
    setTimeout(() => {
        console.log("Food delivery successfully");
    }, 1000);
}
 
login("Ali",() => {
    selectRestaurant(()=> {
    placeorder(()=> {
    makepayment(() => {
    confirmDelivery();    
            });
        });
    });
});

