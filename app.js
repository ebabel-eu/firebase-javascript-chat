var ref = new Firebase('https://glaring-heat-9529.firebaseio.com/');

ref.on("child_added", function (snapshot) {
    var value = snapshot.val();

    $('.chat-log').append('<li><strong>' + value.name + '</strong>: ' + value.text + '</li>');
});


$('input[type=button]').on('click', function (event) {
    var name = $('input[type=text]').val();
    var text = $('textarea').val();

    ref.push({
        name: name,
        text: text
    });
});



