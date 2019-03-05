/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 var telephone_number; // 전화번호 전역 함수 
 var app_version="1.1.5";
 var version_check="n";
 var token="";
 var ref_app="";

var app = {
  
    // Application Constructor
    initialize: function() {

         this.bindEvents();

    },
    bindEvents: function() {

        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
      console.log("ready");
       receivedEvent('deviceready');
   
    }
    
  }

 function receivedEvent(id) {
     var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
document.addEventListener("offline", function(){  
  // navigator.notification.confirm(" Connect and try again. ", onConfirm, "No Internet", "EXIT"); 
  // navigator.notification.activityStop();
  //   alert("접속오류");      
  mode="error";
  
   gopage("error.html");
   ref.close();

   }, false);    
 
      start_web();
       //onmain();
       // save_reg_id("reg_id");
    };








  

    function start_web(token) {
  var app_token=token;
   var uuid=device.uuid;
   ref = cordova.InAppBrowser.open('https://console-mobile.cloudbric.com?uuid='+uuid+'&token='+app_token+'&version='+app_version, '_blank', 'toolbar=no,location=no,enableViewportScale=yes');
   console.log('https://console-mobile.cloudbric.com?uuid='+uuid+'&token='+app_token);
   //ref.addEventListener('loadstart', inAppBrowserbLoadStart);
   //ref.addEventListener('loadstop', inAppBrowserbLoadStop);
   ref.addEventListener('loaderror', inAppBrowserbLoadError);
   //ref.addEventListener("backbutton", exit_show);
   //ref.addEventListener("backbutton", function () { alert("asd"); exit;})
   //ref.addEventListener('exit', exit_show);

   
}

function inAppBrowserbLoadError(event) {
   navigator.notification.activityStop();
   mode="error";
  
   gopage("error.html");
   ref.close();
}

function gopage (page) {
    var page=page;
    location.href=page;
}