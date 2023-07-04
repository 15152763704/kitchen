<template>
	<div class="glodel">
	  <div :id="div"></div>
	  <!-- <div class="noImg" v-if="imgShow">
	    <img src="../assets/img/zxc/noImg.png" alt="">
	    <div>暂无全景图，请联系工作人员上传全景图</div>
	  </div> -->
	</div>
</template>

<script>
	    import { Viewer as PhotoSphereViewer } from 'photo-sphere-viewer';
	    import MarkersPlugin from 'photo-sphere-viewer/dist/plugins/markers'
	    import 'photo-sphere-viewer/dist/photo-sphere-viewer.css';
	    import 'photo-sphere-viewer/dist/plugins/markers.css';
	
	  export default {
	    name: 'panorama',
	    data() {
	      return {
	        //全景图配置
	        div:'div',
			vrImg:require('../../static/baskCooking/1.jpg')
	      }
	    },
	    mounted() {
			var viewer = new PhotoSphereViewer({
				container: this.div, //容器
				panorama: this.vrImg, //拼合图片路径
				size: {
					width: '500px',
					height: '500px'
				},
				defaultZoomLvl: 50,
				navbar        : [
					  'autorotate', 'zoom', 'download', 'markers', 'markersList','caption', 'fullscreen',
				],
				plugins: [
					  // GyroscopePlugin,   //根据需要引入
					  // StereoPlugin,
					  [MarkersPlugin, {
						markers: (function () {
						  var a = [];                       
						   a.push({
							  id       : 'circle',
							  tooltip  : 'A circle of radius 30',
							  circle   : 30,
							  svgStyle : {
								fill       : 'rgba(255,255,0,0.3)',
								stroke     : 'yellow',
								strokeWidth: '2px',
							  },
							  longitude: -0.5,
							  latitude : -0.28,
							  anchor   : 'center right',
							});
				  
							a.push({
							  id       : 'ellipse',
							  tooltip  : 'An ellipse of radius 60/30',
							  ellipse  : [60, 30],
							  svgStyle : {
								fill       : 'rgba(255,255,0,0.3)',
								stroke     : 'yellow',
								strokeWidth: '2px',
							  },
							  longitude: -0.5,
							  latitude : -0.28,
							  anchor   : 'center left',
							});
						  
						  return a;
						}())
					  }],
					]
			})
	    }

	  }
</script>

<style>

</style>