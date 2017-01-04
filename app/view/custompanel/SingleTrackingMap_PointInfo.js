
Ext.define('MyGPS.view.custompanel.SingleTrackingMap_PointInfo', {

});


function SingleTrackingMapPointIfo()
{

var _SingleTrackingMap_PointIfo =
    Ext.create('Ext.Panel', {
        xtype: 'panel',
        height: 145,
        width: 195,
        id: 'SingleTrackingMap_PointIfo',
        draggable: false,
        right: 5,
        top: 50,
        style: 'background-color: #57A0DC;',

        showAnimation: {
            type: 'slide',
            direction: 'down',
            duration: 350,
            easing: 'ease-out',
        },
        hideAnimation: {
            type: 'slide',
            direction: 'up',
            duration: 650,
            out: 'ease-in'
        },

        style: 'background-color: #57A0DC;',
        items:


            {
                xtype: 'container',
                style: 'background-color: transparent;',

                items: [

                     {
                         id: 'SingleTrackingMap_PointIfoTbl',
                         html: '<table class="tblgpssummary2">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 18px; color: #fff; text-align: center;  valign:top; height:20%">WTP 2681</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 14px; color: #fff; text-align: center;  valign:top;  height:20% ">Proton Persona</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>',


                     },



                ]



            }







    });

return _SingleTrackingMap_PointIfo;

}