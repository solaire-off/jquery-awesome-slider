# Jquery Awesome Slider

The best slider you need*

[Demo](https://solaire-off.github.io/src/jquery-awesome-slider/)

## Usage

### Dependencies

    <!-- Styles  -->
    <link rel="stylesheet" href="css/awesome-jquery-slider.min.css">

    <!-- Remember include jquery  -->
    <script src="js/jquery.min.js"></script>

    <!--Include script  -->
    <script src="js/awesome-jquery-slider.js"></script>

### HTML

    <div id="my-slider">
     <img src="img/ales-krivec-188743-unsplash.jpg" alt="Mountain 1">
     <img src="img/alexandre-chambon-157652-unsplash.jpg" alt="Mountain 2">
     <img src="img/etienne-bosiger-367964-unsplash.jpg" alt="Mountain 3">
     <img src="img/vashishtha-jogi-101218-unsplash.jpg" alt="Mountain 4">
    </div>

### JS

    $(function() {
      $('#my-slider').awesomeSlider();
      // OR with settings
      $('#my-slider').awesomeSlider({
        cover: false,
        autoplay: true,
      });
    });

## Option

|Key|Type|Default|Description|
|--- |--- |--- |--- |
|cover|boolean|true|The replaced content is sized to maintain its aspect ratio while filling the element’s entire content box. If the object's aspect ratio does not match the aspect ratio of its box, then the object will be clipped to fit.|
|autoplay|boolean|false|When present, the image slider will automatically start move.|


## Calling the Methods

Example method calls

    $('#my-slider').awesomeSlider("method name");
    // OR with option
    $('#my-slider').awesomeSlider("method name","option");

|Method|Argument Type|Description|
|--- |--- |--- |
|.autoPlay()|none|toggle image slider autoplay|
|.nextThumbnails()|none|slide to next thumbnail|
|.prevThumbnails()|none|slide to previus thumbnail|
|.nextSlide()|none|switch to next image|
|.prevSlide()|none|switch to previus image|
|.getCurrentSlide(slideNumber)|number|switching to image by number|


## Dependencies

Tested with jQuery v3.3.

 
----

>  \* but i am not sure of that
