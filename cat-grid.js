var thatsMyBench = ['bear1','fluffy the bear','benji the bear','mrs. bears','another bear'];

var kittenPhotos  = ['http://placebear.com/200/200','http://placebear.com/180/190','http://placebear.com/220/200','http://placebear.com/205/205','http://placebear.com/190/190','http://placebear.com/210/210']

function myStorefront(items) {
    document.write('<ul class="grid">');
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        document.write('<li class="grid-item"><h2>' + item + '</h2><img src="' + kittenPhotos[i] + '"></li>');
    }
    document.write('</ul>');
} 

myStorefront(thatsMyBench);

