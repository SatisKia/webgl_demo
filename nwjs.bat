md build
md build\tmp
copy icon.ico          build\tmp
copy icon.png          build\tmp
copy 15.html           build\tmp
copy d2js.js           build\tmp
copy d2js_gl.js        build\tmp
copy model_witch.js    build\tmp
copy model_cat.js      build\tmp
copy model_swan.js     build\tmp
copy model_ground.js   build\tmp
copy model_mesh.js     build\tmp
copy texture_witch.js  build\tmp
copy texture_mesh.js   build\tmp
copy nwjs\src\api.js   build\tmp
copy nwjs\package.json build\tmp

set NODE_TLS_REJECT_UNAUTHORIZED=0

cd build\tmp
call npm install --production
@echo on
cd ..
copy ..\nwjs\src\package.json tmp
call nwbuild --glob=false tmp
@echo on
cd ..

pause
