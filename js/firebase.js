var storage1 = storage;
var storageref = storage1.ref();

$('#List').find('tbody').html('');
var i =0;
storageref.child('images/').listAll().then(function(result){
    
    result.items.forEach(function(imagesref){
        //console.log("image reference" + imagesref.toString())
        i++;
        displayImage(i, imagesref);
    })
});

function displayImage(row, images){
    images.getDownloadURL().then(function(url){
        console.log(url);

        let new_html = '';
        new_html += '<tr>';
        new_html += '<td>';
        new_html += row;
        new_html += '</td>';
        new_html += '<td>';
        new_html += '<img src="'+url+'"width="100px" style="float:right">'
        new_html += '</td>';
        $('#List').find('tbody').append(new_html);
    })
}