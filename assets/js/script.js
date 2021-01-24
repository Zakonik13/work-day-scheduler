// Show day of the week in header
let currentDay = moment().format('dddd');
$("#currentDay").append("Today is: " + currentDay);

// Blocks holding time information
let hour1 = $("#08").attr("data-hour");
let hour2 = $("#09").attr("data-hour");
let hour3 = $("#10").attr("data-hour");
let hour4 = $("#11").attr("data-hour");
let hour5 = $("#12").attr("data-hour");
let hour6 = $("#13").attr("data-hour");
let hour7 = $("#14").attr("data-hour");
let hour8 = $("#15").attr("data-hour");
let hour9 = $("#16").attr("data-hour");
let hour10 = $("#17").attr("data-hour");
let blocks = [hour1,hour2,hour3,hour4,hour5,hour6,hour7,hour8,hour9,hour10];

// Sets thisHour to current time: military
let thisHour = moment().format("HH");

// Iterates through blocks to check relationship to time
function checkBlocks() {
    for (i = 0; i < blocks.length; i++) {
        
        if (blocks[i] == thisHour) { 
            // Current hour is red
            document.getElementById(blocks[i]).style.backgroundColor = "#ff6961";
        } else if (blocks[i] > thisHour) {
            // Hours coming are green
            document.getElementById(blocks[i]).style.backgroundColor = "#77dd77";
        } else if (blocks[i] < thisHour) {
            // Hours past are grey
            document.getElementById(blocks[i]).style.backgroundColor = "#c4c4c4";
        }
    }
}

// Storage Variables
let text8 = document.querySelector("#text8");
let text9 = document.querySelector("#text9");
let text10 = document.querySelector("#text10");
let text11 = document.querySelector("#text11");
let text12 = document.querySelector("#text12");
let text13 = document.querySelector("#text13");
let text14 = document.querySelector("#text14");
let text15 = document.querySelector("#text15");
let text16 = document.querySelector("#text16");
let text17 = document.querySelector("#text17");

textBlocks = [];

// Data to be stored
function storeData() {
    text8 = document.querySelector("#text8").value;
    text9 = document.querySelector("#text9").value;
    text10 = document.querySelector("#text10").value;
    text11 = document.querySelector("#text11").value;
    text12 = document.querySelector("#text12").value;
    text13 = document.querySelector("#text13").value;
    text14 = document.querySelector("#text14").value;
    text15 = document.querySelector("#text15").value;
    text16 = document.querySelector("#text16").value;
    text17 = document.querySelector("#text17").value;
    
    textBlocks = [text8,text9,text10,text11,text12,text13,text14,text15,text16,text17];

    // Capture data from textarea
    for (i = 0; i < textBlocks.length; i++) {
        localStorage.setItem("text", JSON.stringify(textBlocks));
    }
}

// Data to be recalled
function getData() {

    let recallBlocks = JSON.parse(localStorage.getItem("text"));

    if (recallBlocks == null) {
        return;
    }
    
    text8.value = recallBlocks[0];
    text9.value = recallBlocks[1];
    text10.value = recallBlocks[2];
    text11.value = recallBlocks[3];
    text12.value = recallBlocks[4];
    text13.value = recallBlocks[5];
    text14.value = recallBlocks[6];
    text15.value = recallBlocks[7];
    text16.value = recallBlocks[8];
    text17.value = recallBlocks[9];    
}

$(".saveBtn").on("click", storeData);
checkBlocks();
getData();