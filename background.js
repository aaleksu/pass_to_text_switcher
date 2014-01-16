chrome.browserAction.onClicked.addListener(function(tab){
    chrome.tabs.executeScript({
        code: 'var forms=document.forms;'+
              'if(typeof(forms)=="undefined")return;'+
              'for(var i=0;i<forms.length;i++){'+
                'var formInputs=forms[i].getElementsByTagName("input");'+
                'for(var j=0;j<formInputs.length;j++){'+
                  'if(formInputs[j].getAttribute("type")=="password"){'+
                    'formInputs[j].setAttribute("type","text");'+
                  '}'+
                '}'+
              '}'
    });
});