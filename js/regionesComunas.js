//AJAX POST + JQuery
// $(function(){
   
//     $('#region').change(function(){

//         $('#region option:selected').each(function(){
//             id_region = $(this).val();
//             $.post("includes/getComuna.php", { id_region: id_region }, function(data){
//                 $('#comuna').html(data);
//             });
//         });
//     });


// });


// AJAX GET
// document.addEventListener("DOMContentLoaded", function(event) {

//     document.getElementById('region').addEventListener('change', function(){

//         var region=this.value;
//         var xhr = new XMLHttpRequest();

//         xhr.onreadystatechange = function () {
//             if (xhr.readyState == 4 && xhr.status == 200){
//                 document.getElementById('comuna').innerHTML = xhr.responseText;
//             }
//         }

//         xhr.open("GET", "includes/getComuna2.php?id_region="+region , true);
//         xhr.send();

//     });
    
// });


// AJAX POST
document.addEventListener("DOMContentLoaded", function(event) {

    document.getElementById('region').addEventListener('change', function(){

        var region=this.value;
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200){
                document.getElementById('comuna').innerHTML = xhr.responseText;
            }
        }

        xhr.open("POST", "includes/getComuna2.php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send("id_region="+region);

    });
    
});
