
  $(document).ready(function() {
    //$("#comprobar").click(comprobar_datos);

    $("#nombre").focus(function(){
        var campo_nombre=$(this);
        if(campo_nombre.val()==campo_nombre.attr("value")){
          campo_nombre.val("");
        }
    });

    $("#form_datos").submit(function(){

      if($("#nombre").val()=="" || $("#nombre").val()=="Obligatorio nombre"){
        alert("Por favor completa el nombre");
        $("#nombre").focus();
        
        return false;
      }
    });

    $("#edad").blur(function(){
      var edad_usuario=$(this).val();
      if(isNaN(edad_usuario)){
        alert("Por favor introduce un valor numerico");
        $(this).focus();
        $(this).val("");
      }
    });
    var miArray=new Array();
    var i = 0;
    //$(":radio").click(function(){
    $(":checkbox").click(function(){
     // alert($(this).val());
      miArray[i]=$(this).val();
      //alert("Posicion "+ i +" "+miArray[i]);
      $("#las_aficiones").append(miArray[i]).append("<br>");
      i++;
    });

    $("#pais").change(function(){
      alert("Pais de resdencia: "+$(this).val());
    });

  });


  function comprobar_datos(){
    
    //var minombre=("#nombre").val();
    //$(":text").each(function(){
    $(":input").each(function(){
    //  alert($(this).val());
    });
  }

  function comprobar_datos1(){
    
    if($("#masculino").attr("checked")){//da igual si colocamos deporte o alguna otra casilla
      alert("Eres hombre");
    }else
    {
      alert("Eres mujer");
    }
  }
