<template>
  <div>
    <!-- Start Hero Carousel -->
    <carousel :data="slide" indicators="hover"></carousel>
    <!-- End Hero Carousel -->
  </div>
</template>
<script>
export default {
  data() {
    return {
        slide: [
        '<div class="example-slide"><img class="img-fluid" alt="Responsive image" src="/storage/upload/Canta_wallpaper_01.jpeg?h=200" /></div>',
        '<div class="example-slide"><img class="img-fluid" alt="Responsive image" src="/storage/upload/Canta_wallpaper_01.jpeg?h=200" /></div>'
      ]
    };
  }
};
</script>
