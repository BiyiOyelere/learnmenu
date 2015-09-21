/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var myElement = document.getElementById("main-row");
var watcher = scrollMonitor.create( myElement );
watcher.enterViewport(function() {
    console.log( 'I have entered the viewport' );
    var me = document.getElementById("aa");
    me.className = "navbar navbar-static-top line-navbar-one";
});
watcher.exitViewport(function() {
    console.log( 'I have left the viewport' );
    var me = document.getElementById("aa");
    me.className = "navbar  line-navbar-one navbar-fixed-top";
});