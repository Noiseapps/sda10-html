$(document).ready(function () {
    $('#grid1').fadeOut();


    var get_data = function () {
        var callback = function (data) {
            console.log(data);

            $.each(data, function (index, element) {

                var content = "\n" +
                    "                <tr>" +
                    "                <th>" + element.id + "</th>" +
                    "                <th>" + element.title + "</th>" +
                    "                <th>" + element.content + "</th>" +
                    "                <th>" + element.creator + "</th>" +
                    "                </tr>";
                $("table tbody").append(content);
            });
        };

        $.get("http://localhost:8080/notes", callback).fail(function () {
            alert("nie działa")
        });
    };


    $("form").submit(function (e) {
        e.preventDefault();
        var data = {
            title: $("#title").val(),
            content: $("#content").val(),
            creator: "admin"
        };

        $.ajax({
            url: "http://localhost:8080/notes",
            method: "POST",
            data: JSON.stringify(data),
            dataType: "json",
            headers: {
                "Content-Type": "application/json"
            },
            success: function (data) {
                get_data();
            }
        });
    });
    get_data();
});