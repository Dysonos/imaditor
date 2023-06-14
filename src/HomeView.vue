<template>
  <div class="container">
    <br>
    
  <h1>A simplistic and minimalistic image cropper.</h1>
  <br>
  <h2>How to use Dysonos image cropper.</h2>
  <ul>
    <li>First, upload your file in the input give below and click Submit</li>
    <li>Now, the crop page window will open. Use our simple tool to crop your photos.</li>
  </ul>
  <hr>
  <br>
  <div class="mb-3">
  <label for="formFileMultiple" class="form-label">Choose the photo you want to edit.</label>
  <input class="form-control" type="file" id="formFileMultiple" multiple>
</div>
<br>
<button class="btn btn-dark" id="sub">Submit</button>
<br>
<br>
<a href="/privacy">Terms and Privacy Policy</a>  
<br>
<br>
<p>Dysonos is a free image cropper with no risk of privacy breach. We do not have access to any photo which you upload because we are not connected by a database. You can use ask service to crop photos properly without any fee or unneccessary activity. You can use Dysonos cropper to crop your photos as per your need. We dont have any to limit to whcih you can upload your photos.</p>
<br>
<br>
<br>


</div>

  
</template>

<script>
export default {
  head: {
    title(){
      return{
        inner: "a simplistic and minimalistic image cropper."
      }
    }
  },
  mounted: function(){
    console.log("script")
    document.getElementById("sub").addEventListener('click', function(){     
        const reader = new FileReader();
        reader.addEventListener('load', () => {
          localStorage.setItem("image", reader.result)
          SessionStorage.setItem("name", document.getElementById("formFileMultiple").files[0].name)
          consoe.log("loaded")
        })
        reader.readAsDataURL(document.getElementById("formFileMultiple").files[0])
        window.open("crop", "_self")
      
      
    })
  }
}
</script>

