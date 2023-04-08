(function() {
    'use strict';

    //var html2 = $("body").html().replace(/script/g, "scpt"); $("body").html(html2);


    window.pagetop = function pagetop() {
        scrollTo(0,  10);
    }

    window.pageup = function pageup() {
        scrollBy(0, -window.screen.availHeight*0.85);
    }

    window.pagedown = function pagedown() {
        scrollBy(0,  window.screen.availHeight*0.85);
    }

    //工具条
    var tool_bar = $('<div id="tool-bar" style="top:45%;left:0px;position:fixed;float:left;font-size:1m;z-index: 9999999;"></div>');
    tool_bar.append("<p style='float:right'><div id='top' onclick='pagetop()' style=\"background-color: rgba(243,0,0,0);font-family:'Courier New';margin-bottom: 90px;height: 60px;z-index: 9999999;border-width:0.5px; border-top-style:solid; border-right-style:solid; border-bottom-style:solid; border-left-style:solid\">TOP</div></p>");
    tool_bar.append("<p style='float:right'><div id='up' onclick='pageup()' style=\"background-color: rgba(243,0,0,0);font-family:'Courier New'; margin-bottom: 90px;height: 60px;z-index: 9999999;border-width:0.5px; border-top-style:solid; border-right-style:solid; border-bottom-style:solid; border-left-style:solid\">PageUp</div></p>");
    tool_bar.append("<p style='float:right'><div id='down' onclick='pagedown()' style=\"background-color: rgba(243,0,0,0);font-family:'Courier New';margin-bottom: 90px;height: 60px;z-index: 9999999;border-width:0.5px; border-top-style:solid; border-right-style:solid; border-bottom-style:solid; border-left-style:solid\">PageDown</div></p>");
    $('body').append(tool_bar);//append
    tool_bar.css("z-index", "9999999");
    document.body.style.backgroundColor="white";
//    $('#undefined').hide();
;

})();
