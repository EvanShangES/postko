/**
 * Created by Evan Shang on 2017-05-12.
 */
angular.module('postko.home').controller('homeController', function(){

    console.log('does this displya?');

    $(document).ready(function() {
        $("#work-carousel").owlCarousel({
            // Most important owl features
            items: 4,
            itemsCustom: false,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [980, 3],
            itemsTablet: [768, 3],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            singleItem: false,
            startDragging: true
        });

        $(function() {
            var austDay = new Date();
            austDay = new Date(2018, 3, -5);
            $('#defaultCountdown').countdown({until: austDay});
            $('#year').text(austDay.getFullYear());
        });

    });
});