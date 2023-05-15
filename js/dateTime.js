 // Získanie aktuálneho dátumu a času
        function displayDateTime() {
            let today = new Date();
            let date = today.toLocaleDateString();
            let time = today.toLocaleTimeString();
            document.getElementById("datetime").innerHTML = date + " | " + time;
        }

        // Obnovenie dátumu a času každú sekundu
        setInterval(displayDateTime, 1000);