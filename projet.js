
document.getElementById('darkModeButton').addEventListener
    ('click', function() {
	    document.body.classList.toggle('dark-mode');
    });
    

    document.getElementById('darkModeButton').addEventListener
    ('click', function() {
        document.querySelector('header').classList.toggle('dark-mode');
    });

    document.getElementById('darkModeButton').addEventListener('click', function() {
        document.querySelectorAll('.D1').forEach(function(element) {
            element.classList.toggle('dark-mode');
        });
    
        document.querySelectorAll('.p1').forEach(function(element) {
            element.classList.toggle('dark-mode');
        });
    });



    document.getElementById('darkModeButton').addEventListener('click', function() {
        document.querySelectorAll('p').forEach(function(element) {
            element.classList.toggle('dark-mode');
        });
    });






    document.getElementById('active').addEventListener('click', function(event) {
        event.preventDefault();
    
        var nameValue = String(document.getElementById('name').input);
        var numberValue = Number(document.getElementById('number').input);
        var gmailValue = String(document.getElementById('gmail').input);
        var countryValue = String(document.getElementById('country').input);
    
        var message = "Your name: " + nameValue + "\nYour number: " + numberValue + "\nYour Gmail: " + gmailValue + "\nYour country: " + countryValue;
    
        confirm(message);
    });

   