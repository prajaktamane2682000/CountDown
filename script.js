const end_Date = "25 Aug 2024 11:59 PM" //It will change the Date....So to change the date simply change "end_Date"

document.getElementById("endDate").innerText = end_Date; //It will pass endDate to the HTML Code

//Clock Function

const inputs = document.querySelectorAll("input");


const clock = () => {
    const end = new Date(end_Date);

    // console.log(end);

    const start = new Date();
    // console.log(start);
    // console.log(end instanceof Date);
    // console.log(start instanceof Date);

    const diff = (end - start);
    // console.log(diff)/1000; //miliseconds

    if (diff < 0) {
        return;
    }

    //converting into seconds
    const seconds = diff / 1000;
    // console.log(seconds);



    inputs[0].value = Math.floor(seconds / 3600 / 24); //convert into remaining days
    inputs[1].value = (Math.floor(seconds / 3600) % 24);//coverting to remaining hours
    inputs[2].value = (Math.floor(seconds / 60)) % 60;//converted to remaining minutes
    inputs[3].value = Math.floor(seconds % 60);//converted to remaining seconds


}
//initially calls clock function
clock();

//60*60 = 3600 sec = 1hr

//Set interval- it will call clock fuction at the set inteval.

setInterval(
    () => {
        clock();
    },
    1000
)







