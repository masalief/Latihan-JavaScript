$(document).ready(function (){
    $("#btnAlert").submit(function (e){
        e.preventDefault();
        window.scrollTo(0, 0);
        $("#divAlert").removeClass("d-none");
        const nama = $("#inputAlert").val();
        $("#textAlert").html("Terima Kasih " + nama + "," + " link sudah dapat dilihat pada email anda.")       
    });
    $("#btnClose").click(function(){
        $("#divAlert").addClass("d-none");
    }); 

    $("#gambar1").click(function (e) {
        e.preventDefault();
        const gambar1 = $("#gambar1").attr("src");
        $("#gambarutama").attr("src",gambar1);
        $("#gambarutama").attr("height", "500px");
    });

    $("#gambar2").click(function (e) {
        e.preventDefault();
        const gambar2 = $("#gambar2").attr("src");
        $("#gambarutama").attr("src",gambar2);
        $("#gambarutama").attr("height", "500px");
    });

    $("#gambar3").click(function (e) {
        e.preventDefault();
        const gambar3 = $("#gambar3").attr("src");
        $("#gambarutama").attr("src",gambar3);
        $("#gambarutama").attr("height", "500px");
    });

    $("#gambar4").click(function (e) {
        e.preventDefault();
        const gambar4 = $("#gambar4").attr("src");
        $("#gambarutama").attr("src",gambar4);
        $("#gambarutama").attr("height", "500px");
    });

    $("#formshiping").submit(function (e) {
        e.preventDefault();


    const namaform = $("#namaform", this).val();
    const lastnameform = $("#lastnameform", this).val();
    const name = namaform + " " + lastnameform;
    const addressform = $("#addressform", this).val();
    
    $("#formmain").addClass("d-none");
    $("#result").removeClass("d-none");

    $("h5", "#result").text("Terimakasih, " + name);
    $("p", "#result").text("Paket akan dikirim ke " + addressform);

});

    $("button", "#result").click(function (e) {
        e.preventDefault();
        windows.location.href = "index.html"
});

    const buttonsubmit = document.getElementById('buttonsubmit');
    buttonsubmit.addEventListener('click', function handleClick(event) {
        event.preventDefault();
        const namaform = document.getElementById('namaform');
        console.log(namaform.value);
        namaform.value = '';

        const phoneform = document.getElementById('phoneform');
        console.log(phoneform.value);
        phoneform.value = '';

        const lastnameform = document.getElementById('lastnameform');
        console.log(lastnameform.value);
        lastnameform.value = '';

        const cityform = document.getElementById('cityform');
        console.log(cityform.value);
        cityform.value = '';

        const emailform = document.getElementById('emailform');
        console.log(emailform.value);
        emailform.value = '';

        const postalform = document.getElementById('postalform');
        console.log(postalform.value);
        postalform.value = '';

        const addressform = document.getElementById('addressform');
        console.log(addressform.value);
        addressform.value = '';

    });

});