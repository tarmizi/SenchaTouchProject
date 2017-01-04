Ext.define('MyGPS.view.MainPage', {
    extend: 'Ext.Panel',
    xtype: 'mainPage',
    config: {
        fullscreen: true,
        id: 'mainView',
        // layout: 'card',
        layout: {
            type: 'card',
            animation: {
                type: 'slide',
                direction: 'left',
                //type: 'pop',
                //direction: 'left',
                duration: 250
            }

        },
        items: [

            {
                xtype: 'loginpage'
            },
             
        {
         
            xtype: 'mainmenu',
            //style: "background-color: #FF9900; color:white;",
            //html: '<center>Item 2</center>'
        },


          {
         
              xtype: 'singleTrackingOverViewMap',
              //style: "background-color: #FF9900; color:white;",
              //html: '<center>Item 2</center>'
          },


          {
         
              xtype: 'UserAccount',
              //style: "background-color: #FF9900; color:white;",
              //html: '<center>Item 2</center>'
          },

           {

               xtype: 'geoFencesSettingholder',
               //style: "background-color: #FF9900; color:white;",
               //html: '<center>Item 2</center>'
           },
          
           {

               xtype: 'gMapHistory',
               //style: "background-color: #FF9900; color:white;",
               //html: '<center>Item 2</center>'
           },
          
           {

               xtype: 'sendcommandsmain',
               //style: "background-color: #FF9900; color:white;",
               //html: '<center>Item 2</center>'
           },

         {

             xtype: 'multiTrackingItemsLists',
             //style: "background-color: #FF9900; color:white;",
             //html: '<center>Item 2</center>'
         },
           {

               xtype: 'MultiTrackingMap',
               //style: "background-color: #FF9900; color:white;",
               //html: '<center>Item 2</center>'
           },
           {

               xtype: 'SingleTrackingStreetViewMap',
               //style: "background-color: #FF9900; color:white;",
               //html: '<center>Item 2</center>'
           },
           
        
        {
            style: "background-color: #006600; color:white;",
            html: '<center>Item 3</center>'
        }

        ]
    }
});