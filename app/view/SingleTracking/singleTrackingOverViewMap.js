//var panoramapetaOverViewmap;
//var dockOverViewMap;
//var petaOverViewmap;
//var geolocationisOn = 'no';
//var geolocationX;
//var geolocationY;
//Ext.define('MyGPS.view.SingleTracking.singleTrackingOverViewMap', {
//     extend: 'Ext.Panel',
//  //  extend: 'Ext.Container',
//    requires: ['MyGPS.view.SingleTracking.singleTrackingMap',

//               'Ext.MessageBox',
//        'Ext.ActionSheet',
//        'Ext.picker.Picker',
//        'Ext.form.Panel',
//        'Ext.form.FieldSet',
//        'Ext.field.Number',
//        'Ext.field.Spinner',
//        'Ext.field.Password',
//        'Ext.field.Email',
//        'Ext.field.Url',
//        'Ext.field.DatePicker',
//        'Ext.field.Select',
//        'Ext.field.Hidden',
//        'Ext.field.Radio',
//         'Ext.dataview.List',

//    ],
//  //  alias: "widget.WidgetsingleTrackingOverViewMap",
//    xtype: "singleTrackingOverViewMap",


//    config: {
       
//        styleHtmlContent: true,
//        layout: 'fit',
//        items: [


//            {

//                xtype: 'toolbar',
              
//                docked: 'bottom',
//                id: 'toolbarSingleTrackingBottom',
//                 hidden:true,
//                items:
//                       []


//            },

//            {

//                xtype: 'toolbar',
//                title: 'Live Tracking',
//                docked: 'top',
//                id: 'toolbarSingleTrackingTop',
//                //  hidden:true,
//                items:
//                       [


//                           {
//                               xtype: 'button',
                              
//                               id: 'btnSingleTrackingOverViewHome',
//                               //  text: 'Show',
//                                 iconCls: 'home',
//                              // html: '<div ><img src="resources/icons/hideGeofence.png" width="33" height="23" alt="Company Name"></div>',
//                               ui: 'plain',
//                               handler: function () {
//                                   Ext.getCmp('mainView').setActiveItem(1);
//                                   }


                               
//                           },
//                           {
//                               xtype:'spacer'
//                           },
//                           {
//                               xtype: 'button',
//                               //right: -7,
//                               //top: 1,
//                               id: 'btnSingleTrackingTopPointInfoHide',
//                               html: '<div ><img src="resources/icons/hideGeofence.png" width="30" height="20" alt="Company Name"></div>',
//                               ui: 'plain',
//                               handler: function () {

//                                   Ext.getCmp('btnSingleTrackingTopPointInfoHide').setHidden(true);
//                                   Ext.getCmp('btnSingleTrackingTopPointInfoShow').setHidden(false);
//                                   Ext.getCmp('btnsingleTrackingOverViewMapPointInfolblRightPhone').setHidden(true);
                                  
//                               }
//                           },

//                           {
//                               xtype: 'button',
//                               hidden: true,
//                               //right: -7,
//                               //top: 1,
//                               id: 'btnSingleTrackingTopPointInfoShow',
//                               //  text: 'Show',
//                               //  iconCls: 'compose',
//                               html: '<div ><img src="resources/icons/showGeofence.png" width="30" height="20" alt="Company Name"></div>',
//                               ui: 'plain',
//                               handler: function () {

//                                   Ext.getCmp('btnSingleTrackingTopPointInfoHide').setHidden(false);
//                                   Ext.getCmp('btnSingleTrackingTopPointInfoShow').setHidden(true);
//                                   Ext.getCmp('btnsingleTrackingOverViewMapPointInfolblRightPhone').setHidden(false);
                          





//                               }
//                           },

//                       ]

//            },


//                {
//                    xtype: 'container',
//                 //  top:100,
//                    layout: {
//                        type: 'vbox',
//                        pack: 'end'


//                    },
//                    items: [
//                            {
//                                xtype: 'button',
//                                margin: '0 0 -45 -13',
//                               // hidden:true,
//                                id: 'btnsingleTrackingOverViewMapLabelShow',
//                                height: 115,
//                                width: 50,
//                                // hidden: true,
//                                //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
//                                html: '<div  style="background-color: #57A0DC;"><font size="3" color="white">&#x21d7;</font></div>',
//                                ui: 'plain',
//                                handler: function () {
                                   
                                
//                                    if (ShowOverViewMap == 'no') {
//                                        Ext.getCmp('singleTrackingOverViewMapPanelOverViewMapbottomsPhoneView').setHidden(false);
//                                        Ext.getCmp('btnsingleTrackingOverViewMapLabelShow').setHidden(true);
                                        
//                                        var task = Ext.create('Ext.util.DelayedTask', function () {


//                                            ShowOverViewMap = 'yes';
//                                            //  alert(ShowOverViewMap+"vvv");
//                                            ActiveOverViewMap = 'yes';
//                                            Ext.Viewport.setMasked(false);
//                                        });
//                                        task.delay(1000);

//                                        return;

//                                    } if (ShowOverViewMap == 'yes') {
//                                        Ext.getCmp('singleTrackingOverViewMapPanelOverViewMapbottomsPhoneView').setHidden(true);
//                                        Ext.getCmp('btnsingleTrackingOverViewMapLabelShow').setHidden(false);
//                                        var task = Ext.create('Ext.util.DelayedTask', function () {
//                                            // Ext.getCmp('singleTrackingOverViewMapPanelOverViewMapbottomsPhoneView').setHidden(true);
//                                            ShowOverViewMap = 'no';
//                                            ActiveOverViewMap = 'no';
//                                            Ext.Viewport.setMasked(false);
//                                        });
//                                        task.delay(1000);
//                                        // alert(ShowOverViewMap);
//                                        return;

//                                    }

//                                }


//                            },


//                    ]
//                },

//                     {
//                         xtype: 'container',
//                         //top:10,
//                      // margin:'220 0 0 0',
//                         layout: {
//                             type: 'hbox',
//                            align:'center',
//                             pack: 'start'

//                         },
//                         items: [

//                          //{
//                          //    xtype: 'button',
//                          // //   margin: '100 0 0 -9',
//                          //    //  margin: '-100 -9 0 0',
//                          //    id: 'btnsingleTrackingOverViewMapMilliages',
//                          //    height: 90,
//                          //    width: 200,
//                          //    // hidden: true,
//                          //    //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
//                          //    html: '<div  style="background-color: #57A0DC;"><font size="0.5" color="white">------------Milliages------------</font><br><font size="3" color="white"><b>0045641</b></font></div>',
//                          //    ui: 'plain',
//                          //    handler: function () {

//                          //    }


//                          //},

//                                    {
//                                        xtype: 'button',
//                                        id: 'btnsingleTrackingOverViewMapGeolocationAddressWeb',
//                                        height: 55,
//                                        width: 55,
//                                      //  hidden:true,
//                                        zIndex: 10,
//                                        html: '<div ><img src="resources/icons/locate.png" width="45" height="45" alt="Company Name"></div>',
//                                        ui: 'plain',
//                                        handler: function()
//                                        {
                                            
//                                            if (geolocationisOn == 'no')
//                                            {
                              
//                                                Ext.Viewport.mask({ xtype: 'loadmask', message: 'Detecting Location..Please Wait.' });
//                                                var task = Ext.create('Ext.util.DelayedTask', function () {
//                                                    geolocationisOn = 'yes';
//                                                    geolocate('yes');
//                                                Ext.Viewport.unmask();
//                                            });
//                                            task.delay(500);
                                                
//                                            return;
//                                            }
//                                            if (geolocationisOn == 'yes')
//                                            {
//                                                Ext.Viewport.mask({ xtype: 'loadmask', message: 'Remove GeoLocation..Please Wait.' });
//                                                var task = Ext.create('Ext.util.DelayedTask', function () {
//                                                    geolocationisOn = 'no';


//                                                    singleTrackingMap.setCenter(boundreboundlatlongsingleTrackingMap)
//                                                    singleTrackingMap.setZoom(8);
//                                                    boundstatus = 'no';

//                                                    Ext.Viewport.unmask();
//                                                });
//                                                task.delay(500);
                                               
                                                
//                                                return;
                                              
//                                            }
                                          
//                                        }
//                                    },
                                      
//                         ]

//                     },

//            {
//                xtype: 'container',

//                layout: {
//                    type: 'vbox',
//                    pack: 'start'


//                },
//                items: [


//                        {
//                            xtype: 'button',
//                            id: 'btnsingleTrackingOverViewMapGeocodeAddress',
//                            height: 28,
//                            width: 378,
//                           // hidden:true,
//                            zIndex: 10,
//                           // left:-2,
//                            margin: '0 0 0 -9',
//                          //  html: '<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">No 42 Parit Hussin,<br>34300 Bagan Serai<br> Perak</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Geocode Address</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>',
//                            //  html: '<div class="transbox"><table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr > <td class="tdstreetViewTblInfo" >{Speed}</td> <td class="tdstreetViewTblInfo">120km/h</td></tr> <tr > <td class="tdstreetViewTblInfo1">Curr. Speed</td> <td class="tdstreetViewTblInfo1">Max Speed</td></tr> <tr> <td colspan="2" class="tdstreetViewTblInfo">10/13/2015 2:06:56AM</td> </tr>  </table></div>',
//                            html: '<div class="transbox2"><p><font size="2">No 42 Parit Hussin,34300 Bagan Serai<br> Perak</font></p></div>',
//                          //  html: '<div class="transbox"><table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; valign:top ">No 42 Parit Hussin,34300 Bagan Serai<br> Perak</td> </tr>  </table></div>',
//                            //  ui:'round'
//                            ui: 'plain',
//                        },




//                ]

//            },
            

//             {
//                  xtype: 'container',

//                  layout: {
//                      type: 'vbox',
//                      pack: 'start',
//                      align:'right'

//                  },
//                  items: [

                   
//                          {
//                              xtype: 'button',
//                              id: 'btnsingleTrackingOverViewMapPointInfolblRightPhone',
//                              height: 250,
//                              width: 190,
//                              hidden: false,
//                              //height: 250,
//                              //width: 180,
//                              margin: '-36 -7 0 0',
//                              html: '<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">WTP 2681</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">PROTON PERSONA</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>',
//                          //   html: '<div class="transbox"><table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr > <td class="tdstreetViewTblInfo" >{Speed}</td> <td class="tdstreetViewTblInfo">120km/h</td></tr> <tr > <td class="tdstreetViewTblInfo1">Curr. Speed</td> <td class="tdstreetViewTblInfo1">Max Speed</td></tr> <tr> <td colspan="2" class="tdstreetViewTblInfo">10/13/2015 2:06:56AM</td> </tr>  </table></div>',
//                              //  ui:'round'
//                              ui: 'plain',
//                          },
//                                {
//                                    xtype: 'button',
//                                    margin: '-105 -7 0 0',
//                                    id: 'btnsingleTrackingOverViewMilliagesPhone',
//                                    height: 90,
//                                    width: 190,
//                                    // hidden: true,
//                                    //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
//                                    html: '<div  style="background-color: #57A0DC;"><font size="0.5" color="white">------------Milliages------------</font><br><font size="3" color="white"><b>0045641</b></font></div>',
//                                    ui: 'plain',
//                                    handler: function () {

//                                    }


//                                },
        
//                  ]

//             },
                
//             {
//                 xtype: 'container',
              
//                 //height: '100%',
//                 //itemId: 'bottom',
//                 //width: '100%',
//                 layout: {
//                     type: 'vbox'
//                 },
//                 items: [
                     
                    
//                     {
//                     xtype: 'panel',
//                         // flex: 2,
//                         height:"100%",
//                         id: 'left_blue_bottomsingleTrackingOverViewMap',
//                    style: 'border-bottom:1px solid;',
//                     layout: {
//                         type: 'fit'
//                     },
                   
//                     xtype: "SingleTrackingMap"
                 
//                     },
                     

             
//                 {
//                     xtype: 'panel',

              
//                    margin: '-230 0 0 0',
            
//                    height: 230,
//                    width: 250,
//                    hidden:true,
//                    id: 'singleTrackingOverViewMapPanelOverViewMapbottoms',
//                    style: 'border-bottom:2px solid;border-top:2px solid;border-right:2px solid;border-left:2px solid;background-color:#57A0DC;border-color:#57A0DC',
//                     layout: {
//                         type: 'fit',
                       
//                     },
//                     //<td class="tdgpslabel">Tracked Item</td>
                    
//                    //id: 'singleTrackingOverViewMapPanelOverViewMap',
//                     items: [

//                         {
//                             xtype: 'button',
//                             id: 'btnsingleTrackingMapOverViewStreetView',
//                             height: 55,
//                             width: 55,
//                             zIndex: 10,
//                             margin: '-3 0 0 195',
//                             html: '<div ><img src="resources/icons/Street-View-122.png" width="45" height="45" alt="Company Name"></div>',
//                             ui: 'plain',
//                             handler: function (btn) {
//                                 if (ActivatedStreetView == 'no')
//                                 {
//                                     ActivatedStreetView = 'yes';

//                                     var StreetViewPoint = new google.maps.LatLng(latitude, longitude);


//                                     StreetViewSingleTracking = petaOverViewmap.getStreetView();
//                                     StreetViewSingleTracking.setPosition(StreetViewPoint);
//                                     StreetViewSingleTracking.setVisible(true);
//                                     StreetViewSingleTracking.setOptions({

//                                         linksControl: false,
//                                         panControl: false,
//                                         addressControl: false,
//                                         enableCloseButton: false,
//                                         zoomControl: false,
//                                         fullscreenControl: false,
//                                         enableCloseButton: false,

//                                     })
//                                     return;
//                                 }

//                                 if (ActivatedStreetView == 'yes') {
//                                     ActivatedStreetView = 'no';
//                                     StreetViewSingleTracking = petaOverViewmap.getStreetView();
//                                     StreetViewSingleTracking.setPosition(StreetViewPoint);
//                                     StreetViewSingleTracking.setVisible(false);
////
//                                 }

                                
//                             }
//                         },
//                          {
//                              xtype: 'container',
                             
//                              layout: {
//                                  type: 'fit',
                                 
//                              },
//                              width:'100',
//                              items: [

//                                   {
//                                       xtype: 'map',

//                                       mapOptions: {
//                                         //  center: new google.maps.LatLng(3.07801333333333, 101.717348333333),
//                                           zoom: 12,
//                                           panControl: false,
//                                           zoomControl: false,
//                                           mapTypeControl: false,
//                                           scaleControl: false,
//                                           streetViewControl: false,
//                                           mapTypeId: google.maps.MapTypeId.ROADMAP,
                                          
//                                       },
//                                       listeners: {
//                                           maprender: function (comp, map) {
//                                             //  var map = this;
                                         
//                                               var me = this;
//                                               me.map = map;
//                                              petaOverViewmap = map;

//                                           }
//                                       },
//                                   },
                                  
                        

                            

//                              ]
//                            }
//                     ]
//                    // html: '<table class="tblcurrentlocation"> <tr> <td class="tdgpslabel" colspan="2"><font size="2"><center><b>Tracking Item Summary</b></center></font></td></tr><tr> <td class="tdgpslabel">Last Tracked On</td> <td class="tdgpslabel">22-1-2015 20:21</td></tr><tr> <td class="tdgpslabel">Last Tracked By</td> <td class="tdgpslabel">Mizi</td></tr><tr> <td class="tdgpslabel">LIcence Status</td> <td class="tdgpslabel">Activated</td></tr></table>',
//                    // html: '<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: red;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Current Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">02-11-2015 2:06AM</td> </tr>  </table>',
//                 },

                 


//                     {
//                         xtype: 'panel',
                         
//                         margin: '-135 0 0 0',
//                       //  margin: '-462 0 0 0',
//                         hidden: true,
//                         //height: 155,
//                         //width: 172,
//                         height: 135,
//                         width: 150,
//                         id: 'singleTrackingOverViewMapPanelOverViewMapbottomsPhoneView',
//                         style: 'border-bottom:2px solid;border-top:2px solid;border-right:2px solid;border-left:2px solid;background-color:#57A0DC;border-color:#57A0DC',
//                       //  style: 'border-bottom:2px solid;border-top:2px solid;border-right:2px solid;border-left:2px solid;background-color:#57A0DC;',
//                         layout: {
//                             type: 'fit',

//                         },
//                         //<td class="tdgpslabel">Tracked Item</td>

//                         //id: 'singleTrackingOverViewMapPanelOverViewMap',
//                         items: [

//                               {
//                                   xtype: 'button',
//                                    margin: '-45 0 0 103',
                               
//                                   id: 'btnsingleTrackingOverViewMapLabelHide',
//                                   height: 105,
//                                   width: 50,
//                                   // hidden: true,
//                                   //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
//                                   html: '<div  style="background-color: #57A0DC;"><font size="3" color="white">&#x21d9;</font></div>',
//                                   ui: 'plain',
//                                   handler: function () {
                                       

                                                                    
//                                      // Ext.getCmp('btnsingleTrackingOverViewMapLabelShow').setHidden(false);
//                                       if (ShowOverViewMap == 'no') {
//                                           //if (!this.overlay) {
//                                           //    this.overlay = Ext.Viewport.add(overViewMap);
//                                           //}
//                                           //  this.overlay.show();

//                                           //  Ext.Viewport.mask({ xtype: 'loadmask', message: 'Ploting Point.. Please Wait..' });
                                        
//                                               Ext.getCmp('singleTrackingOverViewMapPanelOverViewMapbottomsPhoneView').setHidden(false);
//                                               Ext.getCmp('btnsingleTrackingOverViewMapLabelShow').setHidden(true);
                                         
                                         
//                                           var task = Ext.create('Ext.util.DelayedTask', function () {


//                                               ShowOverViewMap = 'yes';
//                                               //  alert(ShowOverViewMap+"vvv");
//                                               ActiveOverViewMap = 'yes';
//                                               Ext.Viewport.setMasked(false);
//                                           });
//                                           task.delay(1000);

//                                           return;

//                                       } if (ShowOverViewMap == 'yes') {
                                         
//                                               Ext.getCmp('singleTrackingOverViewMapPanelOverViewMapbottomsPhoneView').setHidden(true);
//                                               Ext.getCmp('btnsingleTrackingOverViewMapLabelShow').setHidden(false);
                                          
//                                           var task = Ext.create('Ext.util.DelayedTask', function () {
//                                               // Ext.getCmp('singleTrackingOverViewMapPanelOverViewMapbottomsPhoneView').setHidden(true);
//                                               ShowOverViewMap = 'no';
//                                               ActiveOverViewMap = 'no';
//                                               Ext.Viewport.setMasked(false);
//                                           });
//                                           task.delay(1000);
//                                           // alert(ShowOverViewMap);
//                                           return;

//                                       }

//                                   }


//                               },
//                              {
//                                  xtype: 'container',

//                                  layout: {
//                                      type: 'fit',

//                                  },
//                                  width: '100',
//                                  items: [

//                                       {
//                                           xtype: 'map',

//                                           mapOptions: {
//                                               center: new google.maps.LatLng(3.07801333333333, 101.717348333333),
//                                               zoom: 12,
//                                               panControl: false,
//                                               zoomControl: false,
//                                               mapTypeControl: false,
//                                               scaleControl: false,
//                                               streetViewControl: false,
                                              
//                                               mapTypeId: google.maps.MapTypeId.ROADMAP,

//                                           },
//                                           listeners: {
//                                               maprender: function (comp, map) {
//                                                   //  var map = this;

//                                                   var me = this;
//                                                   me.map = map;
//                                                   dockOverViewMap = map;



//                                               }
//                                           },
//                                       },





//                                  ]
//                              }
//                         ]
//                         // html: '<table class="tblcurrentlocation"> <tr> <td class="tdgpslabel" colspan="2"><font size="2"><center><b>Tracking Item Summary</b></center></font></td></tr><tr> <td class="tdgpslabel">Last Tracked On</td> <td class="tdgpslabel">22-1-2015 20:21</td></tr><tr> <td class="tdgpslabel">Last Tracked By</td> <td class="tdgpslabel">Mizi</td></tr><tr> <td class="tdgpslabel">LIcence Status</td> <td class="tdgpslabel">Activated</td></tr></table>',
//                         // html: '<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: red;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Current Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">02-11-2015 2:06AM</td> </tr>  </table>',
//                     },
                 
//                 ]
//             },
             

//        ]
//    },

    
//    initialize: function () {

//        //if (!this.overlay) {
//        //    this.overlay = Ext.Viewport.add(_geofence_rightpanelSettingDrawFence
//        //);
//        //}
//        //this.overlay.show();
//    }


//});





var panoramapetaOverViewmap;
var dockOverViewMap;
var petaOverViewmap;
var geolocationisOn = 'no';
var geolocationX;
var geolocationY;
Ext.define('MyGPS.view.SingleTracking.singleTrackingOverViewMap', {
    extend: 'Ext.Panel',
    //  extend: 'Ext.Container',
    requires: ['MyGPS.view.SingleTracking.singleTrackingMap',

               'Ext.MessageBox',
        'Ext.ActionSheet',
        'Ext.picker.Picker',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Number',
        'Ext.field.Spinner',
        'Ext.field.Password',
        'Ext.field.Email',
        'Ext.field.Url',
        'Ext.field.DatePicker',
        'Ext.field.Select',
        'Ext.field.Hidden',
        'Ext.field.Radio',
         'Ext.dataview.List',

    ],
    alias: "widget.WidgetsingleTrackingOverViewMap",
    xtype: "singleTrackingOverViewMap",


    config: {

        styleHtmlContent: true,
        layout: 'fit',
        items: [
            {

                xtype: 'toolbar',
                title: 'Live Tracking',
                docked: 'top',
                id: 'toolbarMultiTrackingTop',
                //  hidden:true,
                items:
                       [


                           {
                               xtype: 'button',

                               id: 'btnSingleTrackingTopHome',
                               //  text: 'Show',
                               iconCls: 'home',
                               // html: '<div ><img src="resources/icons/hideGeofence.png" width="33" height="23" alt="Company Name"></div>',
                               ui: 'plain',
                               handler: function () {
                                   // MultipleGeocodeAdd.length = 0;
                                   trackingid.length = 0;
                                   stopClocksingleTrackingMaps();
                                   HideSingleTrackingMapMenu();
                                   markersingleTrackingMap.setMap(null);
                                   markersingleTrackingMapTop.setMap(null);
                                 //  stopClockmultiTrackingMaps();
                                   Ext.getCmp('mainView').setActiveItem(1);
                               }



                           },
                           {
                               xtype: 'spacer'
                           },
                           {
                               xtype: 'button',
                               //right: -7,
                               //top: 1,
                               id: 'btnbtnSingleTrackingTopAccInfo',
                               html: '<div ><img src="resources/icons/MainMenuPictureProfile.png" width="45" height="45" alt="Company Name"></div>',
                               //  html: '<div ><img src="resources/icons/hideGeofence.png" width="30" height="20" alt="Company Name"></div>',
                               ui: 'plain',
                               handler: function () {



                               }
                           },


                       ]

            },
               {

                   xtype: 'toolbar',
                
                   docked: 'bottom',
                   id: 'toolbarSinglerackingBottom',
                    hidden:true,
                   items:
                          [
                              {
                                  xtype: 'button',
                                  //height: 30,
                                  hidden:true,
                                  width: 200,
                                  left: -5,
                                  id: 'btnSingleTrackingMillageBottom11',
                                  text: '<font size="5" >0|0|0|4|3|5|6|6|9</font>',
                                  //  iconCls: 'home',
                                  // html: '<div ><img src="resources/icons/hideGeofence.png" width="33" height="23" alt="Company Name"></div>',
                                  ui: 'round',
                                  handler: function () {

                                  }



                              },
                               

                              {
                                  xtype: 'spacer'
                              },
                              {
                                  xtype: 'button',
                                  //right: -7,
                                  //top: 1,
                                  id: 'btnbtnSingleTrackingBottomBack',
                                  text:'Back',
                                 // html: '<div ><img src="resources/icons/MainMenuPictureProfile.png" width="45" height="45" alt="Company Name"></div>',
                                  //  html: '<div ><img src="resources/icons/hideGeofence.png" width="30" height="20" alt="Company Name"></div>',
                                  ui: 'action',
                                  handler: function () {
                                      trackingid.length = 0;
                                      stopClocksingleTrackingMaps();
                                      markersingleTrackingMap.setMap(null);
                                      markersingleTrackingMapTop.setMap(null);
                                      Ext.getCmp('mainView').setActiveItem(7);

                                  }
                              },


                          ]

               },

                     {
                         xtype: 'container',
                         //top:10,
                         // margin:'220 0 0 0',
                         layout: {
                             type: 'hbox',
                             align: 'center',
                             pack: 'start'

                         },
                         items: [


                                    {
                                        xtype: 'button',
                                        id: 'btnsingleTrackingOverViewMapGeolocationAddressWeb',
                                        height: 55,
                                        width: 55,
                                        hidden:true,
                                        zIndex: 10,
                                        html: '<div ><img src="resources/icons/locate.png" width="45" height="45" alt="Company Name"></div>',
                                        ui: 'plain',
                                        handler: function () {

                                            if (geolocationisOn == 'no') {
                                                //Ext.Viewport.mask({ xtype: 'loadmask', message: 'Detecting Location..Please Wait.' });
                                                //var task = Ext.create('Ext.util.DelayedTask', function () {
                                                //    try
                                                //    {
                                                //        var me = this;
                                                //        if (navigator.geolocation) {

                                                //            navigator.geolocation.getCurrentPosition(function (position) {
                                                //                me.latitude = position.coords.latitude;
                                                //                me.longitude = position.coords.longitude;

                                                //                me.position = new google.maps.LatLng(me.latitude, me.longitude);
                                                //                geolocationX = me.longitude;
                                                //                geolocationY = me.latitude;
                                                //                console.log('geolocatLength:' + geolocationY);
                                                //                if (geolocationY=='undefined')
                                                //                {
                                                //                    Ext.Msg.alert("Sorry, It Might be your browser block accesed to location,please turn it ON!"); return;
                                                //                }


                                                //                var geoLocation = new google.maps.LatLng(geolocationY, geolocationX);
                                                //                console.log('geolocationisOnmmmm:' + geolocationY);
                                                //                // imagegeoLocationIcon = new google.maps.MarkerImage(ip + '714blue.gif', null, null, new google.maps.Point(8, 8), new google.maps.Size(32, 32));

                                                //                var imagegeoLocationIcons = {
                                                //                    url: ip + '714blue.gif', // url
                                                //                    scaledSize: new google.maps.Size(80, 80), // scaled size
                                                //                    //  origin: new google.maps.Point(0, 0), // origin
                                                //                    anchor: new google.maps.Point(40, 40) // anchor
                                                //                };
                                                //                //resources / icons / near_me.png
                                                //                var Locatemarker = new google.maps.Marker({
                                                //                    flat: true,
                                                //                    id:'0',
                                                //                    icon: imagegeoLocationIcons,
                                                //                    map: singleTrackingMap,
                                                //                    optimized: false,
                                                //                    position: geoLocation,
                                                //                    // title: 'I might be herccccccccccce',
                                                //                    visible: true,


                                                //                    // data: rec
                                                //                });

                                                //                singleTrackingMap.setCenter(geoLocation)
                                                //                singleTrackingMap.setZoom(16);




                                                //            });
                                                //        } else {
                                                //            Ext.Msg.alert("Sorry, browser does not support geolocation!");

                                                //        }

                                                //    } catch (err)
                                                //    {
                                                //        alert(err);
                                                //        Ext.Viewport.unmask();
                                                //    }
                                                Ext.Viewport.mask({ xtype: 'loadmask', message: 'Detecting Location..Please Wait.' });
                                                var task = Ext.create('Ext.util.DelayedTask', function () {
                                                    geolocationisOn = 'yes';
                                                    geolocate('yes');
                                                    Ext.Viewport.unmask();
                                                });
                                                task.delay(500);

                                                return;
                                            }
                                            if (geolocationisOn == 'yes') {
                                                Ext.Viewport.mask({ xtype: 'loadmask', message: 'Remove GeoLocation..Please Wait.' });
                                                var task = Ext.create('Ext.util.DelayedTask', function () {
                                                    geolocationisOn = 'no';


                                                    singleTrackingMap.setCenter(boundreboundlatlongsingleTrackingMap)
                                                    singleTrackingMap.setZoom(8);
                                                    boundstatus = 'no';

                                                    Ext.Viewport.unmask();
                                                });
                                                task.delay(500);

                                                //setTimeout(function () {


                                                //    try {

                                                //        singleTrackingMap.setMap(null);
                                                //    } catch (err) {
                                                //        console.log(err);
                                                //    }
                                                //}, 500);

                                                //  alert(MarkerGeolocationID);
                                                //DeleteMarkerGeolocation('0');
                                                // DeleteMarkerGeolocation(MarkerGeolocationID);

                                                return;

                                            }

                                        }
                                    },



                         ]

                     },

            {
                xtype: 'container',

                layout: {
                    type: 'hbox',
                    pack: 'start'


                },
                items: [




                    ////{
                    ////    xtype: 'button',
                    ////    id: 'btnsingleTrackingOverViewStreetView',
                    ////    height: 55,
                    ////    width: 55,
                    ////    margin: '-3 0 0 -9',
                    ////    hidden: true,
                    ////    html: '<div ><img src="resources/icons/streetviewIcon.png" width="45" height="45" alt="Company Name"></div>',
                    ////    ui: 'plain',
                    ////    handler: function () {
                    ////        // alert(OS);




                    ////        //   ActivatedStreetView = 'yes';


                    ////        //Ext.getCmp('btnSingleTrackingShowHideMenuStreetView').setHidden(false);
                    ////        //Ext.getCmp('btnSingleTrackingShowHideMenu').setHidden(true);

                    ////        //Ext.getCmp('btnSingleTrackingBackStreetView').setHidden(false);
                    ////        //Ext.getCmp('btnSingleTrackingBack').setHidden(true);


                    ////        var cntr = Ext.ComponentQuery.query("#SingleTrackingholderID")[0];
                    ////        cntr.setActiveItem(2);


                    ////        var StreetViewPoint = new google.maps.LatLng(latitude, longitude);
                    ////        var streetViewService = new google.maps.StreetViewService();
                    ////        var STREETVIEW_MAX_DISTANCE = 100;
                    ////        streetViewService.getPanoramaByLocation(StreetViewPoint, STREETVIEW_MAX_DISTANCE, function (streetViewPanoramaData, status) {
                    ////            if (status == google.maps.StreetViewStatus.OK) {
                    ////                loadmarkerSingleTrackingMapStreetView(listSingleTrackingitemSingleTrackID);
                    ////                var cntr = Ext.ComponentQuery.query("#SingleTrackingholderID")[0];
                    ////                cntr.setActiveItem(1);
                    ////                _GeofenceInfopanel.hide();
                    ////                Ext.getCmp('toolbarSingleTrackingTop').setTitle('Street View Live Tracking');
                    ////                Ext.Viewport.mask({ xtype: 'loadmask', message: 'Activate Street View Map..Please Wait.' });
                    ////                var task = Ext.create('Ext.util.DelayedTask', function () {
                    ////                    trackingMapMode = 'streetView';
                    ////                    _singleTrackingMap_rightpanel.hide();
                    ////                    if (!this.overlay) {
                    ////                        this.overlay = Ext.Viewport.add(_singleStreetViewTrackingMap_rightpanel);

                    ////                    } else {
                    ////                        this.overlay = Ext.Viewport.add(_singleStreetViewTrackingMap_rightpanel);

                    ////                    }
                    ////                    this.overlay.show();
                    ////                    _GeofenceInfopanelMillage.hide();
                    ////                    _TrackingInfopanel.hide();
                    ////                    //   initializedStreetViewTracking();
                    ////                    Ext.Viewport.unmask();
                    ////                });
                    ////                task.delay(2000);


                    ////                if (OS != "Windows") {
                    ////                    Ext.getCmp('btnsingleTrackingMaprightpanelFullviewlblStreetView').setHidden(true);
                    ////                    Ext.getCmp('btnsingleTrackingMaprightpanelDetailsPointlblStreetView').setHidden(true);
                    ////                    Ext.getCmp('btnsingleTrackingMaprightpanelSearchTrackingItemlblStreetView').setHidden(true);
                    ////                    Ext.getCmp('btnsingleTrackingMaprightpanelOverViewMaplblStreetView').setHidden(true);
                    ////                    Ext.getCmp('btnStreetViewPointInfolblRightWeb').setHidden(true);
                    ////                    Ext.getCmp('toolbarSingleTrackingBottom').setHidden(true);
                    ////                    Ext.getCmp('holderMapStreetView_gSingleTrackingMapStreetView').setHeight("90%");
                    ////                    Ext.getCmp('gSingleTrackingMapStreetView_OverViewWeb').setHidden(true);



                    ////                }

                    ////                if (OS == "Windows" || OS == "MacOS") {
                    ////                    ShowOverViewMapStreetViewWeb = 'no';
                    ////                    Ext.getCmp('btnStreetViewPointInfolblRightWeb').setHidden(false);
                    ////                    Ext.getCmp('toolbarSingleTrackingBottom').setHidden(false);
                    ////                    Ext.getCmp('holderMapStreetView_panelLower').setHidden(true);
                    ////                    Ext.getCmp('holderMapStreetView_panelUpper').setHidden(true);
                    ////                    Ext.getCmp('holderMapStreetView_gSingleTrackingMapStreetView').setHeight("100%");
                    ////                    Ext.getCmp('btnsingleTrackingMaprightpanelStreetViewFullView').setHidden(true);
                    ////                    Ext.getCmp('btnsingleTrackingMaprightpanelOverViewMaplblStreetView').setHidden(true);
                    ////                    Ext.getCmp('gSingleTrackingMapStreetView_OverViewWeb').setHidden(true);
                    ////                    // gSingleTrackingMapStreetView_OverViewWeb
                    ////                    Ext.getCmp('btnsingleTrackingMaprightpanelSearchTrackingItemlblStreetView').setHtml("<div class=transbox><p><font size=2>OverView Map</font></p></div>");

                    ////                    Ext.getCmp('btnsingleTrackingMaprightpanelDetailsPointlblStreetView').setHtml("<div class=transbox><p><font size=2>Search</font></p></div>");
                    ////                    Ext.getCmp('btnsingleTrackingMaprightpanelFullviewlblStreetView').setHtml("<div class=transbox><p><font size=2>Point Info</font></p></div>");



                    ////                }



                    ////            }

                    ////        });





                    ////    }


                    ////},


                      //{
                      //    xtype: 'togglefield',
                      //    //margin: '-18 0 0 10',
                      //  //  zIndex:10,
                      //        //height: 150,
                      //        //width: 300,
                      //    id: 'singleTrackingOverViewEnabledDisabled_heading',
                      //    value: true,
                      //    label: 'Heading',
                      //    labelWidth: '100%',
                      //    listeners: {
                      //        change: function () {
                      //            // alert(Ext.getCmp('PanMapAfterPointChange').getValue());
                      //        }

                      //    },

                      //},

                        {
                            xtype: 'button',
                            id: 'btnsingleTrackingOverViewMapGeocodeAddress',
                            height: 30,
                            width: 400,

                            margin: '0 0 0 -20',
                            //  html: '<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">No 42 Parit Hussin,<br>34300 Bagan Serai<br> Perak</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Geocode Address</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>',
                            //  html: '<div class="transbox"><table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr > <td class="tdstreetViewTblInfo" >{Speed}</td> <td class="tdstreetViewTblInfo">120km/h</td></tr> <tr > <td class="tdstreetViewTblInfo1">Curr. Speed</td> <td class="tdstreetViewTblInfo1">Max Speed</td></tr> <tr> <td colspan="2" class="tdstreetViewTblInfo">10/13/2015 2:06:56AM</td> </tr>  </table></div>',
                            html: '<div class="transbox2"><p><font size="2">No 42 Parit Hussin,34300 Bagan Serai<br> Perak</font></p></div>',
                            //  html: '<div class="transbox"><table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; valign:top ">No 42 Parit Hussin,34300 Bagan Serai<br> Perak</td> </tr>  </table></div>',
                            //  ui:'round'
                            ui: 'plain',
                        },
                ]

            },




           //{
           //    xtype: 'container',
           //    bottom: -6,
           //    layout: {
           //        type: 'hbox',
           //        pack: 'left',
           //        align: 'end'


           //    },
           //    items: [



           //        {
           //            xtype: 'button',
           //            id: 'btnsingleTrackingOverViewMapOverViewMapBtn',
           //            height: 55,
           //            width: 55,
           //            html: '<div ><img src="resources/icons/streetviewOverView.png" width="45" height="45" alt="Company Name"></div>',
           //            ui: 'plain',
           //            handler: function () {
           //                alert('xxxxxx');
           //                Ext.Viewport.mask({ xtype: 'loadmask', message: 'Please Wait..' });


           //                if (ShowOverViewMap == 'no') {
           //                    //if (!this.overlay) {
           //                    //    this.overlay = Ext.Viewport.add(overViewMap);
           //                    //}
           //                    //  this.overlay.show();

           //                    //  Ext.Viewport.mask({ xtype: 'loadmask', message: 'Ploting Point.. Please Wait..' });
           //                    if (OS != "Windows") {
           //                        Ext.getCmp('singleTrackingOverViewMapPanelOverViewMapbottomsPhoneView').setHidden(false);
           //                        Ext.getCmp('singleTrackingOverViewMapPanelOverViewMapbottoms').setHidden(true);

           //                    }
           //                    if (OS == "Windows" || OS == "MacOS") {
           //                        // ActivatedStreetView = 'yes';
           //                        Ext.getCmp('singleTrackingOverViewMapPanelOverViewMapbottoms').setHidden(false);
           //                        Ext.getCmp('singleTrackingOverViewMapPanelOverViewMapbottomsPhoneView').setHidden(true);
           //                    }
           //                    var task = Ext.create('Ext.util.DelayedTask', function () {


           //                        ShowOverViewMap = 'yes';
           //                        //  alert(ShowOverViewMap+"vvv");
           //                        ActiveOverViewMap = 'yes';
           //                        Ext.Viewport.setMasked(false);
           //                    });
           //                    task.delay(1000);

           //                    return;

           //                } if (ShowOverViewMap == 'yes') {
           //                    //  overViewMap.hide();
           //                    if (OS != "Windows") {
           //                        Ext.getCmp('singleTrackingOverViewMapPanelOverViewMapbottomsPhoneView').setHidden(true);
           //                        Ext.getCmp('singleTrackingOverViewMapPanelOverViewMapbottoms').setHidden(true);

           //                    }
           //                    if (OS == "Windows" || OS == "MacOS") {
           //                        Ext.getCmp('singleTrackingOverViewMapPanelOverViewMapbottoms').setHidden(true);
           //                        Ext.getCmp('singleTrackingOverViewMapPanelOverViewMapbottomsPhoneView').setHidden(true);
           //                    }

           //                    //if (OS != "Windows") {
           //                    //    Ext.getCmp('singleTrackingOverViewMapPanelOverViewMapbottomsPhoneView').setHidden(true);
           //                    //}
           //                    //if (OS == "Windows") {

           //                    //    Ext.getCmp('singleTrackingOverViewMapPanelOverViewMapbottomsPhoneView').setHidden(true);
           //                    //}
           //                    var task = Ext.create('Ext.util.DelayedTask', function () {
           //                        // Ext.getCmp('singleTrackingOverViewMapPanelOverViewMapbottomsPhoneView').setHidden(true);
           //                        ShowOverViewMap = 'no';
           //                        ActiveOverViewMap = 'no';
           //                        Ext.Viewport.setMasked(false);
           //                    });
           //                    task.delay(1000);
           //                    // alert(ShowOverViewMap);
           //                    return;

           //                }



           //            }
           //        },





           //            //{
           //            //    xtype: 'button',
           //            //    id: 'btnsingleTrackingOverViewMapOverViewMapBtn',
           //            //    height: 20,
           //            //    width: 150,

           //            //  //  html: '<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">OverView Map</td> </tr>  </table>',
           //            //   // margin:'0 0 0 10',
           //            //   // margin: '-3 0 0 -10',
           //            //    //  html: '<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">No 42 Parit Hussin,<br>34300 Bagan Serai<br> Perak</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Geocode Address</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>',
           //            //    //  html: '<div class="transbox"><table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr > <td class="tdstreetViewTblInfo" >{Speed}</td> <td class="tdstreetViewTblInfo">120km/h</td></tr> <tr > <td class="tdstreetViewTblInfo1">Curr. Speed</td> <td class="tdstreetViewTblInfo1">Max Speed</td></tr> <tr> <td colspan="2" class="tdstreetViewTblInfo">10/13/2015 2:06:56AM</td> </tr>  </table></div>',
           //            //  //  html: '<div class="transbox"><p><font size="2">No 42 Parit Hussin,34300 Bagan Serai<br> Perak</font></p></div>',
           //            //    //  html: '<div class="transbox"><table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; valign:top ">No 42 Parit Hussin,34300 Bagan Serai<br> Perak</td> </tr>  </table></div>',

           //            //   // html: '<font size="1">OverView Map</font>',
           //            //    text: '<font size="2">OverView Map</font>',
           //            //    ui: 'action'
           //            //  //  ui: 'plain',
           //            //},
           //    ]

           //},









              {
                  xtype: 'container',

                  layout: {
                      type: 'hbox',
                      pack: 'end'

                  },
                  items: [

                                                  {
                                                      xtype: 'button',
                                                      margin: '-19 -7 0 0',
                                                      // hidden:true,
                                                      id: 'btnsingleTrackingOverViewMapShowPointInfoTbl',
                                                      height: 115,
                                                      width: 50,
                                                      // hidden: true,
                                                      //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                                                      html: '<div  style="background-color: #57A0DC;"><font size="4" color="white">&#8681;</font></div>',
                                                      ui: 'plain',
                                                      handler: function () {
                                                          Ext.getCmp('btnsingleTrackingOverViewMapShowPointInfoTbl').setHidden(true);
                                                          Ext.getCmp('btnsingleTrackingOverViewMapPointInfoTbl').setHidden(false);
                                                          Ext.getCmp('btnsingleTrackingOverViewMapHidePointInfoTbl').setHidden(false);
                                                      }


                                                  },
                  ]
              },



        


             {
                 xtype: 'container',

                 layout: {
                     type: 'hbox',
                     pack: 'end'

                 },
                 items: [


                         {
                             xtype: 'button',
                           
                             id: 'btnsingleTrackingOverViewMapPointInfoTbl',
                             height: 250,
                             width: 200,

                           //  margin: '-13 -9 0 0',
                             margin: '-13 -15 0 0',
                            // html: '<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">WTP 2681</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">PROTON PERSONA</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>',

                             html: '<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">WTP 2681</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">PROTON PERSONA</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr > <td class="tdspeedmax">ON</td> <td class="tdspeedmax">Moving..</td></tr> <tr > <td class="tdspeed">Geofence</td> <td class="tdspeed">Status</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>',


                            
                             //   html: '<div class="transbox"><table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr > <td class="tdstreetViewTblInfo" >{Speed}</td> <td class="tdstreetViewTblInfo">120km/h</td></tr> <tr > <td class="tdstreetViewTblInfo1">Curr. Speed</td> <td class="tdstreetViewTblInfo1">Max Speed</td></tr> <tr> <td colspan="2" class="tdstreetViewTblInfo">10/13/2015 2:06:56AM</td> </tr>  </table></div>',
                             //  ui:'round'
                             ui: 'plain',
                         },
                         


                 ]

             },
                {
                    xtype: 'container',

                    layout: {
                        type: 'hbox',
                        pack: 'end'

                    },
                    items: [

                                                    {
                                                        xtype: 'button',
                                                        margin: '138 -7 0 0',
                                                        // hidden:true,
                                                        id: 'btnsingleTrackingOverViewMapHidePointInfoTbl',
                                                        height: 115,
                                                        width: 50,
                                                        // hidden: true,
                                                        //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                                                        html: '<div  style="background-color: #57A0DC;"><font size="4" color="white">&#8679;</font></div>',
                                                        ui: 'plain',
                                                        handler: function () {
                                                            Ext.getCmp('btnsingleTrackingOverViewMapShowPointInfoTbl').setHidden(false);
                                                            Ext.getCmp('btnsingleTrackingOverViewMapPointInfoTbl').setHidden(true);
                                                            Ext.getCmp('btnsingleTrackingOverViewMapHidePointInfoTbl').setHidden(true);
                                                        }


                                                    },
                    ]
                },
             {
                 xtype: 'container',

                 //height: '100%',
                 //itemId: 'bottom',
                 //width: '100%',
                 layout: {
                     type: 'vbox'
                 },
                 items: [


                     {
                         xtype: 'panel',
                         // flex: 2,
                         height: "100%",
                         id: 'left_blue_bottomsingleTrackingOverViewMap',
                         style: 'border-bottom:1px solid;',
                         layout: {
                             type: 'fit'
                         },

                         xtype: "SingleTrackingMap"

                     },


                 {
                     xtype: 'panel',


                     margin: '-230 0 0 0',

                     height: 230,
                     width: 250,
                     hidden: true,
                     id: 'singleTrackingOverViewMapPanelOverViewMapbottoms',
                     style: 'border-bottom:2px solid;border-top:2px solid;border-right:2px solid;border-left:2px solid;background-color:#57A0DC;border-color:#57A0DC',
                     layout: {
                         type: 'fit',

                     },
                     //<td class="tdgpslabel">Tracked Item</td>

                     //id: 'singleTrackingOverViewMapPanelOverViewMap',
                     items: [

                         {
                             xtype: 'button',
                             id: 'btnsingleTrackingMapOverViewStreetView',
                             height: 55,
                             width: 55,
                             zIndex: 10,
                             margin: '-3 0 0 195',
                             html: '<div ><img src="resources/icons/Street-View-122.png" width="45" height="45" alt="Company Name"></div>',
                             ui: 'plain',
                             handler: function (btn) {
                                 if (ActivatedStreetView == 'no') {
                                     ActivatedStreetView = 'yes';

                                     var StreetViewPoint = new google.maps.LatLng(latitude, longitude);


                                     StreetViewSingleTracking = petaOverViewmap.getStreetView();
                                     StreetViewSingleTracking.setPosition(StreetViewPoint);
                                     StreetViewSingleTracking.setVisible(true);
                                     StreetViewSingleTracking.setOptions({

                                         linksControl: false,
                                         panControl: false,
                                         addressControl: false,
                                         enableCloseButton: false,
                                         zoomControl: false,
                                         fullscreenControl: false,
                                         enableCloseButton: false,

                                     })
                                     return;
                                 }

                                 if (ActivatedStreetView == 'yes') {
                                     ActivatedStreetView = 'no';
                                     StreetViewSingleTracking = petaOverViewmap.getStreetView();
                                     StreetViewSingleTracking.setPosition(StreetViewPoint);
                                     StreetViewSingleTracking.setVisible(false);
                                     //
                                 }


                             }
                         },
                          {
                              xtype: 'container',

                              layout: {
                                  type: 'fit',

                              },
                              width: '100',
                              items: [

                                   {
                                       xtype: 'map',

                                       mapOptions: {
                                           //  center: new google.maps.LatLng(3.07801333333333, 101.717348333333),
                                           zoom: 12,
                                           panControl: false,
                                           zoomControl: false,
                                           mapTypeControl: false,
                                           scaleControl: false,
                                           streetViewControl: false,
                                           mapTypeId: google.maps.MapTypeId.ROADMAP,

                                       },
                                       listeners: {
                                           maprender: function (comp, map) {
                                               //  var map = this;

                                               var me = this;
                                               me.map = map;
                                               petaOverViewmap = map;

                                           }
                                       },
                                   },





                              ]
                          }
                     ]
                     // html: '<table class="tblcurrentlocation"> <tr> <td class="tdgpslabel" colspan="2"><font size="2"><center><b>Tracking Item Summary</b></center></font></td></tr><tr> <td class="tdgpslabel">Last Tracked On</td> <td class="tdgpslabel">22-1-2015 20:21</td></tr><tr> <td class="tdgpslabel">Last Tracked By</td> <td class="tdgpslabel">Mizi</td></tr><tr> <td class="tdgpslabel">LIcence Status</td> <td class="tdgpslabel">Activated</td></tr></table>',
                     // html: '<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: red;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Current Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">02-11-2015 2:06AM</td> </tr>  </table>',
                 },
                     {
                         xtype: 'panel',

                         margin: '-140 0 0 0',
                         //  margin: '-462 0 0 0',
                         hidden: true,
                         height: 155,
                         width: 172,
                         id: 'singleTrackingOverViewMapPanelOverViewMapbottomsPhoneView',
                         style: 'border-bottom:2px solid;border-top:2px solid;border-right:2px solid;border-left:2px solid;background-color:#57A0DC;border-color:#57A0DC',
                         //  style: 'border-bottom:2px solid;border-top:2px solid;border-right:2px solid;border-left:2px solid;background-color:#57A0DC;',
                         layout: {
                             type: 'fit',

                         },
                         //<td class="tdgpslabel">Tracked Item</td>

                         //id: 'singleTrackingOverViewMapPanelOverViewMap',
                         items: [


                              {
                                  xtype: 'container',

                                  layout: {
                                      type: 'fit',

                                  },
                                  width: '100',
                                  items: [

                                       {
                                           xtype: 'map',

                                           mapOptions: {
                                               center: new google.maps.LatLng(3.07801333333333, 101.717348333333),
                                               zoom: 12,
                                               panControl: false,
                                               zoomControl: false,
                                               mapTypeControl: false,
                                               scaleControl: false,
                                               streetViewControl: false,

                                               mapTypeId: google.maps.MapTypeId.ROADMAP,

                                           },
                                           listeners: {
                                               maprender: function (comp, map) {
                                                   //  var map = this;

                                                   var me = this;
                                                   me.map = map;
                                                   dockOverViewMap = map;



                                               }
                                           },
                                       },





                                  ]
                              }
                         ]
                         // html: '<table class="tblcurrentlocation"> <tr> <td class="tdgpslabel" colspan="2"><font size="2"><center><b>Tracking Item Summary</b></center></font></td></tr><tr> <td class="tdgpslabel">Last Tracked On</td> <td class="tdgpslabel">22-1-2015 20:21</td></tr><tr> <td class="tdgpslabel">Last Tracked By</td> <td class="tdgpslabel">Mizi</td></tr><tr> <td class="tdgpslabel">LIcence Status</td> <td class="tdgpslabel">Activated</td></tr></table>',
                         // html: '<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: red;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Current Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">02-11-2015 2:06AM</td> </tr>  </table>',
                     },


                 ]
             },


        ]
    },


    initialize: function () {

        //if (!this.overlay) {
        //    this.overlay = Ext.Viewport.add(_geofence_rightpanelSettingDrawFence
        //);
        //}
        //this.overlay.show();
    }


});

