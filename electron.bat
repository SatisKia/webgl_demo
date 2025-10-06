md build
md build\tmp
copy 15.html               build\tmp
copy d2js.js               build\tmp
copy d2js_gl.js            build\tmp
copy model_witch.js        build\tmp
copy model_cat.js          build\tmp
copy model_swan.js         build\tmp
copy model_ground.js       build\tmp
copy model_mesh.js         build\tmp
copy texture_witch.js      build\tmp
copy texture_mesh.js       build\tmp
copy electron\index.js     build\tmp
copy electron\package.json build\tmp

cd build
set NODE_TLS_REJECT_UNAUTHORIZED=0
call electron-packager ./tmp webgl_demo --app-version=0.0.1 --electron-version=24.1.3 --platform=win32 --arch=x64 --overwrite
@echo on
cd ..

pause
