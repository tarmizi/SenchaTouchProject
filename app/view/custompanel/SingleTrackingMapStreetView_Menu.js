﻿
Ext.define('MyGPS.view.custompanel.SingleTrackingMapStreetView_Menu', {

});
var _SingleTrackingMapStreetView_Menu =
   Ext.create('Ext.Panel', {

       xtype: 'panel',
       height: 1,
       width: 1,
       id: '_SingleTrackingMapStreetView_MenuID',
       draggable: false,
       right: -5,
       bottom: 240,

       // bottom: 165,

       showAnimation: {
           type: 'slide',
           direction: 'left',
           duration: 250,
           easing: 'ease-out'
       },
       hideAnimation: {
           type: null,
           direction: null,
           duration: null,
           //  easing: 'ease-in'
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
                     id: 'btnsingleTrackingMapStreetView_PointInfo',
                     height: 62,
                     width: 65,
                     //  html: '<div ><img src="resources/icons/OverViewMapRound.png" width="55" height="55" alt="Company Name"></div>',
                     html: '<div ><img src="resources/icons/PointInfoRound.png" width="55" height="55" alt="Company Name"></div>',
                     ui: 'plain',
                     handler: function (btn) {


                     }
                 },
                {
                    xtype: 'button',
                    id: 'btnsingleTrackingMapStreetView_RealignLocation',
                    height: 62,
                    width: 65,
                    html: '<div ><img src="resources/icons/NearMeRound.png" width="55" height="55" alt="Company Name"></div>',
                    ui: 'plain',
                    handler: function () {
                        _SingleTrackingMapStreetView_Menu.hide();
                       // Ext.Viewport.remove(_SingleTrackingMapStreetView_Menu);


                    }
                },
                      {
                          xtype: 'button',
                          id: 'btnsingleTrackingMapStreetView_OverViewMap',
                          height: 62,
                          width: 65,
                          html: '<div ><img src="resources/icons/OverViewMapRound.png" width="55" height="55" alt="Company Name"></div>',
                          ui: 'plain',
                          handler: function () {
                              _SingleTrackingMapStreetView_Menu.hide();
                            //  Ext.Viewport.remove(_SingleTrackingMapStreetView_Menu);
                              IsStreetViewMiniMapActivated = 'yes';
                             
                              Ext.Viewport.mask({ xtype: 'loadmask', message: 'Generate Overview..Please Wait.' });
                              var task = Ext.create('Ext.util.DelayedTask', function () {
                                  this.overlay = Ext.Viewport.add(SingleTrackingMapStreetView_MiniMap());
                                  this.overlay.show();
                                  Ext.Viewport.unmask();
                              });
                              task.delay(800);


                          }
                      },
               {
                   xtype: 'button',
                   id: 'btnsingleTrackingMapStreetView_Search',
                   height: 62,
                   width: 65,
                   html: '<div ><img src="resources/icons/SearchRound.png" width="55" height="55" alt="Company Name"></div>',
                   ui: 'plain',
                   handler: function () {


                       _SingleTrackingMapStreetView_Menu.hide();
                      // Ext.Viewport.remove(_SingleTrackingMapStreetView_Menu);
                       setTimeout(function () {

                           this.overlay = Ext.Viewport.add(_singleTrackingMap_BurgeMenu); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                         
                           // }
                           this.overlay.show();
                       }, 500);

                       if (SingleTrackingSearchPanelisOpen == 'no') {



                           this.overlay = Ext.Viewport.add(SearchSingleMapP());
                           this.overlay.show();


                           SingleTrackingSearchPanelisOpen = 'yes'
                           return
                       }

                       if (SingleTrackingSearchPanelisOpen == 'yes' && iscancelpreesed == 'yes') {

                           SingleTrackingSearchPanelisOpen = 'no';
                           return
                       }

                   }
               },
               {
                   // [top, right, bottom, and left]
                   xtype: 'button',
                   id: 'btnTrackingMapStreetView_BackToNormalMap',
                   height: 62,
                   width: 65,
                   margin: '-61 63 0 0',
                   //  html: '<div ><img src="resources/icons/OverViewMapRound.png" width="55" height="55" alt="Company Name"></div>',
                   html: '<div ><img src="resources/icons/BackStreetViewRound.png" width="55" height="55" alt="Company Name"></div>',
                   ui: 'plain',
                   handler: function () {
                       stopClocksingleTrackingMapsStreetView();
                       _SingleTrackingMapStreetView_Menu.hide();
                      // Ext.Viewport.remove(_SingleTrackingMapStreetView_Menu);
                       Ext.getCmp('mainView').setActiveItem(2);


                       startsingleTrackingMaps('start', singleTrackingMap_DeviceID);



                       Ext.Viewport.mask({ xtype: 'loadmask', message: 'Re-Heading and Ploting Point..Please Wait.' });
                       var task = Ext.create('Ext.util.DelayedTask', function () {
                           this.overlay = Ext.Viewport.add(_SingleTrackingMap_Menu);
                           this.overlay.show();
                           Ext.Viewport.unmask();
                       });
                       task.delay(800);

                       //setTimeout(function () {



                       //}, 1000);

                   }
               },




           ]

       },

       initialize: function () {

           //   _singleTrackingMap_BurgeMenu.hide();
       }

   });



//function SingleTrackingMapStreetView_Menu() {
 
//    return _SingleTrackingMapStreetView_Menu
//}
