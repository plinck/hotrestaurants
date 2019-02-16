// get all the tables
function runTableQuery() {
    // do GET on route /ape/tables 
    $.ajax({
            url: "/api/tables",
            method: "GET"
        })
        .then(function (tableData) {
            // Loop through and display each of the tables and who is on it
            for (var i = 0; i < tableData.length; i++) {

                // Get a reference to the tableList element and populate it with tables
                var tableList = $("#tableList");

                // Then display the fields in the HTML (Section Name, Date, URL)
                var listItem = $("<li class='list-group-item mt-4'>");

                listItem.append(
                    $("<h2>").text("Table #" + (i + 1)),
                    $("<hr>"),
                    $("<h2>").text("ID: " + tableData[i].customerID),
                    $("<h2>").text("Name: " + tableData[i].customerName),
                    $("<h2>").text("Email: " + tableData[i].customerEmail),
                    $("<h2>").text("Phone: " + tableData[i].phoneNumber)
                );

                tableList.append(listItem);
            }
        });
}

// get everythng on waitlist
function runWaitListQuery() {
    // do get on routre /api/waitlist
    $.ajax({
            url: "/api/waitlist",
            method: "GET"
        })
        .then(function (waitData) {
            // Loop through and display each of the waitliost items
            for (var i = 0; i < waitData.length; i++) {

                // Get a reference to the waitList element and populate it with tables
                var waitList = $("#waitList");

                // Then display the fields in the HTML (Section Name, Date, URL)
                var listItem = $("<li class='list-group-item mt-4'>");

                listItem.append(
                    $("<h2>").text("Place in Line #" + (i + 1)),
                    $("<hr>"),
                    $("<h2>").text("ID: " + waitData[i].customerID),
                    $("<h2>").text("Name: " + waitData[i].customerName),
                    $("<h2>").text("Email: " + waitData[i].customerEmail),
                    $("<h2>").text("Phone: " + waitData[i].phoneNumber)
                );

                waitList.append(listItem);
            }
        });
}

// This function resets all of the data in our tables. This is intended to let you restart a demo.
function clearTable() {
    alert("Clearing...");

    // Clear the tables on the server and then empty the elements on the client
    $.ajax({
        url: "/api/clear",
        method: "POST"
    }).then(function () {
        $("#waitList").empty();
        $("#tableList").empty();
    });
}

$("#clear").on("click", clearTable);


// Run Queries!
// ==========================================
runTableQuery();
runWaitListQuery();