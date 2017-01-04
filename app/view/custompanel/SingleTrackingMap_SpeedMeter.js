
var _singleTrackingMap_SpeedMeter;
Ext.define('MyGPS.view.custompanel.SingleTrackingMap_SpeedMeter', {
});

function SingleTrackingMap_SpeedMeter() {
    _singleTrackingMap_SpeedMeter =
  Ext.create('Ext.Panel', {

      xtype: 'panel',
      height: 1,
      width: 1,
      id: 'SingleTrackingMap_SpeedMeterID',
      draggable: false,
      left: -4,
       bottom: 175,
     // bottom: 71,

      //showAnimation: {
      //    type: 'slide',
      //    direction: 'up',
      //    duration: 450,
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
          type: null,
          direction: null,
          duration: null,
          //  easing: 'ease-in'
      },
      //hideAnimation: {
      //    type: 'popOut',
      //    duration: 250,
      //    easing: 'ease-out'
      //},
      style: 'background-color: transparent;',
      items: {

          xtype: 'container',
          style: 'background-color: transparent;',
          layout: {
              type: 'hbox',
              //pack: 'left',
              //align: 'end'
          },

          items: [

                 
                    //{
                    //    xtype: 'button',
                    //    //height: 30,
                    //    top: 38,
                    //    width: 200,
                    //    hidden:true,
                    //    id: 'btnSingleTrackingMillageBottom111',
                    //    text: '<font size="5" >0|0|0|4|3|5|6|6|9</font>',
                    //    //  iconCls: 'home',
                    //    // html: '<div ><img src="resources/icons/hideGeofence.png" width="33" height="23" alt="Company Name"></div>',
                    //    ui: 'action-round',
                    //    handler: function () {
                    //        //   [top, right, bottom, and left]
                    //        // alert('hiwmmmggggggggggbbb');
                    //        // _singleTrackingMap_MillageCount.hide();
                    //        // Ext.getCmp('singleTrackingMap_MillageCount').setMargin('0 0 -37 1');
                    //    }



                    //},
                     {
                         xtype: 'button',
                         id: 'btnsingleTrackingMapSpeedometer',
                         height: 110,
                         width: 135,
                         html: '<div ><img src="resources/icons/speedometer2.png" width="125" height="100" alt="Company Name"></div>',
                         //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                         ui: 'plain',
                         handler: function () {
                         }
                     },
                     {
                         xtype: 'button',
                         id: 'btnsingleTrackingMapSpeedometerCurrentSpeed',
                         height: 40,
                         width: 50,
                         margin:'45 0 0 -115',
                         html: '<font size="5" color="black"><b>0</b></font>',
                         //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                         ui: 'plain',
                         handler: function () {
                         }
                     },


                       {
                           xtype: 'button',
                           id: 'btnsingleTrackingMapSpeedometerMaxSpeed',
                           height: 40,
                           width: 50,
                           margin: '17 0 0 1',
                           html: '<font size="4" color="red"><b>180</b></font>',
                           //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                           ui: 'plain',
                           handler: function () {
                           }
                       },

          ]

      },


  });

    return _singleTrackingMap_SpeedMeter
}

