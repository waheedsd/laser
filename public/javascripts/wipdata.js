var data = [];
function wip(data){
    var wipclass = $(".wip");
        let tdata;
            for(let key in data){
                var dlnth = data[key].length-1;
                for(var i = dlnth; i >= 0; i--){
                    tdata = data[key][i];
                    var td = $("<td></td>");
                    var p = $("<p></p>");
                    td.append(p);
                    p.append(li1);
                    var li1 = $("<li></li>");
                    p.append(li2);
                    var li2 = $("<li></li>");
                    wipclass.append(td);
                console.log(tdata[i]);
              }
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
                       wip(data);
                //        console.log(data1[key1]);
                //    }
                // }
        },
        error:function(error){
            console.log(error);
        }
    });
})
