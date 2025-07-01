md build
md build\tmp
copy 15.html          build\tmp
copy d2js.js          build\tmp
copy d2js_gl.js       build\tmp
copy index.js         build\tmp
copy model_witch.js   build\tmp
copy model_cat.js     build\tmp
copy model_swan.js    build\tmp
copy model_ground.js  build\tmp
copy package.json     build\tmp
copy texture_witch.js build\tmp

cd build
call electron-packager ./tmp webgl_demo --app-version=0.0.1 --electron-version=24.1.3 --platform=win32 --arch=x64 --overwrite
@echo on
cd ..

pause
