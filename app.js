var ref = new Firebase('https://glaring-heat-9529.firebaseio.com/');

function sanitizeString (str){
    str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim,"");
    return str.trim();
}

ref.on("child_added", function (snapshot) {
    var value = snapshot.val();

    $('.chat-log').append('<li><strong>' + 
        sanitizeString(value.name) + 
        '</strong>: ' + 
        sanitizeString(value.text) + 
        '</li>');
});

$('input[type=button]').on('click', function (event) {
    var $name = $('input[type=text]');
    var $text = $('textarea');

    ref.push({
        name: $name.val(),
        text: $text.val()
    });

    $name.val('');
    $text.val('');
});



