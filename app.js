
const makeDiv = () => {
    const $div = $('<div>').addClass('new-div').prependTo($('body')).hide()
    $div.css({'background-color': 'rgba(119, 32, 249, 0.9)', 'text-align': 'center', 'width': '80%', 'height': '400px', 'margin': '20% 0 0 10%', 'overflowY': 'scroll'})
    const $heading = $('<h1>').text('ABOUT ME').css({'font-size': '40px', 'padding-bottom': '20px', 'text-decoration': 'underline', 'color': 'white'}).prependTo($div)
    const $par = $('<p>').text('My name is Mar Mar Min, an aspiring software engineer. I am 21 years old and I was born in Thailand but raised in Fort Wayne, Indiana. I\'ve been here since I was about 7 years old. After finishing highschool, I have been floating around. I was a nail tech through highschool and afterwards before I switched over to childcare. I also lived in Boston, Massachusetts for a little bit to help my parents out with their sushi business. While living in Boston, I had a lot of free time while living with my parents at their house so I took up coding for fun. I fell in love with how wonderful and satisfying coding is and now I\'m here!').css({'font-size': '30px', 'color': 'white', 'padding': '10px 30px 10px 30px'}).appendTo($div)
}

const closeBtn = () => {
    const $div = $('<div>').appendTo($('body'))
    $div.css('text-align', 'right')
    const $bttn = $('<button>').addClass('close').text('Close').css({'font-size': '30px', 'color': 'white', 'background-color': 'rgba(119, 32, 249, 0.9)', 'border-radius': '60% 60% 4% 60%', 'padding': '0.5% 0.5% 0.5% 0.5%', 'margin': '5% 10% 0 0', 'border': 'none'}).appendTo($div).hide()
}

const contactDiv = () => {
    const $div = $('<div>').addClass('contact-div').prependTo($('body')).hide()

    $div.css({'width': '80%', 'height': '300px', 'background-color': 'rgba(119, 32, 249, 0.9)', 'margin': '20% 0 0 10%'})

    const $heading = $('<h1>').text('Reach out to me!').css({'color': 'white', 'font-size': '30px', 'padding-top': '2%'}).prependTo($div)
    const $par = $('<p>').text('I would love to hear from you.').css({'color': 'white', 'font-size': '25px', 'margin-top': '2%'}).insertAfter($heading)
    const $link = $('<button>').attr('href', '#').text('Instagram').css({'text-transform': 'uppercase', 'font-size': '20px', 'margin-top': '2%', 'padding': '3px'}).insertAfter($par)
    const $link2 = $('<button>').attr('href', '#').text('LinkedIn').css({'text-transform': 'uppercase', 'font-size': '20px', 'margin-left': '3%', 'margin-top': '2%', 'padding': '3px'}).insertAfter($link)
    const $link3 = $('<button>').attr('href', '#').text('Email').css({'text-transform': 'uppercase', 'font-size': '20px', 'margin-left': '3%', 'margin-top': '2%', 'padding': '3px'}).insertAfter($link2)


}
const btnClose = () => {
    const $div = $('<div>').css('text-align', 'center').insertAfter($('.contact-div'))
    const $bttn = $('<button>').addClass('contact-button').text('Close').css({'font-size': '30px', 'border-radius': '60% 60% 4% 60%', 'background-color': 'rgba(119, 32, 249, 0.9)', 'border': 'none', 'color': 'white', 'padding': '5px 5px 5px 5px', 'margin-top': '2%'}).appendTo($div).hide()
}




const navStart = () => {
    $('.nav-links').toggleClass('nav-active');
}

$(() => {
    contactDiv();
    btnClose();

    makeDiv();
    closeBtn();

    $('.burger').on('click', () => {
        navStart();
    })

    $('.about').on('click', () => {
        $('.new-div').show('slow');
        $('.bttn').hide();
        $('.main').hide();
        $('.close').show();
        $('nav').hide();

    })

    $('.close').on('click', () => {
        $('.new-div').hide('slow');
        $('.bttn').show('slow');
        $('.main').show('slow');
        $('.close').hide();
        $('nav').show();
    })

    $('.contact').on('click', () => {
        $('.contact-div').show('slow');
        $('.main').hide();
        $('.new-div').hide();
        $('.bttn').hide();
        $('.contact-button').show();
        $('nav').hide();
    })

    $('.contact-button').on('click', () => {
        $('.contact-div').hide('slow');
        $('.bttn').show('slow');
        $('.main').show('slow');
        $('.contact-button').hide();
        $('nav').show();
    })
})