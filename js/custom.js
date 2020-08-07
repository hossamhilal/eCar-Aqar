/*global $ */
(function($) {
    "use strict";

    // $(window).on('load', function(){
    //     $('body').addClass('stopScroll');
    //     $('.loader').fadeOut(500, function () {
    //         $(this).remove();
    //         $('body').removeClass('stopScroll');
    //     }); 
    // });

    // OPEN SIDE  MENU 
    $('.menuBtn').on('click', function(){
        $('.navMenu').toggleClass('show');
        $('.navOverlay').addClass('show');  
        setTimeout(function(){
            $('body').addClass('stopScroll');
        }, 200); 
    });

    // CLOSE SIDE MENU 
    $('.navOverlay').on('click', function(){
        $(this).removeClass('show');
        $('.navMenu').removeClass('show');  
        $('body').removeClass('stopScroll');  
    });

    //  Open dropList
    $('.dropToggle').on('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        if($(this).find('.dropList').hasClass('show')){
            $('.dropList').removeClass('show');
        } else {
            $('.dropList').removeClass('show');
            $(this).find('.dropList').toggleClass('show');
        } 
    });

    //  Close dropList
    $(document).on('click', function(){
        $('.dropList').removeClass('show');
    });

    // Open Search 
    $('.openSearch').on('click', function() {
        $('.searchPopup').addClass('show');   
    });

    // Open Search 
    $('.dropList').on('click', function(e) {
        e.stopPropagation(); 
    });

    // Close Search 
    $('.searchPopup .close').on('click', function() {
        $('.searchPopup').removeClass('show');   
    });
    
    // Header OWL 
    $('.owlHeader').owlCarousel({
        rtl: true,
        margin: 0,
        autoplay: false,
        loop: true,
        nav: true,
        dots: true,
        autoplaySpeed : 2000,
        autoplayTimeout : 2000,
        smartSpeed: 2000 ,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // Ad Images OWL
    var owlAdImages = $('.owlAdImages');
    owlAdImages.owlCarousel({
        rtl: true,
        margin: 0,
        autoplay: false,
        loop: false,
        nav: false,
        dots: false,
        center : false ,
        autoplaySpeed : 1000,
        autoplayTimeout : 1000,
        smartSpeed: 1000 ,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
  
    // Go to the next item
    $('.next').click(function() {
        $(this).parents('.adSlider').find('.owlAdImages').trigger('next.owl.carousel');
    });

    // Go to the previous item
    $('.prev').click(function() {
        $(this).parents('.adSlider').find('.owlAdImages').trigger('prev.owl.carousel', [300]);
    });

    // Get Total Count Of Items 
    $('.owlAdImages').each(function(){
        let totalItems = $(this).find('.item').length;
        $(this).parent().find('.ImgCountNumber').text(totalItems);
    })

    // Partners OWL 
    $('.owlClients').owlCarousel({
        rtl: true,
        margin: 20,
        autoplay: true,
        loop: true,
        nav: false,
        dots: false,
        center : false ,
        autoplaySpeed : 3000,
        autoplayTimeout : 3000,
        smartSpeed: 3000 ,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    });

    // Clients OWL 
    $('.owlAdPage').owlCarousel({
        rtl: true ,
        margin: 10,
        autoplay: false,
        loop: true,
        nav: true,
        dots: false,
        center : true ,
        autoplaySpeed : 1000,
        autoplayTimeout : 1000,
        smartSpeed: 1000 ,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 5
            },
            1000: {
                items: 5
            }
        }
    });

    // Preview Active Image in Ad Slider Thumbs 
    $('#activeSlid img').attr('src' , $('.owlAdPage .owl-item.active.center img').attr('src'));

    let imagesOwl = $('.owlAdPage');
    imagesOwl.on('changed.owl.carousel', function(e) {
        let ActiveSrc = $('.owlAdPage .owl-item.active.center img').attr('src');
        $('#activeSlid img').attr('src', ActiveSrc);
    });

    $(document).on('click','.owlAdPage .owl-prev , .owlAdPage .owl-next', function(){
        let ActiveSrc = $('.owlAdPage .owl-item.active.center img').attr('src');
        $('#activeSlid img').attr('src', ActiveSrc);
    });


    // Add To Favourite 
    $('.addToFav').on('click' , function(){
        $(this).toggleClass('addedToFav');
    });

    // Filter List
    $('.adsTab').on('click' , function(e){
        e.preventDefault();

        $('.adsTab').removeClass('active');
        $(this).addClass('active');
        
        var itemId = $(this).attr("href"); 
        $('.tabContent').removeClass('show'); 
        $(itemId).addClass('show');
    });

    // Show Grid 
    $('.showGrid').on('click' , function(){
        $('.tabContent.show').addClass('row');
        $('.tabContent.show .ad').addClass('col-12 col-sm-6 gridItem');
        owlAdImages.trigger('refresh.owl.carousel');
    });

    $('.showList').on('click' , function(){
        $('.tabContent.show').removeClass('row');
        $('.tabContent.show .ad').removeClass('col-12 col-sm-6 gridItem');
        owlAdImages.trigger('refresh.owl.carousel');
    });

    // Date 
    var date = new Date();
    var months = ["يناير", "فبراير" , "مارس" , "إبريل" , "مايو" , "يونيو" , "يوليو" , "أغسطس" , "سبتمبر" , "أكتوبر" , "نوفمبر" , "ديسمبر" ];
    var days = ["اﻷحد", "اﻷثنين", "الثلاثاء", "اﻷربعاء", "الخميس", "الجمعة", "السبت"];
    var arDate = days[date.getDay()] + ' ' + date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear();
    $('#date').text(arDate);

    // Time 
    var time = date.toLocaleTimeString('ar-EG', {hour: '2-digit', minute: '2-digit'});
    var arTime = time.replace(/م/g, "مساء") || time.replace(/ص/g, "صباحا");
    $('#time').text(arTime);


    // Login Tabs 
    $('.loginTab').on('click' , function(e){
        e.preventDefault();

        $('.loginTab').removeClass('active');
        $(this).addClass('active');
        
        var itemId = $(this).attr("href"); 
        $('.loginContent').removeClass('show'); 
        $('.tabContent').removeClass('show'); 
        $(itemId).addClass('show');
    });

    // Wizzard 
    var step = $('.step'),
        stepContent = $('.stepContent'),
        stepBtn = $('.nextStep');

    // change Wizard Active Tab
    step.click(function (e) {
        e.preventDefault();
        var targetContent = $($(this).attr('href')),
            stepTab = $(this);

        if (!stepTab.hasClass('disabled')) {
            step.removeClass('active').addClass('disabled');
            stepTab.addClass('active').removeClass('disabled');
            stepContent.removeClass('show');
            targetContent.addClass('show');
        }
    });

    // Move To Wizard Next Step 
    stepBtn.click(function(){
        var currentStep = $(this).closest('.stepContent'),
            currentStepBtn = currentStep.attr('id'),
            nextStepWizard = $('.step[href="#' + currentStepBtn + '"]').next();

        nextStepWizard.removeClass('disabled').addClass('active').trigger('click');
    });

    // Upload Photo 
    function readURL(input , place) {
        if (input.files && input.files[0]) {
            let reader = new FileReader();
            reader.onload = function(e) {
                let preview = place;
                preview.hide();
                preview.html("");
                let src = e.target.result;
                let previewImage =  '<img src="'+ src +'"class="img-fluid">';    
                preview.append(previewImage);        
                preview.fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $('.uploadImage input').change(function() {
        readURL(this , $(this).parent().next('.previewBox'));
    });

    // Upload Video
    function uploadVideo(input , place) {
        if (input.files && input.files[0]) {
            let reader = new window.FileReader();
            reader.onload = function(e) {
                let VidePreview = place;
                VidePreview.hide();
                VidePreview.html("");
                let videoSrc = e.target.result;
                let videoType = input.files[0].type;
                let previewImage =  '<video controls><source src="'+ videoSrc +'" type="'+ videoType +'"></video>';    
                VidePreview.append(previewImage);        
                VidePreview.fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $('.uploadVideo input').change(function() {
        uploadVideo(this , $(this).parent().next('.previewBox'));
    });

    // Delete Image Or Video 
    $('.deleteUpload').on('click' , function(){
        $(this).next('.previewBox').html("");
        $(this).prev('.uploadBtn').removeClass('d-none');
        $(this).remove();
    });

    // Delete Notification 
    $('.deleteNotification').on('click' , function(){
        $(this).parents('.notification').remove();
    });

    // Upload Avatar 
    function readURL(input , place) {
        if (input.files && input.files[0]) {
            let reader = new FileReader();
            reader.onload = function(e) {
                let preview = place;
                preview.hide();
                let src = e.target.result;  
                preview.find('img').attr('src' , src);        
                preview.fadeIn();
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $('.uploadAvatar input').change(function() {
        readURL(this , $(this).parent().next('.previewBox'));
    });

    // Allow Edit Profile 
    $('.editProfile').on('click' , function(){
        let allInputs = $('.profileInfoBox input');
        if (allInputs.attr('disabled'))  {
            allInputs.removeAttr('disabled');
        } else {
            allInputs.attr('disabled', 'disabled');
        }
    });

    // Toggle Password 
    $('.showPass').click(function(){
        let pass = $('#password');
        if($(pass).attr('type') == 'password'){
             $(pass).prop('type', 'text');
        }else{
             $(pass).prop('type', 'password');
        }
    });


    // Wellness Block
    // $('.openDetails').on('click' , function(){
    //     $(this).parents('.hover').addClass('open');
    // });

    // $('.closeDetails').on('click' , function(){
    //     $(this).parents('.hover').removeClass('open');
    // });


    // Upload File 
    // $('.uploadFile').on('change', function(e) {
    //     let fileName = e.target.value.split( '\\' ).pop();
    //     console.log(fileName);
    //     let files = $(this).parent('.uploadBox').prev('.uploadedFiles');
    //     files.append(
    //         '<div class="file">' +
    //             '<h3 class="fileName">' + fileName  + '</h3>' +
    //             '<span class="deleteFile"> <i class="icofont-ui-delete"></i> </span>' +
    //         '</div>'
    //     );               
    // });

    // Delete File
    // $(document).on('click','.deleteFile' , function(){
    //     $(this).parent('.file').remove();
    // });

    // iniat WOW Js
    new WOW().init();
   
})(jQuery);

