// first commit staging
console.log('Hello world');
// test to commit staging
$('.number_employer').each(function() {
    $(this).prop('Counter',0).animate({
        Counter:$(this).text()
    },{
        duration: 5000,
        easing: 'swing',
        step:function(now){
        $(this).text(Math.ceil(now));
    }
    });
})
// last commit staging