const navStart = () => {
    $('.nav-links').toggleClass('nav-active');
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

const resuMe = () => {
    const $container = $('<div>').addClass('container').css({'width': '60%', 'height': '600px', 'background-color': 'white', 'border': '1px solid black','margin-top': '7%','margin-bottom': '7%', 'margin-left': '20%', 'text-align': 'left', 'overflowY': 'scroll'}).appendTo($('body'))

    const $heading = $('<h1>').text('Mar Mar Min').css({'padding': '50px 3px 3px 50px'}).appendTo($container)
    
    const $location = $('<p>').css({'padding': '3px 3px 3px 50px'}).text('Fort Wayne, Indiana 46804').appendTo($container)
    const $email = $('<p>').css({'padding': '3px 3px 3px 50px'}).text('min.mmar9@gmail.com').appendTo($container)

    const $workExp = $('<h2>').text('Work Experience').css({'padding': '30px 3px 3px 50px'}).appendTo($container)
    const work2 = $('<h3>').text('Nail Tech').css({'padding': '20px 3px 3px 50px'}).appendTo($container)
    const $location3 = $('<p>').css({'padding': '3px 3px 3px 50px'}).text('Fort Wayne, Indiana').appendTo($container)
    const $dates2 = $('<p>').css({'padding': '3px 3px 3px 50px'}).text('September 2017 - December 2021').appendTo($container)
    
    const work1 = $('<h3>').text('Teacher').css({'padding': '20px 3px 3px 50px'}).appendTo($container)
    const $location2 = $('<p>').css({'padding': '3px 3px 3px 50px'}).text('BrightPath Kids - Quincy, MA').appendTo($container)
    const $dates = $('<p>').css({'padding': '3px 3px 3px 50px'}).text('February 2022 - May 2022').appendTo($container)

    const work3 = $('<h3>').text('Beverage Cart Attendant').css({'padding': '20px 3px 3px 50px'}).appendTo($container)
    const $location4 = $('<p>').css({'padding': '3px 3px 3px 50px'}).text("Maggie's Grill - Dorchester, MA").appendTo($container)
    const $dates3 = $('<p>').css({'padding': '3px 3px 3px 50px'}).text('April 2022 - September 2022').appendTo($container)

    const $edu = $('<h2>').text('Education').css({'padding': '30px 3px 3px 50px'}).appendTo($container)
    const $edu1 = $('<h3>').text('High School Diploma').css({'padding': '20px 3px 3px 50px'}).appendTo($container)
    const $location5 = $('<p>').css({'padding': '3px 3px 3px 50px'}).text('North Side High School - Fort Wayne, IN').appendTo($container)
    const $dates4 = $('<p>').css({'padding': '3px 3px 3px 50px'}).text('September 2016 - June 2020').appendTo($container)

    const $edu3 = $('<h3>').text('Full Stack Software Engineer Certificate').css({'padding': '20px 3px 3px 50px'}).appendTo($container)
    const $location6 = $('<p>').css({'padding': '3px 3px 3px 50px'}).text('General Assembly - Remote').appendTo($container)
    const $dates5 = $('<p>').css({'padding': '3px 3px 3px 50px'}).text('October 2022 - January 2023').appendTo($container)


    const $skills = $('<h2>').text('Skills').css({'padding': '30px 3px 3px 50px'}).appendTo($container)
    const $skills1 = $('<ul>').appendTo($container).css({'list-style': 'none', 'padding': '8px 3px 3px 50px'})
    const $skills3 = $('<li>').text('CSS').appendTo($skills1)
    const $skills4 = $('<li>').text('HTML').appendTo($skills1)
    const $skills5 = $('<li>').text('Javascript').appendTo($skills1)
    const $skills6 = $('<li>').text('JQuery').appendTo($skills1)


}


$(() => {
    resuMe()
    contactDiv();
    btnClose();

    $('.burger').on('click', () => {
        navStart();
    })

    $('.contact').on('click', () => {
        $('.contact-div').show('slow');
        $('.contact-button').show();
        $('nav').hide();
        $('.container').hide();
    })

    $('.contact-button').on('click', () => {
        $('.contact-div').hide('slow');
        $('.contact-button').hide();
        $('nav').show();
        $('.container').show();
    })
})