 // Get the current date and time
        function displayDateTime() {
            let today = new Date();
            let date = today.toLocaleDateString();
            let time = today.toLocaleTimeString();
            document.getElementById("datetime").innerHTML = date + " | " + time;
        }

        // Refresh the date and time every second
        setInterval(displayDateTime, 1000);