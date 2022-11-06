const navStart = () => {
    $('.nav-links').toggleClass('nav-active');
}

const game = () => {
    const $container = $('<div>').addClass('container').css({'width': '50%', 'height': '200px', 'border': '2px solid black', 'margin-left': '25%', 'margin-top': '15%'}).appendTo($('body'))

    const $intro = $('<div>').css({'width': '100%', 'height': '100%', 'background-color': 'rgb(117, 170, 117)', 'text-align': 'center'}).appendTo($('.container'))
    const $button = $('<button>').addClass('game-button').css({'margin-top': '80px', 'font-size': '20px'}).text("Let's Start!").appendTo($intro)

    const $gameScreen = $('<div>').appendTo($container).hide()
    const $div1 = $('<div>').addClass('green').css({'width': '20px', 'height': '50px', 'background-color': 'rgb(117, 170, 117)', 'position': 'relative', 'top': '146px'}).appendTo($gameScreen)
    const $div2 = $('<div>').addClass('purple').css({'width': '20px', 'height': '20px', 'background-color': 'rgb(119, 32, 249)', 'position': 'relative', 'top': '126px', 'left': '360px'}).appendTo($gameScreen)

    $button.on('click', () => {
        $gameScreen.show()
        $intro.hide()
        runs();
    })
}
const jumps = () => {
    $('.green').attr('id', 'jump')

setTimeout(function(){
    $('.green').removeAttr('id')
},500)
}



const runs = () => {

        $('.purple').animate(
            {left: '0px'},
            {duration: 1000,

            complete: () => {
                $('.purple').css('left', '360px')
                runs()
            },

            step: () => {
                const check1 = $('.green').first().css('top') == '146px'
                const check2 = parseInt($('.purple').first().css('left')) <= 20
                if (check1 && check2) {
                    $('.purple').stop()
                    
                }
               
            }
        })
    
    
}



const contactDiv = () => {
    const $div = $('<div>').addClass('contact-div').prependTo($('body')).hide()

    $div.css({'width': '100%', 'height': '300px', 'background-color': 'rgba(119, 32, 249, 0.9)'})

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


$(() => {
    game();
    contactDiv();
    btnClose();
    $('.burger').on('click', () => {
        navStart();
    })

    $('.contact').on('click', () => {
        $('.contact-div').show();
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