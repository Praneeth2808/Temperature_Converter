function onReady() {

    $('#temperature').animate({height:'450px'}, 100);
    
    $('#degree').html("100°")
    
    $('#newEntry').submit(onSubmit);
    
    function onSubmit(event){
      event.preventDefault();
      }
    
    $('#fbutton').click(fToCOnClick);
    $('#cbutton').click(cToFOnClick);
    
    function fToCOnClick() {
      event.preventDefault();
      let degreeTempOne = parseInt($('#newEntry').val());
    
      if (!degreeTempOne){
      return;
      }
    
      let fToCTemp = ((degreeTempOne - 32) * 5 / 9).toFixed(1);
    
    
      $('#degree').html(`${fToCTemp}°C`)
      $("#newEntry").val('')
    
      if (fToCTemp < 0) {
        $('#temperature').animate({height:'100px'}, 100);
      }
      if (fToCTemp > 10) {
        $('#temperature').animate({height:'200px'}, 100);
      }
      if (fToCTemp > 20) {
        $('#temperature').animate({height:'300px'}, 100);
      }
      if (fToCTemp > 35) {
        $('#temperature').animate({height:'400px'}, 100);
      }
      if (fToCTemp > 50) {
        $('#temperature').animate({height:'600px'}, 100);
      }
    }
    
    function cToFOnClick() {
      event.preventDefault();
      let degreeTempTwo = parseInt($('#newEntry').val());
    
      if (!degreeTempTwo){
      return;
      }
    
     let cToFTemp = ((degreeTempTwo * 9) / 5 + 32).toFixed(1);
    
      $('#degree').html(`${cToFTemp}°F`)
      $("#newEntry").val('')
    
      if (cToFTemp < 0) {
        $('#temperature').animate({height:'100px'}, 100);
      }
      if (cToFTemp > 25) {
        $('#temperature').animate({height:'200px'}, 100);
      }
      if (cToFTemp > 50) {
        $('#temperature').animate({height:'300px'}, 100);
      }
      if (cToFTemp > 75) {
        $('#temperature').animate({height:'400px'}, 100);
      }
      if (cToFTemp > 100) {
        $('#temperature').animate({height:'600px'}, 100);
      }
    }
    
    }
    $('document').ready(onReady);
    