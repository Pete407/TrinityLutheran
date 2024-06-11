$(document).ready(function () {

    $('#MyHeader').removeClass('noDisplay').addClass('block');

    /*Main Menu*/
    /****************************************************************************/
    $('#HomePage').click(function () {
        OpenPage('#Home', 1)
        window.scrollTo(0, 0);
    });

    $('#OurBeliefs').click(function () {
        OpenPage('#Beliefs',2)
        window.scrollTo(0, 0);
    });

    $('#Times').click(function () {
        OpenPage('#WorshipTimes', 2)
        window.scrollTo(0, 0);
    });

    $('#WhoWeAre').click(function () {
        OpenPage('#WhoWeArePage', 2)
        window.scrollTo(0, 0);
    });

    $('#Events, .returntoEvents').click(function () {
        OpenPage('#EventLists', 2)
        window.scrollTo(0, 0);
    });

    $('#Weekly_Devotion, .returntoHome').click(function () {
        OpenPage('#Home', 2)
        window.scrollTo(0, 0);
    });

    $('#Links').click(function () {
        OpenPage('#MyLinks', 2)
        window.scrollTo(0, 0);
    });

    $('.menuItem').mouseover(function () {
        $('.menuItem').css('color', 'white');
        $(this).css('color', 'yellow');
    })

    $('.menuItem').mouseleave(function () {
        $('.menuItem').css('color', 'white');
    })
    /****************************************************************************/

    //This changes the Event Tables on the page.
    //*************************************************************************
    $('#ComingEvents').click(function () {
        $('#EventLabel').html('Upcoming Events')
        $('.eventTable').removeClass('block').addClass('noDisplay');
        $('#UpcomingTable').removeClass('noDisplay').addClass('block');
        $('#PastTable').removeClass('block').addClass('noDisplay');
    });

    $('#PastEvents').click(function () {
        $('#EventLabel').html('Recent Past Events')
        $('.eventTable').removeClass('block').addClass('noDisplay');
        $('#PastTable').removeClass('noDisplay').addClass('block');
        $('#UpcomingTable').removeClass('block').addClass('noDisplay');
    });
    //*************************************************************************

    $('.quilt').click(function () {
        OpenPage('#QuiltingClass',2)
        window.scrollTo(0, 0);
    });

    $('.models').click(function () {
        OpenPage('#PlasticModeling',2)
        window.scrollTo(0, 0);
    });

    $('#MemorialDay').click(function () {
        OpenPage('#MyMemorialDay', 2)
        window.scrollTo(0, 0);
    });

    $('.work').click(function () {
        OpenPage('#WorkingPage', 2)
        window.scrollTo(0, 0);
    });
    $('#Carols').click(function () {
        OpenPage('#CarolPage', 2)
        window.scrollTo(0, 0);
    });

    $('#Spaghetti').click(function () {
        OpenPage('#SpaghettiPage', 2)
        window.scrollTo(0, 0);
    });

    $('#Spaghetti1').click(function () {
        OpenPage('#ShowPicture', 2)
        window.scrollTo(0, 0);
        $('#MyPicture').attr('src','Images/Spaghetti1.png')
    });

    $('#Spaghetti2').click(function () {
        OpenPage('#ShowPicture', 2)
        window.scrollTo(0, 0);
        $('#MyPicture').attr('src','Images/Spaghetti2.png')
    });


    $('#Spaghetti3').click(function () {
        OpenPage('#ShowPicture', 2)
        window.scrollTo(0, 0);
        $('#MyPicture').attr('src','Images/Spaghetti3.png')
    });

    $('#Spaghetti4').click(function () {
        OpenPage('#ShowPicture', 2)
        window.scrollTo(0, 0);
        $('#MyPicture').attr('src','Images/Spaghetti4.png')
    });

    $('#MyReturn').click(function () {
        if ($(this).html() == 'Return to Spaghetti Page') { 
            OpenPage('#SpaghettiPage', 2)
            window.scrollTo(0, 0);
        };
    });

    $('.vespers').click(function () {
        OpenPage('#Vespers', 2)
        window.scrollTo(0, 0);
    });

    $('#FortMcCoy').click(function () {
        OpenPage('#MyFortMcCoy', 2)
        window.scrollTo(0, 0);
    });
    $('#PastorCorner').click(function () {
        OpenPage('#PastorPage', 2)
        window.scrollTo(0, 0);
    });

    $('#WeeklyDevotion').click(function () {
        OpenPage('#Weekly_Devotion', 2)
        window.scrollTo(0, 0);
    });

    $("#ReturnHome").click(function () {
        OpenPage('#Home', 2)
        window.scroll(0, 0);
    });

    $("#ReturnWhoWeAre").click(function () {
        OpenPage('#WhoWeArePage', 2)
        window.scroll(0, 0);
    });

    $("#ReturnBeliefs").click(function () {
        OpenPage('#Beliefs', 2)
        window.scroll(0, 0);
    });

    $("#ReturnWorshipTimes").click(function () {
        OpenPage('#WorshipTimes', 2)
        window.scroll(0, 0);
    });

    $("#ReturnEvents").click(function () {
        OpenPage('#EventLists', 2)
        window.scroll(0, 0);
    });

    $("#ReturnLinks").click(function () {
        OpenPage('#MyLinks', 2)
        window.scroll(0, 0);
    });


    function OpenPage(s, showHeader) {
        if (showHeader == 1) {
            $('#MyHeader').removeClass('noDisplay').addClass('block');
        }
        else if (showHeader == 2) {
            $('#MyHeader').removeClass('block').addClass('noDisplay');
        }

        $('.myArts').removeClass('block').addClass('noDisplay');
        $(s).removeClass('noDisplay').addClass('block');
    };

});


