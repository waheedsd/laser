var data = [];
function wip(data){
    // Sheet metal
    var wipStep = $(".wipStep td").length;
        for(var i=0; i<wipStep;i++){
            var td = $("<td></td>");
            td.append(p);
            var p = $("<p></p>");
            var li1 = $("<li></li>");
            p.append(li1);
            var li2 = $("<li></li>");
            p.append(li2);
            $(".smTable").append(td);
          }
    // fabrication
          var fabStep = $(".fabStep td").length;
        for(var i=0; i<fabStep;i++){
            var td = $("<td></td>");
            td.append(p);
            var p = $("<p></p>");
            var li1 = $("<li></li>");
            p.append(li1);
            var li2 = $("<li></li>");
            p.append(li2);
            $(".fabTable").append(td);
          }
    // surface treatment
    var stStep = $(".stStep td").length;
    for(var i=0; i<stStep;i++){
        var td = $("<td></td>");
        td.append(p);
        var p = $("<p></p>");
        var li1 = $("<li></li>");
        p.append(li1);
        var li2 = $("<li></li>");
        p.append(li2);
        $(".stTable").append(td);
      }
      //NPI Assembly
    var npiStep = $(".npiStep").attr("colspan");
    for(var i=0; i<npiStep;i++){
        var td = $("<td></td>");
        td.append(p);
        var p = $("<p></p>");
        var li1 = $("<li></li>");
        p.append(li1);
        var li2 = $("<li></li>");
        p.append(li2);
        $(".npiTable").append(td);
      }
      //gap
      var npiStep = $(".Step").attr("colspan");
      console.log(npiStep);
      for(var i=0; i<npiStep;i++){
          var td = $("<td></td>").css({"visibility":"hidden", "border":"none"});
          td.append(p);
          var p = $("<p></p>");
          var li1 = $("<li></li>");
          p.append(li1);
          var li2 = $("<li></li>");
          p.append(li2);
          $(".npiTable").append(td);
        }
      //Job Production
      var npiStep = $(".jobStep").attr("colspan");
      console.log(npiStep);
      for(var i=0; i<npiStep;i++){
          var td = $("<td></td>");
          td.append(p);
          var p = $("<p></p>");
          var li1 = $("<li></li>");
          p.append(li1);
          var li2 = $("<li></li>");
          p.append(li2);
          $(".npiTable").append(td);
        }
         //assembly
    var assemblyStep = $(".assemblyStep td").length;
    console.log(assemblyStep);
    for(var i=0; i<assemblyStep;i++){
        var td = $("<td></td>");
        td.append(p);
        var p = $("<p></p>");
        var li1 = $("<li></li>");
        p.append(li1);
        var li2 = $("<li></li>");
        p.append(li2);
        $(".assemblyTable").append(td);
      }
      //assemblyGl
      var assemblyGlStep = $(".assemblyGlStep").attr("colspan");
      for(var i=0; i<assemblyGlStep;i++){
          var td = $("<td></td>");
          td.append(p);
          var p = $("<p></p>");
          var li1 = $("<li></li>");
          p.append(li1);
          var li2 = $("<li></li>");
          p.append(li2);
          $(".assemblyGlTable").append(td);
        }
        //AssemblyHl
        var assemblyHlStep = $(".assemblyHlStep").attr("colspan");
        for(var i=0; i<assemblyHlStep;i++){
            var td = $("<td></td>");
            td.append(p);
            var p = $("<p></p>");
            var li1 = $("<li></li>");
            p.append(li1);
            var li2 = $("<li></li>");
            p.append(li2);
            $(".assemblyHlTable").append(td);
          }
    }
   
    

$(document).ready(function(){
    $.ajax({
        url:"/wip",
        mehtod:"GET",
        dataType:"JSON",
        success:function(res){
            data = res;
                // for(var key in data){
                //    let data1 = data[key];
                //    for(var key1 in data1){
                //        wip(data1[key1]);
                //    }
                // }
                wip(data);
        },
        error:function(error){
            console.log(error);
        }
    });
})
