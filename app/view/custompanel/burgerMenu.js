
Ext.define('MyGPS.view.custompanel.burgerMenu', {

});


var _singleTrackingMap_BurgeMenu =
   Ext.create('Ext.Panel', {

       xtype: 'panel',
       height: 1,
       width: 1,
       id: 'singleTrackingMap_BurgeMenu',
       draggable: false,
       right: -5,
       // bottom: 260,
       bottom: 64,

       //showAnimation: {
       //    type: 'slide',
       //    direction: 'left',
       //    duration: 250,
       //    easing: 'ease-out'
       //},
       //hideAnimation: {
       //    type: null,
       //    direction: null,
       //    duration: null,
       //    //  easing: 'ease-in'
       //},



       showAnimation: {
           type: 'popIn',
           duration: 250,
           easing: 'ease-out'
       },
       hideAnimation: {
           type: 'popOut',
           duration: 250,
           easing: 'ease-out'
       },
       style: 'background-color: transparent;',
       items: {

           xtype: 'container',
           style: 'background-color: transparent;',
           layout: {
               type: 'vbox',
               pack: 'left',
               align: 'end'
           },

           items: [

                   {
                       xtype: 'button',
                       id: 'btnsingleTrackingMapBurgeMenu',
                       height: 75,
                       width: 75,
                       html: '<div ><img src="resources/icons/BurgerMenu1.png" width="65" height="65" alt="Company Name"></div>',
                       //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                       ui: 'plain',
                       handler: function () {


                           _singleTrackingMap_BurgeMenu.hide();
                           //  Ext.Viewport.remove(_singleTrackingMap_BurgeMenu);
                           setTimeout(function () {

                               this.overlay = Ext.Viewport.add(_SingleTrackingMap_Menu);
                               this.overlay.show();

                           }, 100);


                       }
                   },


           ]

       },


   });


//function singleTrackingMap_BurgeMenu() {

//    return _singleTrackingMap_BurgeMenu
//}