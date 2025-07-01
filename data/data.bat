md tmp
md out

dataurl sample1.png tmp\sample1.txt png out\texture_sample1.txt
dataurl sample2.png tmp\sample2.txt png out\texture_sample2.txt
dataurl mesh.png tmp\mesh.txt png out\texture_mesh.txt

mqo2gl ground.mqo 5 1 dummy.txt 99999 > out\model_ground.txt
mqo2gl mesh.mqo 5 1 texture.txt 99999 > out\model_mesh.txt

pause
