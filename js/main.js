/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, window, location, CSInterface, SystemPath, themeManager*/

(function() {
    'use strict';
    var fontsize = $("#fntsize");
    for (var i = 20; i < 50; i++) {
        fontsize.append(new Option(i, i));
    }

    var csInterface = new CSInterface();


    function init() {

        themeManager.init();

        $("#btn_test").click(function() {
            csInterface.evalScript('ubahThanks(' + $('#thanks').val() + ')');
        });
        $("#btn_save").click(function() {
            csInterface.evalScript('simpanJpeg()');
        });

        $("#btn_text").click(function() {

            csInterface.evalScript('changeText(' + '"' + $('#input_text').val() + '"' + ')');
        });
        $("#btn_color").click(function() {
            csInterface.evalScript('changeColor()');

        });
        $("#btn_colormul").click(function() {
            csInterface.evalScript('changeColorMul()');

        });
        $("#btn_split").click(function() {
            csInterface.evalScript('SplitText()');

        });
        $("#btn_doshit").click(function() {

            csInterface.evalScript('doShit(' + '"' + $('#input_text').val() + '",' + $('.isitalic').is(':checked') + ',' + $("#fntsize").val() + ')');

        });
        $("#btn_edit").click(function() {

            csInterface.evalScript('doEdit(' + '"' + $('#input_text').val() + '",' + $('.isitalic').is(':checked') + ',' + $("#fntsize").val() + ')');

        });
    }

    init();

}());