

<template>
    <div class="container">
        <div class="img-container">
    <img class="img-crop" id="image" style="height: 80vw; width: 80vw;">
    <br>
    <button class="btn btn-dark" id="save">Save</button> <a type="button" id="download" style="display:none" class="btn btn-light">Download</a>
    </div>
    <br>
<br>
<br>
<a href="/privacy">Terms and Privacy Policy</a>  
</div>
</template>


<script>
import Cropper from "cropperjs"
import $ from 'jquery'
export default{
    
    mounted(){
        var image = $("#image")
        document.getElementById("image").src = localStorage.getItem("image")
        const cropper = new Cropper(document.getElementById("image"), {
            aspectRatio: 0,
            zoomable: false,
            scalable: false
        })
        document.getElementById("download").addEventListener("click", function(){
            document.getElementById("download").style.display = none
        })
        document.getElementById("save").addEventListener("click", function(){
            var cropper_img = cropper.getCroppedCanvas({width: image.width}).toDataURL()
            var dwn = document.getElementById("download")
            dwn.style.display = "inline"
            dwn.href = cropper_img
            dwn.download = "cropped_" + localStorage.getItem("name")
        })
    }
}
</script>

<style scoped>
.img-container{
    width: 40vw;
    height: 35vw;
    margin: auto;
}
</style>
  