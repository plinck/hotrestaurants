// Post
$(".submit").on("click", function (event) {
    event.preventDefault();

    // Here we grab the form elements
    var newReservation = {
        customerName: $("#reserve-name").val().trim(),
        phoneNumber: $("#reserve-phone").val().trim(),
        customerEmail: $("#reserve-email").val().trim(),
        customerID: $("#reserve-unique-id").val().trim()
    };
    console.log(newReservation);

    // post new reservation
    $.post("/api/tables", newReservation,
        function (data) {
            // If a table is available... tell user they are booked.
            if (data) {
                alert("You booked a table, dont be late");
            }
            // If a table is available... tell user they on the waiting list.
            else {
                alert("Sorry you are on the wait list");
            }

            // Clear the form when submitting
            $("#reserve-name").val("");
            $("#reserve-phone").val("");
            $("#reserve-email").val("");
            $("#reserve-unique-id").val("");

        });
});