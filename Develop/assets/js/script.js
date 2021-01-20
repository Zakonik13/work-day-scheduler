// Global variables
let blocks = [];
let eachRow = '<div class="row"><div class="col-1"></div><div class="col-1 hour">Hour</div><div class="col-8 time-block">Add your notes or whatever you need here</div><div class="col-1 save"><button type="button" class="saveBtn">Save</button></div><div class="col-1"></div></div>';

// Show day of the week in header
let currentDay = "Today is: " + moment().format('dddd');
$("#currentDay").append(currentDay);

// Create blocks for time and notes
function timeBlocks() {
    for (i = 0; i < 24; i++) {
        blocks.push(eachRow);
    }
    $(".container").append(blocks);
}

// 

timeBlocks();
