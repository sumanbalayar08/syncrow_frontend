"use strict";
(() => {
var exports = {};
exports.id = 591;
exports.ids = [591,1088,7454,7121,7568,8516,5825,6496];
exports.modules = {

/***/ 4290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Efficiency),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/footer.js
var footer = __webpack_require__(6151);
// EXTERNAL MODULE: ./components/header.js + 3 modules
var header = __webpack_require__(7964);
// EXTERNAL MODULE: external "react-lottie"
var external_react_lottie_ = __webpack_require__(1189);
var external_react_lottie_default = /*#__PURE__*/__webpack_require__.n(external_react_lottie_);
;// CONCATENATED MODULE: ./pages/lotties/chart.json
const chart_namespaceObject = JSON.parse('{"v":"4.8.0","meta":{"g":"LottieFiles AE 1.0.0","a":"","k":"","d":"","tc":""},"fr":60,"ip":0,"op":256,"w":1080,"h":750,"nm":"SAVINGS CARD","ddd":0,"assets":[{"id":"image_0","w":709,"h":255,"u":"","p":"data:image/png;base64,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","e":1}],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"15,373 Outlines","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":30,"s":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":210,"s":[100]},{"t":240,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[844,204.5,0],"to":[-3.333,0,0],"ti":[3.333,0,0]},{"i":{"x":0.667,"y":0.667},"o":{"x":0.333,"y":0.333},"t":30,"s":[824,204.5,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0},"t":210,"s":[824,204.5,0],"to":[3.333,0,0],"ti":[-3.333,0,0]},{"t":240,"s":[844,204.5,0]}],"ix":2},"a":{"a":0,"k":[99.007,26.268,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-8.018,0],[0.017,6.419],[5.326,0.762],[0,0],[0.019,4.268],[7.591,0],[0.15,-6.364],[0,0],[-3.508,0],[0.02,-3.192],[3.934,0],[0,0],[0,0],[0,0],[0.019,-3.434],[4.066,0],[0.165,3.099],[0,0]],"o":[[8.129,0],[0.017,-4.752],[0,0],[4.12,-0.891],[0.019,-5.79],[-7.386,0],[0,0],[0.111,-3.192],[3.545,0],[0.02,3.321],[0,0],[0,0],[0,0],[4.805,0],[0.019,3.358],[-3.823,0],[0,0],[0.185,6.421]],"v":[[84.711,17.26],[98.74,6.181],[90.464,-2.747],[90.464,-3.043],[97.329,-11.265],[84.821,-21.787],[71.569,-11.024],[78.195,-11.024],[84.784,-16.202],[90.665,-10.856],[84.005,-5.327],[80.646,-5.327],[80.646,-0.019],[84.005,-0.019],[91.65,5.828],[84.69,11.487],[77.751,6.403],[70.772,6.403]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[42.656,16.74],[49.8,16.74],[65.946,-15.385],[65.946,-21.269],[40.058,-21.269],[40.058,-15.514],[58.819,-15.514],[58.819,-15.255]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[-8.017,0],[0.02,6.419],[5.327,0.762],[0,0],[0.018,4.268],[7.59,0],[0.148,-6.364],[0,0],[-3.505,0],[0.02,-3.192],[3.935,0],[0,0],[0,0],[0,0],[0.018,-3.434],[4.063,0],[0.168,3.099],[0,0]],"o":[[8.129,0],[0.02,-4.752],[0,0],[4.12,-0.891],[0.018,-5.79],[-7.387,0],[0,0],[0.111,-3.192],[3.545,0],[0.02,3.321],[0,0],[0,0],[0,0],[4.808,0],[0.018,3.358],[-3.824,0],[0,0],[0.186,6.421]],"v":[[20.863,17.26],[34.893,6.181],[26.616,-2.747],[26.616,-3.043],[33.484,-11.265],[20.975,-21.787],[7.724,-11.024],[14.352,-11.024],[20.938,-16.202],[26.821,-10.856],[20.159,-5.327],[16.8,-5.327],[16.8,-0.019],[20.159,-0.019],[27.805,5.828],[20.846,11.487],[13.904,6.403],[6.927,6.403]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0.537,-2.245],[0,0],[-0.518,4.678]],"o":[[0,0],[0,0],[-0.315,5.03],[0,0],[0.89,-2.337],[0,0]],"v":[[1.048,11.544],[-4.89,11.544],[-5.021,13.621],[-7.19,26.018],[-2.661,26.018],[0.806,13.584]],"c":true},"ix":2},"nm":"Path 4","mn":"ADBE Vector Shape - Group","hd":false},{"ind":4,"ty":"sh","ix":5,"ks":{"a":0,"k":{"i":[[-7.426,0],[0,7.554],[6.903,0],[1.409,-1.671],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-2.282,-0.017],[0.02,-4.305],[4.063,0],[0.241,3.118],[0,0]],"o":[[8.035,0],[0,-7.312],[-3.081,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[1.281,-1.411],[4.177,0.02],[0.02,4.251],[-3.434,0],[0,0],[0.185,6.31]],"v":[[-25.492,17.26],[-11.854,4.249],[-23.843,-8.332],[-31.061,-5.438],[-31.285,-5.438],[-30.19,-15.514],[-13.839,-15.514],[-13.839,-21.269],[-35.887,-21.269],[-37.872,-1.671],[-31.656,-0.65],[-25.681,-2.989],[-18.517,4.417],[-25.492,11.692],[-31.934,6.403],[-38.615,6.403]],"c":true},"ix":2},"nm":"Path 5","mn":"ADBE Vector Shape - Group","hd":false},{"ind":5,"ty":"sh","ix":6,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-48.357,-21.269],[-54.909,-21.269],[-64.354,-15.2],[-64.354,-8.89],[-55.466,-14.569],[-55.242,-14.569],[-55.242,16.74],[-48.357,16.74]],"c":true},"ix":2},"nm":"Path 6","mn":"ADBE Vector Shape - Group","hd":false},{"ind":6,"ty":"sh","ix":7,"ks":{"a":0,"k":{"i":[[0,0],[-0.037,2.635],[-3.118,0.537]],"o":[[-2.563,-0.817],[0.017,-2.395],[0,0]],"v":[[-85.914,-6.198],[-90.776,-11.004],[-85.841,-15.792]],"c":true},"ix":2},"nm":"Path 7","mn":"ADBE Vector Shape - Group","hd":false},{"ind":7,"ty":"sh","ix":8,"ks":{"a":0,"k":{"i":[[3.397,-0.556],[0,0],[-0.019,-2.635]],"o":[[0,0],[3.379,0.984],[-0.019,2.746]],"v":[[-82.093,11.283],[-82.018,1.094],[-76.469,6.013]],"c":true},"ix":2},"nm":"Path 8","mn":"ADBE Vector Shape - Group","hd":false},{"ind":8,"ty":"sh","ix":9,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[-0.02,6.219],[5.716,1.355],[0,0],[0,0],[-0.296,-2.674],[0,0],[7.014,0.669],[0,0],[0,0],[0,0],[-0.017,-6.143],[-6.256,-1.614],[0,0],[0,0],[0.239,3.358],[0,0],[-7.645,-0.631]],"o":[[0,0],[0,0],[7.963,-0.574],[-0.02,-6.587],[0,0],[0,0],[2.968,0.518],[0,0],[-0.111,-5.901],[0,0],[0,0],[0,0],[-6.959,0.706],[0,5.454],[0,0],[0,0],[-3.323,-0.519],[0,0],[0.26,6.96],[0,0]],"v":[[-86.082,21.491],[-82.148,21.491],[-82.13,17.24],[-69.583,6.068],[-80.755,-4.881],[-81.982,-5.197],[-81.906,-15.792],[-76.729,-10.819],[-70.104,-10.819],[-81.869,-21.696],[-81.852,-26.018],[-85.786,-26.018],[-85.804,-21.696],[-97.755,-10.577],[-87.622,-0.371],[-85.952,0.056],[-86.026,11.283],[-91.982,5.512],[-98.758,5.512],[-86.065,17.24]],"c":true},"ix":2},"nm":"Path 9","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"gr","it":[{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":0,"cix":2,"bm":0,"ix":11,"mn":"ADBE Vector Group","hd":false},{"ty":"mm","mm":4,"nm":"Merge Paths 2","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.999998803232,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[99.008,26.268],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":13,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"LINE Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[559.622,332.527,0],"ix":2},"a":{"a":0,"k":[355.845,55.349,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-72.792,0],[-66.414,0],[-72.789,0],[-72.792,0],[-93.633,0]],"o":[[108.875,0],[68.746,0],[66.413,0],[68.748,0],[94.721,0],[0,0]],"v":[[-353.845,25.566],[-212.307,53.349],[-70.769,-11.976],[70.768,32.662],[195.975,0],[353.845,-53.349]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,0.999998803232,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[355.845,55.349],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.133],"y":[1]},"o":{"x":[0.631],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":90,"s":[100]},{"i":{"x":[0.489],"y":[1]},"o":{"x":[0.523],"y":[0]},"t":195,"s":[100]},{"t":240,"s":[0]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"GRADIENT 2 Outlines","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[559.864,406.178,0],"ix":2},"a":{"a":0,"k":[354.094,127.089,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[94.721,0],[68.748,0],[66.415,0],[68.747,0],[108.875,0],[0,0],[0,0],[0,0]],"o":[[-72.792,0],[-72.79,0],[-66.414,0],[-72.792,0],[0,0],[0,0],[0,0],[-93.633,0]],"v":[[215.598,-42.474],[90.391,-9.811],[-51.147,-54.45],[-192.685,10.876],[-334.222,-16.907],[-334.222,157.856],[373.467,157.856],[373.467,-95.822]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.5,0.5,0.5,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[334.472,96.072],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":51,"op":351,"st":51,"bm":0},{"ddd":0,"ind":4,"ty":2,"nm":"GRADIENT","tt":1,"refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.264,"y":1},"o":{"x":0.333,"y":0},"t":51,"s":[556.864,118.178,0],"to":[0,47.833,0],"ti":[0,-47.833,0]},{"i":{"x":0.667,"y":0.667},"o":{"x":0.167,"y":0.167},"t":117,"s":[556.864,405.178,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.489,"y":1},"o":{"x":0.523,"y":0},"t":195,"s":[556.864,405.178,0],"to":[0,-47.833,0],"ti":[0,47.833,0]},{"t":240,"s":[556.864,118.178,0]}],"ix":2},"a":{"a":0,"k":[354.094,127.089,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":51,"op":351,"st":51,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"CARD Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[540.025,374.987,0],"ix":2},"a":{"a":0,"k":[422.685,290.947,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-1.93,0],[0,-2.069],[0,0],[0,0],[0,0],[2.913,0],[0.66,-1.513],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,-2.273],[1.883,0],[0,0],[0,0],[0,0],[0,-3.528],[-2.143,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[12.279,0.91],[15.6,-2.663],[18.624,0.64],[18.624,9.372],[21.401,9.372],[21.401,0.307],[16.547,-5.067],[12.342,-2.561],[12.168,-2.561],[12.168,-4.88],[9.505,-4.88],[9.505,9.372],[12.279,9.372]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[1.559,0],[0,1.94],[0,0],[0,0],[0,0],[-2.739,0],[-0.657,1.522],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0.009,2.421],[-1.718,0],[0,0],[0,0],[0,0],[0,3.534],[2.143,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[2.992,3.462],[-0.357,7.033],[-3.262,3.85],[-3.262,-4.88],[-6.036,-4.88],[-6.036,4.185],[-1.359,9.557],[2.898,6.903],[3.049,6.903],[3.049,9.372],[5.777,9.372],[5.777,-4.88],[2.992,-4.88]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[1.818,0],[0.011,1.579],[0,0],[-3.221,0],[-0.011,3.656],[0,0]],"o":[[0,0],[-0.009,2.19],[-1.681,0],[0,0],[0,3.212],[3.488,0],[0,0],[0,0]],"v":[[-12.845,-9.631],[-12.845,3.841],[-15.693,7.201],[-18.552,4.62],[-21.401,4.62],[-15.767,9.631],[-9.986,3.841],[-9.986,-9.631]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"gr","it":[{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":0,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"mm","mm":4,"nm":"Merge Paths 2","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.999998803232,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[743.399,504.769],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":7,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.834,0],[-0.825,2.245],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[1.522,0.418],[0,0]],"o":[[2.293,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.704,1.892],[0,0],[0.333,0.148]],"v":[[14.445,12.174],[19.01,8.732],[24.904,-7.396],[21.904,-7.423],[18.297,3.637],[18.148,3.637],[14.539,-7.423],[11.568,-7.423],[16.784,7.013],[16.44,7.961],[13.22,9.595],[12.552,11.867]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[2.311,0],[0,1.372],[-1.604,0.214],[-0.398,0.401],[0,0]],"o":[[-1.568,0],[0,-1.485],[0.902,-0.122],[0,0],[0,1.69]],"v":[[3.076,4.917],[0.375,2.84],[3.297,0.612],[6.732,-0.15],[6.732,1.688]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[-2.709,0],[-0.53,1.067],[0,0],[0,0],[0,0],[0,0],[2.264,0],[0.928,-2.598],[0,0],[-1.864,0],[0,-1.613],[0,0],[2.561,-0.299],[0,-3.24]],"o":[[2.356,0],[0,0],[0,0],[0,0],[0,0],[0,-4.146],[-2.579,0],[0,0],[0.409,-1.01],[1.792,0],[0,0],[0,1.012],[-2.7,0.313],[0,2.802]],"v":[[2.472,7.144],[6.686,4.88],[6.797,4.88],[6.797,6.829],[9.505,6.829],[9.505,-2.636],[3.975,-7.61],[-1.906,-3.971],[0.701,-3.379],[4.013,-5.363],[6.724,-2.813],[6.724,-2.747],[3.121,-1.456],[-2.344,2.803]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-24.904,-12.174],[-24.904,6.829],[-22.174,6.829],[-22.174,-6.933],[-21.999,-6.933],[-16.393,6.8],[-14.13,6.8],[-8.526,-6.922],[-8.349,-6.922],[-8.349,6.829],[-5.622,6.829],[-5.622,-12.174],[-9.101,-12.174],[-15.15,2.598],[-15.375,2.598],[-21.424,-12.174]],"c":true},"ix":2},"nm":"Path 4","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"gr","it":[{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":0,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false},{"ty":"mm","mm":4,"nm":"Merge Paths 2","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.999998803232,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[616.064,507.312],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":8,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[-1.966,0],[-0.222,-0.065],[0,0],[0.352,0],[0.518,-1.531],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,-1.866],[0.575,0],[0,0],[-0.279,-0.037],[-1.67,0],[0,0],[0,0],[0,0],[0,0]],"v":[[14.006,6.828],[16.78,6.828],[16.78,-1.876],[20.186,-5.087],[21.634,-4.92],[21.634,-7.574],[20.455,-7.637],[16.837,-5.161],[16.689,-5.161],[16.689,-7.424],[14.006,-7.424]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,2.998],[-2.421,0],[0,-2.829],[2.478,0]],"o":[[0,-2.979],[2.515,0],[0,2.859],[-2.384,0]],"v":[[0.596,-0.299],[4.317,-5.253],[8.095,-0.299],[4.317,4.74]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[-2.598,0],[0,4.612],[3.442,0],[0.492,-0.882],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0.501,0.908],[3.451,0],[0,-4.62],[-2.646,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-2.121,12.174],[0.653,12.174],[0.653,4.611],[0.82,4.611],[4.941,7.107],[10.898,-0.271],[4.913,-7.611],[0.82,-5.113],[0.587,-5.113],[0.587,-7.424],[-2.121,-7.424]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-16.009,-0.615],[-13.207,-8.724],[-13.059,-8.724],[-10.257,-0.615]],"c":true},"ix":2},"nm":"Path 4","mn":"ADBE Vector Shape - Group","hd":false},{"ind":4,"ty":"sh","ix":5,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-18.59,6.828],[-16.845,1.798],[-9.423,1.798],[-7.686,6.828],[-4.642,6.828],[-11.483,-12.175],[-14.795,-12.175],[-21.634,6.828]],"c":true},"ix":2},"nm":"Path 5","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"gr","it":[{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":0,"cix":2,"bm":0,"ix":7,"mn":"ADBE Vector Group","hd":false},{"ty":"mm","mm":4,"nm":"Merge Paths 2","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.999998803232,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[486.979,507.312],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":9,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[-1.969,0],[-0.222,-0.065],[0,0],[0.352,0],[0.52,-1.531],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,-1.866],[0.575,0],[0,0],[-0.277,-0.037],[-1.67,0],[0,0],[0,0],[0,0],[0,0]],"v":[[15.24,9.343],[18.014,9.343],[18.014,0.639],[21.42,-2.572],[22.866,-2.405],[22.866,-5.059],[21.688,-5.122],[18.069,-2.646],[17.921,-2.646],[17.921,-4.909],[15.24,-4.909]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[2.311,0],[0,1.372],[-1.607,0.214],[-0.399,0.401],[0,0]],"o":[[-1.567,0],[0,-1.485],[0.899,-0.122],[0,0],[0,1.69]],"v":[[5.112,7.431],[2.412,5.354],[5.337,3.126],[8.769,2.365],[8.769,4.202]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[-2.709,0],[-0.529,1.067],[0,0],[0,0],[0,0],[0,0],[2.262,0],[0.928,-2.598],[0,0],[-1.866,0],[0,-1.614],[0,0],[2.561,-0.299],[0,-3.24]],"o":[[2.359,0],[0,0],[0,0],[0,0],[0,0],[0,-4.146],[-2.58,0],[0,0],[0.409,-1.01],[1.79,0],[0,0],[0,1.013],[-2.7,0.313],[0,2.802]],"v":[[4.509,9.659],[8.723,7.394],[8.834,7.394],[8.834,9.343],[11.543,9.343],[11.543,-0.122],[6.014,-5.096],[0.13,-1.457],[2.737,-0.865],[6.051,-2.849],[8.76,-0.299],[8.76,-0.234],[5.16,1.059],[-0.305,5.318]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-22.866,-9.66],[-22.866,9.343],[-20.138,9.343],[-20.138,-4.419],[-19.961,-4.419],[-14.357,9.315],[-12.092,9.315],[-6.487,-4.408],[-6.311,-4.408],[-6.311,9.343],[-3.584,9.343],[-3.584,-9.66],[-7.064,-9.66],[-13.113,5.112],[-13.335,5.112],[-19.387,-9.66]],"c":true},"ix":2},"nm":"Path 4","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"gr","it":[{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":0,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false},{"ty":"mm","mm":4,"nm":"Merge Paths 2","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.999998803232,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[361.402,504.797],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":8,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,2.998],[-2.421,0],[0,-2.829],[2.478,0]],"o":[[0,-2.979],[2.515,0],[0,2.859],[-2.384,0]],"v":[[11.008,2.231],[14.729,-2.723],[18.507,2.231],[14.729,7.27]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[-2.598,0],[0,4.612],[3.442,0],[0.492,-0.882],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0.501,0.908],[3.452,0],[0,-4.62],[-2.646,0],[0,0],[0,0],[0,0],[0,0]],"v":[[8.291,9.358],[10.999,9.358],[10.999,7.141],[11.232,7.141],[15.352,9.637],[21.31,2.259],[15.324,-5.081],[11.232,-2.583],[11.065,-2.583],[11.065,-9.645],[8.291,-9.645]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[-2.256,0],[-0.009,-2.18]],"o":[[0.111,-2.023],[2.151,0],[0,0]],"v":[[-5.134,0.988],[-1.301,-2.788],[2.27,0.988]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[-4.205,0],[-0.631,2.319],[0,0],[1.579,0],[0.077,2.746],[0,0],[0,0],[3.229,0],[0,-4.379]],"o":[[3.107,0],[0,0],[-0.501,1.346],[-2.376,0],[0,0],[0,0],[0,-5.15],[-3.972,0],[0,4.426]],"v":[[-1.125,9.645],[4.813,5.796],[2.187,5.321],[-1.099,7.355],[-5.145,3.067],[4.989,3.067],[4.989,2.083],[-1.321,-5.081],[-7.908,2.325]],"c":true},"ix":2},"nm":"Path 4","mn":"ADBE Vector Shape - Group","hd":false},{"ind":4,"ty":"sh","ix":5,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-21.31,9.358],[-18.443,9.358],[-18.443,1.073],[-10.371,1.073],[-10.371,-1.388],[-18.443,-1.388],[-18.443,-7.178],[-9.526,-7.178],[-9.526,-9.645],[-21.31,-9.645]],"c":true},"ix":2},"nm":"Path 5","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"gr","it":[{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":0,"cix":2,"bm":0,"ix":7,"mn":"ADBE Vector Group","hd":false},{"ty":"mm","mm":4,"nm":"Merge Paths 2","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.999998803232,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[233.662,504.783],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":9,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-1.932,0],[0,-2.069],[0,0],[0,0],[0,0],[2.913,0],[0.66,-1.513],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,-2.273],[1.883,0],[0,0],[0,0],[0,0],[0,-3.528],[-2.143,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[11.947,0.881],[15.27,-2.692],[18.294,0.611],[18.294,9.343],[21.068,9.343],[21.068,0.278],[16.215,-5.096],[12.012,-2.59],[11.836,-2.59],[11.836,-4.909],[9.173,-4.909],[9.173,9.343],[11.947,9.343]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[2.311,0],[0,1.371],[-1.605,0.213],[-0.399,0.401],[0,0]],"o":[[-1.567,0],[0,-1.485],[0.899,-0.122],[0,0],[0,1.689]],"v":[[-0.953,7.431],[-3.653,5.354],[-0.73,3.126],[2.704,2.364],[2.704,4.202]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[-2.709,0],[-0.529,1.067],[0,0],[0,0],[0,0],[0,0],[2.264,0],[0.93,-2.597],[0,0],[-1.864,0],[0,-1.614],[0,0],[2.561,-0.298],[0,-3.241]],"o":[[2.356,0],[0,0],[0,0],[0,0],[0,0],[0,-4.146],[-2.578,0],[0,0],[0.407,-1.011],[1.792,0],[0,0],[0,1.013],[-2.7,0.314],[0,2.802]],"v":[[-1.556,9.66],[2.658,7.395],[2.769,7.395],[2.769,9.343],[5.478,9.343],[5.478,-0.123],[-0.053,-5.096],[-5.937,-1.458],[-3.328,-0.865],[-0.016,-2.849],[2.695,-0.299],[2.695,-0.234],[-0.907,1.057],[-6.372,5.317]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[1.818,0],[0.009,1.579],[0,0],[-3.221,0],[-0.011,3.656],[0,0]],"o":[[0,0],[-0.009,2.19],[-1.679,0],[0,0],[0,3.212],[3.488,0],[0,0],[0,0]],"v":[[-12.513,-9.66],[-12.513,3.812],[-15.361,7.172],[-18.218,4.591],[-21.068,4.591],[-15.435,9.603],[-9.654,3.812],[-9.654,-9.66]],"c":true},"ix":2},"nm":"Path 4","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"gr","it":[{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":0,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false},{"ty":"mm","mm":4,"nm":"Merge Paths 2","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.999998803232,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[107.759,504.798],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":8,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.601,0],[0,0],[0,-0.602],[0.601,0],[0,0],[0,0.601]],"o":[[0,0],[0.601,0],[0,0.601],[0,0],[-0.601,0],[0,-0.602]],"v":[[-352.756,-1.089],[352.755,-1.089],[353.844,0.001],[352.755,1.089],[-352.756,1.089],[-353.845,0.001]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.999998803232,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[442.283,197.314],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 7","np":4,"cix":2,"bm":0,"ix":7,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.601,0],[0,0],[0,-0.601],[0.601,0],[0,0],[0,0.601]],"o":[[0,0],[0.601,0],[0,0.601],[0,0],[-0.601,0],[0,-0.601]],"v":[[-352.756,-1.089],[352.755,-1.089],[353.844,0],[352.755,1.089],[-352.756,1.089],[-353.845,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.999998803232,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[442.283,449.905],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 8","np":4,"cix":2,"bm":0,"ix":8,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.601,0],[0,0],[0,-0.602],[0.601,0],[0,0],[0,0.601]],"o":[[0,0],[0.601,0],[0,0.601],[0,0],[-0.601,0],[0,-0.602]],"v":[[-352.756,-1.089],[352.755,-1.089],[353.844,0.001],[352.755,1.089],[-352.756,1.089],[-353.845,0.001]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.999998803232,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[442.283,323.609],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 9","np":4,"cix":2,"bm":0,"ix":9,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[2.134,0],[0,3.959],[-2.136,0],[0,-3.943]],"o":[[-2.143,0],[0.007,-3.943],[2.125,0],[0,3.959]],"v":[[0.004,6.094],[-3.43,-0.016],[0.004,-6.133],[3.429,-0.016]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[-3.667,-0.008],[0,5.189],[3.626,0],[0.006,-5.156]],"o":[[3.656,0],[0,-5.15],[-3.636,0],[0,5.18]],"v":[[0.004,8.158],[5.803,-0.016],[0.004,-8.158],[-5.803,-0.016]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.999998803232,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[56.277,438.743],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 10","np":6,"cix":2,"bm":0,"ix":10,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[2.134,0],[0,3.959],[-2.134,0],[0,-3.943]],"o":[[-2.143,0],[0.009,-3.943],[2.125,0],[0,3.959]],"v":[[6.59,6.094],[3.156,-0.016],[6.59,-6.133],[10.015,-0.016]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[-3.667,-0.008],[0,5.189],[3.626,0],[0.006,-5.156]],"o":[[3.656,0],[0,-5.15],[-3.634,0],[0,5.18]],"v":[[6.59,8.158],[12.389,-0.016],[6.59,-8.158],[0.783,-0.016]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[-2.907,0],[0.007,3.086],[2.883,0],[0.618,-0.603],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.958,0],[0,-1.931],[1.818,0],[0.122,1.361],[0,0]],"o":[[3.186,0],[0.007,-3.061],[-1.176,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.597,-0.534],[1.879,0.015],[0,1.903],[-1.531,0],[0,0],[0.094,2.52]],"v":[[-7.2,8.11],[-1.748,2.775],[-6.758,-2.514],[-9.643,-1.462],[-9.737,-1.462],[-9.234,-5.893],[-2.514,-5.893],[-2.514,-7.942],[-11.22,-7.942],[-12.11,0.038],[-9.922,0.363],[-7.3,-0.534],[-4.06,2.821],[-7.2,6.101],[-10.068,3.766],[-12.389,3.766]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.999998803232,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[63.194,312.448],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 11","np":7,"cix":2,"bm":0,"ix":11,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[2.134,0],[0,3.959],[-2.134,0],[0,-3.943]],"o":[[-2.141,0],[0.009,-3.943],[2.127,0],[0,3.959]],"v":[[12.166,6.094],[8.732,-0.016],[12.166,-6.133],[15.59,-0.016]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[-3.665,-0.008],[0,5.189],[3.628,0],[0.009,-5.156]],"o":[[3.658,0],[0,-5.15],[-3.634,0],[0,5.18]],"v":[[12.166,8.158],[17.967,-0.016],[12.166,-8.158],[6.357,-0.016]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[2.134,0],[0,3.959],[-2.134,0],[0,-3.943]],"o":[[-2.143,0],[0.009,-3.943],[2.128,0],[0,3.959]],"v":[[-1.891,6.094],[-5.325,-0.016],[-1.891,-6.133],[1.535,-0.016]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[-3.665,-0.008],[0,5.189],[3.628,0],[0.008,-5.156]],"o":[[3.658,0],[0,-5.15],[-3.634,0],[0,5.18]],"v":[[-1.891,8.158],[3.909,-0.016],[-1.891,-8.158],[-7.698,-0.016]],"c":true},"ix":2},"nm":"Path 4","mn":"ADBE Vector Shape - Group","hd":false},{"ind":4,"ty":"sh","ix":5,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-11.687,-7.942],[-14.015,-7.942],[-17.967,-5.36],[-17.967,-3.071],[-14.178,-5.545],[-14.085,-5.545],[-14.085,7.895],[-11.687,7.895]],"c":true},"ix":2},"nm":"Path 5","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.999998803232,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[68.463,186.153],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 12","np":9,"cix":2,"bm":0,"ix":12,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[18.718,-9.668],[16.53,-9.668],[16.53,9.335],[18.718,9.335]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[2.598,0],[0,1.522],[-1.707,0.224],[-0.37,0.446],[0,0]],"o":[[-1.747,0],[0,-1.67],[0.927,-0.111],[0,0],[0,1.781]],"v":[[6.335,7.702],[3.328,5.4],[6.557,2.988],[10.341,2.172],[10.341,4.176]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[-2.708,0],[-0.444,0.928],[0,0],[0,0],[0,0],[0,0],[1.819,0],[1.113,-2.598],[0,0],[-2.088,0],[0,-1.827],[0,0],[2.598,-0.335],[0,-3.266]],"o":[[2.487,0],[0,0],[0,0],[0,0],[0,0],[0,-4.529],[-2.153,0],[0,0],[0.483,-1.038],[2.012,0],[0,0],[0,1.058],[-2.646,0.344],[0,2.783]],"v":[[5.999,9.668],[10.23,7.405],[10.341,7.405],[10.341,9.336],[12.532,9.336],[12.532,-0.054],[7.262,-5.103],[1.546,-1.763],[3.624,-1.022],[7.336,-3.173],[10.341,-0.278],[10.341,-0.204],[6.668,1.095],[1.137,5.29]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-1.857,0],[-0.298,0.111],[0,0],[0.481,0],[0,1.855],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,2.487],[0.817,0],[0,0],[-0.185,0.039],[-0.964,0],[0,0],[0,0],[0,0]],"v":[[-1.489,-4.916],[-4.533,-4.916],[-4.533,-8.333],[-6.722,-8.333],[-6.722,-4.916],[-8.875,-4.916],[-8.875,-3.061],[-6.722,-3.061],[-6.722,5.847],[-2.861,9.521],[-1.228,9.262],[-1.674,7.293],[-2.639,7.405],[-4.533,5.253],[-4.533,-3.061],[-1.489,-3.061]],"c":true},"ix":2},"nm":"Path 4","mn":"ADBE Vector Shape - Group","hd":false},{"ind":4,"ty":"sh","ix":5,"ks":{"a":0,"k":{"i":[[2.931,0],[0,2.859],[-2.933,0],[0,-2.857]],"o":[[-2.933,0],[0,-2.857],[2.931,0],[0,2.859]],"v":[[-17.487,7.665],[-21.757,2.283],[-17.487,-3.135],[-13.219,2.283]],"c":true},"ix":2},"nm":"Path 5","mn":"ADBE Vector Shape - Group","hd":false},{"ind":5,"ty":"sh","ix":6,"ks":{"a":0,"k":{"i":[[-3.861,0],[0,4.418],[3.858,0],[0,-4.453]],"o":[[3.858,0],[0,-4.453],[-3.861,0],[0,4.418]],"v":[[-17.487,9.632],[-11.031,2.283],[-17.487,-5.103],[-23.946,2.283]],"c":true},"ix":2},"nm":"Path 6","mn":"ADBE Vector Shape - Group","hd":false},{"ind":6,"ty":"sh","ix":7,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-38.718,-7.627],[-32.743,-7.627],[-32.743,9.336],[-30.441,9.336],[-30.441,-7.627],[-24.466,-7.627],[-24.466,-9.668],[-38.718,-9.668]],"c":true},"ix":2},"nm":"Path 7","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"gr","it":[{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":0,"cix":2,"bm":0,"ix":9,"mn":"ADBE Vector Group","hd":false},{"ty":"mm","mm":4,"nm":"Merge Paths 2","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.999998803232,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[783.647,67.128],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 13","np":11,"cix":2,"bm":0,"ix":13,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[6.681,0],[-0.02,-5.27],[-5.474,-1.133],[0,0],[0,-1.616],[3.192,0],[0.575,2.561],[0,0],[-6.999,0],[-0.018,5.4],[5.381,1.17],[0,0],[-0.018,1.651],[-2.803,0],[-0.521,-1.875]],"o":[[-0.928,-4.825],[-6.866,0],[-0.02,4.156],[0,0],[2.618,0.577],[0,1.948],[-3.081,0],[0,0],[0.836,5.232],[7.124,0],[-0.018,-4.066],[0,0],[-2.896,-0.649],[-0.018,-1.931],[3.098,0],[0,0]],"v":[[97.083,-6.692],[85.614,-14.596],[74.091,-5.948],[82.106,2.089],[86.968,3.107],[90.812,6.357],[85.503,9.771],[79.844,5.872],[73.292,6.505],[85.523,14.838],[97.695,5.745],[89.679,-1.977],[84.817,-3.016],[80.789,-6.32],[85.708,-9.586],[90.96,-6.023]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[4.287,0],[0,5.252],[-4.473,0],[0,-5.4]],"o":[[-4.436,0],[0,-5.178],[4.324,0],[0,5.437]],"v":[[54.343,8.602],[47.571,-0.102],[54.343,-9.084],[61.043,-0.102]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[-7.258,0],[0,7.293],[0,0],[0,0],[0,0],[0,0],[5.03,0],[0,-9.372],[-6.569,0],[-1.041,2.097],[0,0],[0,0],[3.823,0],[0.817,1.67],[0,0]],"o":[[7.701,0],[0,0],[0,0],[0,0],[0,0],[-1.021,-2.06],[-6.587,0],[0,9.298],[4.88,0],[0,0],[0,0],[0,4.194],[-4.046,0],[0,0],[1.226,3.989]],"v":[[54.289,25.563],[67.669,14.744],[67.669,-14.226],[61.043,-14.226],[61.043,-9.511],[60.673,-9.511],[52.488,-14.596],[40.723,-0.065],[52.47,13.87],[60.673,9.159],[61.006,9.159],[61.006,14.558],[54.4,20.479],[47.756,16.898],[41.705,18.362]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[0,0],[-3.545,0],[0,-3.804],[0,0],[0,0],[0,0],[5.884,0],[1.297,-3.175],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,-4.12],[3.469,0],[0,0],[0,0],[0,0],[0.02,-6.831],[-4.268,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[16.764,-2.422],[22.795,-8.917],[28.344,-2.831],[28.344,14.279],[35.061,14.279],[35.061,-3.87],[25.299,-14.596],[16.801,-9.38],[16.465,-9.38],[16.465,-14.226],[10.046,-14.226],[10.046,14.279],[16.764,14.279]],"c":true},"ix":2},"nm":"Path 4","mn":"ADBE Vector Shape - Group","hd":false},{"ind":4,"ty":"sh","ix":5,"ks":{"a":0,"k":{"i":[[-2.153,0],[0,2.003],[2.134,0],[0,-2.023]],"o":[[2.134,0],[0,-2.023],[-2.153,0],[0,2.003]],"v":[[-0.204,-18.271],[3.675,-21.907],[-0.204,-25.563],[-4.101,-21.907]],"c":true},"ix":2},"nm":"Path 5","mn":"ADBE Vector Shape - Group","hd":false},{"ind":5,"ty":"sh","ix":6,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-3.581,14.279],[3.137,14.279],[3.137,-14.227],[-3.581,-14.227]],"c":true},"ix":2},"nm":"Path 6","mn":"ADBE Vector Shape - Group","hd":false},{"ind":6,"ty":"sh","ix":7,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-8.23,-14.226],[-15.374,-14.226],[-21.944,6.951],[-22.242,6.951],[-28.792,-14.226],[-35.956,-14.226],[-25.804,14.279],[-18.381,14.279]],"c":true},"ix":2},"nm":"Path 7","mn":"ADBE Vector Shape - Group","hd":false},{"ind":7,"ty":"sh","ix":8,"ks":{"a":0,"k":{"i":[[4.046,0],[0,2.468],[-3.007,0.426],[-0.871,0.706],[0,0]],"o":[[-2.802,0],[0,-2.58],[1.764,-0.242],[0,0],[0,3.173]],"v":[[-52.734,9.919],[-57.539,6.171],[-52.287,2.089],[-46.127,0.695],[-46.127,4.055]],"c":true},"ix":2},"nm":"Path 8","mn":"ADBE Vector Shape - Group","hd":false},{"ind":8,"ty":"sh","ix":9,"ks":{"a":0,"k":{"i":[[-5.437,0],[-1.225,2.393],[0,0],[0,0],[0,0],[0,0],[5.437,0],[1.483,-5.196],[0,0],[-3.286,0],[0,-2.802],[0,0],[5.03,-0.54],[0,-6.422]],"o":[[4.473,0],[0,0],[0,0],[0,0],[0,0],[0,-7.536],[-5.995,0],[0,0],[0.668,-1.949],[3.118,0],[0,0],[0,1.932],[-5.529,0.592],[0,5.604]],"v":[[-54.478,14.854],[-46.108,10.365],[-45.885,10.365],[-45.885,14.279],[-39.427,14.279],[-39.427,-4.797],[-51.007,-14.596],[-63.088,-6.729],[-56.816,-5.838],[-50.97,-9.456],[-46.144,-5.058],[-46.144,-4.948],[-53.197,-2.385],[-64.015,6.283]],"c":true},"ix":2},"nm":"Path 9","mn":"ADBE Vector Shape - Group","hd":false},{"ind":9,"ty":"sh","ix":10,"ks":{"a":0,"k":{"i":[[-0.353,-3.229],[0,0],[8.091,0],[-0.017,-6.72],[-6.256,-1.614],[0,0],[-0.019,-2.95],[4.49,0],[0.278,3.99],[0,0],[-8.852,0],[-0.019,6.7],[5.716,1.354],[0,0],[-0.037,3.173],[-4.307,0]],"o":[[0,0],[-0.131,-6.421],[-7.981,0],[0,5.454],[0,0],[4.103,1.041],[-0.019,3.247],[-4.304,0],[0,0],[0.279,7.552],[9.113,0],[-0.019,-6.587],[0,0],[-3.118,-0.742],[0.017,-2.859],[4.1,0]],"v":[[-75.667,-13.279],[-69.041,-13.279],[-82.737,-24.247],[-96.693,-13.036],[-86.559,-2.831],[-82.237,-1.719],[-75.406,3.554],[-82.997,8.971],[-90.92,3.052],[-97.695,3.052],[-82.942,14.854],[-68.521,3.609],[-79.693,-7.341],[-83.256,-8.232],[-89.714,-13.464],[-82.829,-18.419]],"c":true},"ix":2},"nm":"Path 10","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"gr","it":[{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":0,"cix":2,"bm":0,"ix":12,"mn":"ADBE Vector Group","hd":false},{"ty":"mm","mm":4,"nm":"Merge Paths 2","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.999998803232,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[130.805,102.467],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 14","np":14,"cix":2,"bm":0,"ix":14,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-24.052,0],[0,0],[0,-24.052],[0,0],[24.052,0],[0,0],[0,24.053],[0,0]],"o":[[0,0],[24.052,0],[0,0],[0,24.053],[0,0],[-24.052,0],[0,0],[0,-24.052]],"v":[[-378.885,-290.697],[378.885,-290.697],[422.435,-247.146],[422.435,247.147],[378.885,290.697],[-378.885,290.697],[-422.435,247.147],[-422.435,-247.146]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gr","it":[{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":0,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"mm","mm":4,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.00784313725490196,0.23921568627450981,0.996078431372549,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[422.685,290.947],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 15","np":4,"cix":2,"bm":0,"ix":15,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0}],"markers":[]}');
// EXTERNAL MODULE: ./utils/BaseUrl.js
var BaseUrl = __webpack_require__(392);
;// CONCATENATED MODULE: ./pages/efficiency/index.js








// /api/efficiency-pages
async function getStaticProps() {
    try {
        const res = await fetch(`${BaseUrl/* BaseUrl */.J}/efficiency-pages?populate[0]=sec1Bg,sec2Bg,sec2Elements,sec3Bg,seo`);
        const response = await res.json();
        console.log(response);
        var data = response.data[0].attributes;
        return {
            props: {
                data
            },
            revalidate: 1
        };
    } catch (e) {
        console.log(e);
    }
}
function Efficiency(props) {
    const pageData = props.data;
    // console.log(pageData)
    const guthen = "Guthen Bloots Personal Use";
    const chartOptions = {
        loop: true,
        autoplay: true,
        animationData: chart_namespaceObject,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "overflow-x-hidden",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: pageData.seo.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: pageData.seo.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "https://ik.imagekit.io/jason7531/syncrow/common/Group_1_rkAObjd65.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642343317149"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("style", {
                        children: "@import url(https://fonts.cdnfonts.com/css/guthen-bloots-personal-use);"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "h-screen bg-cover bg-center tablet:px-8 middle:block hidden",
                        style: {
                            backgroundImage: `url('${pageData.sec1Bg.data.attributes.url}')`
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(header/* default */.Z, {
                                color: "black"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        "data-aos": "fade-up",
                                        className: "pt-52 flex-1 z-0 medium:mx-16 mx-4",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-col items-start",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    initial: "hidden",
                                                    whileinview: "visible",
                                                    viewport: {
                                                        once: false
                                                    },
                                                    transition: {
                                                        duration: 0.4
                                                    },
                                                    variants: {
                                                        visible: {
                                                            opacity: 1,
                                                            scale: 1
                                                        },
                                                        hidden: {
                                                            opacity: 0,
                                                            scale: 0
                                                        }
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "text-black text-7xl font-normal",
                                                        style: {
                                                            fontFamily: "Guthen Bloots Personal Use"
                                                        },
                                                        children: pageData.sec1Heading1
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    initial: "hidden",
                                                    whileinview: "visible",
                                                    viewport: {
                                                        once: false
                                                    },
                                                    transition: {
                                                        duration: 0.4
                                                    },
                                                    variants: {
                                                        visible: {
                                                            opacity: 1,
                                                            scale: 1
                                                        },
                                                        hidden: {
                                                            opacity: 0,
                                                            scale: 0
                                                        }
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "text-default text-7xl font-normal leading-10",
                                                        style: {
                                                            fontFamily: "Guthen Bloots Personal Use"
                                                        },
                                                        children: pageData.sec1Heading2
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        "data-aos": "fade-up",
                                        className: "pt-52 flex-1",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: " flex items-end justify-end",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                initial: "hidden",
                                                whileinview: "visible",
                                                viewport: {
                                                    once: false
                                                },
                                                transition: {
                                                    duration: 0.4
                                                },
                                                variants: {
                                                    visible: {
                                                        opacity: 1,
                                                        scale: 1
                                                    },
                                                    hidden: {
                                                        opacity: 0,
                                                        scale: 0
                                                    }
                                                },
                                                className: "w-3/5 font-[aftika-light] tracking-wide leading-7 text-base text-black mr-4",
                                                children: [
                                                    pageData.sec1Desc1,
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    pageData.sec1Desc2
                                                ]
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col items-center justify-center medium:mt-80 mt-44",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        "data-aos": "fade-up",
                                        initial: "hidden",
                                        whileinview: "visible",
                                        viewport: {
                                            once: false
                                        },
                                        transition: {
                                            duration: 0.4
                                        },
                                        variants: {
                                            visible: {
                                                opacity: 1,
                                                scale: 1
                                            },
                                            hidden: {
                                                opacity: 0,
                                                scale: 0
                                            }
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-black text-7xl font-normal leading-tight",
                                            style: {
                                                fontFamily: "Guthen Bloots Personal Use"
                                            },
                                            children: pageData.sec2Heading1
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        "data-aos": "fade-up",
                                        initial: "hidden",
                                        whileinview: "visible",
                                        viewport: {
                                            once: false
                                        },
                                        transition: {
                                            duration: 0.4
                                        },
                                        variants: {
                                            visible: {
                                                opacity: 1,
                                                scale: 1
                                            },
                                            hidden: {
                                                opacity: 0,
                                                scale: 0
                                            }
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-default text-7xl font-normal leading-tight",
                                            style: {
                                                fontFamily: "Guthen Bloots Personal Use"
                                            },
                                            children: pageData.sec2Heading2
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        "data-aos": "fade-up",
                        className: "middle:hidden h-96 object-fill block bg-cover bg-center ",
                        style: {
                            backgroundImage: `url('${pageData.sec1Bg.data.attributes.url}')`
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(header/* default */.Z, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        "data-aos": "fade-up",
                        className: "flex flex-col relative -z-10 items-center justify-center middle:hidden",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-5xl text-center font-guthen text-[#000] tablet:mt-0",
                                children: pageData.sec1Heading1
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-5xl text-center font-guthen text-blue-700 tablet:mt-0",
                                children: pageData.sec1Heading2
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: " font-[aftika-light] tracking-wide leading-7 text-base text-black w-4/5 tablet:w-3/6 text-center mt-8",
                                children: [
                                    pageData.sec1Desc1,
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    pageData.sec1Desc2
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        "data-aos": "fade-up",
                        className: "mx-8 tablet:mx-16 flex flex-col items-center justify-center middle:hidden mt-10",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-5xl tablet:text-left font-guthen text-center",
                                children: pageData.sec2Heading1
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-5xl tablet:flex text-blue-700 font-guthen text-center",
                                children: pageData.sec2Heading2
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex middle:flex-row flex-col-reverse middle:mt-60 mt-10 tablet:mx-16 mx-8 items-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex-1 middle:mt-0 mt-6",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                "data-aos": "fade-up",
                                initial: "hidden",
                                whileinview: "visible",
                                viewport: {
                                    once: false
                                },
                                transition: {
                                    duration: 0.4
                                },
                                variants: {
                                    visible: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    hidden: {
                                        opacity: 0,
                                        scale: 0
                                    }
                                },
                                className: "middle:text-left text-center middle:block hidden",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-default text-6xl font-normal leading-3",
                                    style: {
                                        fontFamily: "Guthen Bloots Personal Use"
                                    },
                                    children: pageData.sec2Heading3
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                "data-aos": "fade-up",
                                className: "middle:hidden block text-default font-guthen text-6xl text-center leading-10",
                                children: pageData.sec2Heading3
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                "data-aos": "fade-up",
                                initial: "hidden",
                                whileinview: "visible",
                                viewport: {
                                    once: false
                                },
                                transition: {
                                    duration: 0.4
                                },
                                variants: {
                                    visible: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    hidden: {
                                        opacity: 0,
                                        scale: 0
                                    }
                                },
                                className: "text-4xl capitalize font-semibold middle:text-left text-center",
                                children: pageData.sec2Heading4
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                "data-aos": "fade-up",
                                className: "list-disc ml-6 mt-4 marker:text-default",
                                children: pageData.sec2Elements.map((element, index)=>{
                                    return(/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        initial: "hidden",
                                        whileinview: "visible",
                                        viewport: {
                                            once: false
                                        },
                                        transition: {
                                            duration: 0.4
                                        },
                                        variants: {
                                            visible: {
                                                opacity: 1,
                                                scale: 1
                                            },
                                            hidden: {
                                                opacity: 0,
                                                scale: 0
                                            }
                                        },
                                        className: "laptop:mb-0 mb-4 font-[aftika-light] tracking-wide leading-7 text-base",
                                        children: element.elementData
                                    }, index));
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        "data-aos": "fade-up",
                        className: "flex-1",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: pageData.sec2Bg.data.attributes.url,
                            height: "80%",
                            width: "80%",
                            alt: pageData.sec2BgAlt
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex tablet:mt-0 -mt-36 ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        "data-aos": "fade-up",
                        className: "flex-1 flex items-center justify-end ",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: pageData.sec3Bg.data.attributes.url,
                            className: "w-11/12 middle:w-9/12",
                            alt: pageData.sec3BgAlt
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        "data-aos": "fade-up",
                        className: "flex-1 mt-[480px] tablet:-ml-28 -ml-16 middle:ml-0 middle:mt-56",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                initial: "hidden",
                                whileinview: "visible",
                                viewport: {
                                    once: false
                                },
                                transition: {
                                    duration: 0.4
                                },
                                variants: {
                                    visible: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    hidden: {
                                        opacity: 0,
                                        scale: 0
                                    }
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-default text-5xl tablet:text-6xl font-normal leading-tight",
                                    style: {
                                        fontFamily: "Guthen Bloots Personal Use"
                                    },
                                    children: pageData.sec3Heading
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                initial: "hidden",
                                whileinview: "visible",
                                viewport: {
                                    once: false
                                },
                                transition: {
                                    duration: 0.4
                                },
                                variants: {
                                    visible: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    hidden: {
                                        opacity: 0,
                                        scale: 0
                                    }
                                },
                                className: "text-xl tablet:text-3xl text-black font-semibold leading-8 laptop:ml-0 -ml-10",
                                children: pageData.sec3SubHeading
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                initial: "hidden",
                                whileinview: "visible",
                                viewport: {
                                    once: false
                                },
                                transition: {
                                    duration: 0.4
                                },
                                variants: {
                                    visible: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    hidden: {
                                        opacity: 0,
                                        scale: 0
                                    }
                                },
                                className: "tablet:w-10/12 text-black tablet:mt-8 mt-4 font-[aftika-light] tracking-wide leading-7 text-base middle:text-left text-center laptop:ml-0 -ml-16 w-full",
                                children: pageData.sec3Desc1
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex tablet:mx-16 mx-8 items-center my-10 middle:flex-row flex-col-reverse",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        "data-aos": "fade-up",
                        className: "flex-1 hidden middle:block",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                initial: "hidden",
                                whileinview: "visible",
                                viewport: {
                                    once: false
                                },
                                transition: {
                                    duration: 0.4
                                },
                                variants: {
                                    visible: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    hidden: {
                                        opacity: 0,
                                        scale: 0
                                    }
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-default text-7xl font-normal leading-3",
                                    style: {
                                        fontFamily: "Guthen Bloots Personal Use"
                                    },
                                    children: pageData.sec4Heading
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                initial: "hidden",
                                whileinview: "visible",
                                viewport: {
                                    once: false
                                },
                                transition: {
                                    duration: 0.4
                                },
                                variants: {
                                    visible: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    hidden: {
                                        opacity: 0,
                                        scale: 0
                                    }
                                },
                                className: "text-3xl font-semibold",
                                children: pageData.sec4SubHeading
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                initial: "hidden",
                                whileinview: "visible",
                                viewport: {
                                    once: false
                                },
                                transition: {
                                    duration: 0.4
                                },
                                variants: {
                                    visible: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    hidden: {
                                        opacity: 0,
                                        scale: 0
                                    }
                                },
                                className: "mt-6 w-4/5 font-[aftika-light] tracking-wide leading-7 text-base text-black",
                                children: [
                                    pageData.sec4Desc1,
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    pageData.sec4Desc2
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        "data-aos": "fade-up",
                        className: "middle:hidden flex justify-center items-center flex-col",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-default text-5xl tablet:text-7xl font-guthen font-normal leading-10",
                                children: pageData.sec4Heading
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-4xl font-semibold mt-2",
                                children: pageData.sec4SubHeading
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "mt-6 w-4/5 font-[aftika-light] tracking-wide leading-7 text-base text-black text-center",
                                children: [
                                    pageData.sec4Desc1,
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    pageData.sec4Desc2
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        "data-aos": "fade-up",
                        className: "flex-1",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_lottie_default()), {
                            options: chartOptions
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer/* default */.Z, {})
        ]
    }));
};


/***/ }),

/***/ 392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ BaseUrl)
/* harmony export */ });
const BaseUrl = "https://cms.syncrow.ae/api";



/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1189:
/***/ ((module) => {

module.exports = require("react-lottie");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7730,1664,3602,4149], () => (__webpack_exec__(4290)));
module.exports = __webpack_exports__;

})();