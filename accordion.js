function loadAccordion(){
    $( function() {
        $( "#accordion" ).accordion();
    });
}

loadAccordion();

/* Переопределение */
/* 
    window.addEventListener('resize', function(){
        if (document.documentElement.clientWidth <= 768){
            loadAccordion();
        }
    });
*/