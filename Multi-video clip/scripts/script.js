const NativeUI = require('NativeUI');
const Patches = require('Patches');
const Reactive = require('Reactive');
const CameraInfo = require('CameraInfo');
var slider = NativeUI.slider;
if(Reactive.or(CameraInfo.isRecordingVideo, CameraInfo.isCapturingPhoto)){
slider.visible = false;
}
slider.visible = true;
slider.value.monitor().subscribe(function(val) {
Patches.setScalarValue("sliderValue", val.newValue);
});