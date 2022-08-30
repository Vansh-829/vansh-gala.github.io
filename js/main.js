$(document).ready(function(){
 
    $("#download").click(function(){
        location.href="https://drive.google.com/uc?export=download&id=1rIkEa1J_pDaj9B4PAzc5LPVXY3ZWU_KT";
    });

    $('div.certificate').on('mouseleave',function(){
        $("button").css("visibility","hidden");
    });

    $('#linux').on("mouseenter",()=>{
        $('#linux button').css("visibility","visible");
        $('#linux button').click(()=>{
            window.open('https://drive.google.com/file/d/10vR0OUy2Nj0mzYjBCQmYu90awHp-56SE/view','_blank');
        });
    });
    $('#c_program').on("mouseenter",()=>{
        $('#c_program button').css("visibility","visible");
        $('#c_program button').click(()=>{
            window.open('https://drive.google.com/file/d/1zm_DtKtlC0a0igAZtRXkD5a-y5U-RgLi/view','_blank')
        });
    });
    $('#python').on("mouseenter",()=>{
        $('#python button').css("visibility","visible");
        $('#python button').click(()=>{
            window.open('https://drive.google.com/file/d/1yQqOjf09B0WeHj5zWUJsDJv6wzFkLBCb/view','_blank')
        });
    });
    $('#python_dataStructure').on("mouseenter",()=>{
        $('#python_dataStructure button').css("visibility","visible");
        $('#python_dataStructure button').click(()=>{
            window.open('https://drive.google.com/file/d/1Rs5RCGrPLiHPr3OxrvGxkiCkMvDKceQx/view','_blank')
        });
    });
    $('#python_webData').on("mouseenter",()=>{
        $('#python_webData button').css("visibility","visible");
        $('#python_webData button').click(()=>{
            window.open('https://drive.google.com/file/d/1xFme7HIsttmR-ckO8RC7MuC1DX0w702G/view','_blank')
        });
    });
    $('#c_training').on("mouseenter",()=>{
        $('#c_training button').css("visibility","visible");
        $('#c_training button').click(()=>{
            window.open('https://drive.google.com/file/d/1ffm1gOS_TXd9d8Gie1FRPkDNNcQK0_GB/view','_blank')
        });
    });
    $('#java_training').on("mouseenter",()=>{
        $('#java_training button').css("visibility","visible");
        $('#java_training button').click(()=>{
            window.open('https://drive.google.com/file/d/1XOzXhBFjAaJaeY0Jn0Omw7gb2wxMw1Jo/view','_blank')
        });
    });
    $('#python_training').on("mouseenter",()=>{
        $('#python_training button').css("visibility","visible");
        $('#python_training button').click(()=>{
            window.open('https://drive.google.com/file/d/1_yy7lth_NSreqfY2fCzIfKsdScoFdL9A/view','_blank')
        });
    });


});