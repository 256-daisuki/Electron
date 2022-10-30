'use strict';
function save(){
  var ntText = document.getElementById("txt").value;
  var ntBlobText = new Blob([ntText], {type:'text/plain'});
  var nmSaveFile = document.getElementById("nmSaveFile").value;
  var saveLink = document.createElement("a");
  saveLink.download = (nmSaveFile === null || nmSaveFile == "") ? "memo.txt" : nmSaveFile + ".txt";
  saveLink.innerHTML = "Download File";
  saveLink.href = window.webkitURL.createObjectURL(ntBlobText);
  saveLink.click();
}

function loadTxt(){
  const loadTxt = document.getElementById("load").files[0];
  const fileReader = new FileReader();
  fileReader.onload = function(fileLoadedEvent){
    const ntLoadText = fileLoadedEvent.target.result;
    document.getElementById("txt").value = ntLoadText;
  };
  fileReader.readAsText(loadTxt, "UTF-8");
}