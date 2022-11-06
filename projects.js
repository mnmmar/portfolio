const navStart = () => {
    $('.nav-links').toggleClass('nav-active');
}

const contactDiv = () => {
    const $div = $('<div>').addClass('contact-div').prependTo($('body')).hide()

    $div.css({'width': '100%', 'height': '300px', 'background-color': 'rgba(119, 32, 249, 0.9)'})

    const $heading = $('<h2>').text('Reach out to me!').css({'color': 'white', 'font-size': '30px', 'padding-top': '2%'}).prependTo($div)
    const $par = $('<p>').text('I would love to hear from you.').css({'color': 'white', 'font-size': '25px', 'margin-top': '2%'}).insertAfter($heading)
    const $link = $('<button>').attr('href', '#').text('Instagram').css({'text-transform': 'uppercase','font-size': '20px', 'margin-top': '2%', 'padding': '3px'}).insertAfter($par)
    const $link2 = $('<button>').attr('href', '#').text('LinkedIn').css({'text-transform': 'uppercase','font-size': '20px', 'margin-left': '3%', 'margin-top': '2%', 'padding': '3px'}).insertAfter($link)
    const $link3 = $('<button>').attr('href', '#').text('Email').css({'text-transform': 'uppercase','font-size': '20px', 'margin-left': '3%', 'margin-top': '2%', 'padding': '3px'}).insertAfter($link2)


}
const btnClose = () => {
    const $div = $('<div>').css('text-align', 'center').insertAfter($('.contact-div'))
    const $bttn = $('<button>').addClass('contact-button').text('Close').css({'font-size': '30px', 'margin-top': '2%', 'border-radius': '60% 60% 4% 60%', 'background-color': 'rgba(119, 32, 249, 0.9)', 'border': 'none', 'color': 'white', 'padding': '5px 5px 5px 5px'}).appendTo($div).hide()
}

$(() => {
    $('.burger').on('click', () => {
        navStart();
    })
    contactDiv();
    btnClose();



    let numOfImages = $('.carousel-images').children().length - 1
    let currentImgIndex = 0;
    
    $('.next').on('click', () => {
        $('.carousel-images').children().eq(currentImgIndex)
            .css('display', 'none')

        if(currentImgIndex < numOfImages) {
            currentImgIndex++
        } else {
            currentImgIndex = 0
        }

       
        $('.carousel-images').children().eq(currentImgIndex)
            .css('display', 'block')

        
    })

    $('.previous').on('click', () => {
        $('.carousel-images').children().eq(currentImgIndex)
            .css('display', 'none')
        
            if(currentImgIndex > 0) {
                currentImgIndex--
            }else {
                currentImgIndex = numOfImages
            }
            $('.carousel-images').children().eq(currentImgIndex)
                .css('display', 'block')
            
    })

    $('.contact').on('click', () => {
        $('.contact-div').show('slow');
        $('.contact-button').show();
        $('nav').hide();
        $('.container').hide();
        $('h1').hide();
    })

    $('.contact-button').on('click', () => {
        $('.contact-div').hide('slow');
        $('.contact-button').hide();
        $('nav').show();
        $('.container').show();
        $('h1').show();
    })
})