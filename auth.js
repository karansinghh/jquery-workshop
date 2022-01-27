$("#submit").click(function(){

    var uname = $('#uname').val();  
    var password = $('#password').val();
    console.log("this is from form: "+uname);
    console.log("this is from form: "+password);
    var obj=new Object();
    obj.uname = uname ;
    obj.password=password;

    alert(uname);
            $.ajax({
                type:"GET",
                dataType:"json",
                data:obj,
                url:"json/validate.json", 
                success: function(data) {   
                    alert("inside success");
                    $.each(data, function (key, value) {
                    console.log(value.uname);
                        if (value.uname != '' && value.password!='')
                            {
                                if(value.uname!=uname && value.password!=password)
                                alert("password correct");
                                return false;
                            }
                    });


                },
                error: function() {

                }
           });


});

});