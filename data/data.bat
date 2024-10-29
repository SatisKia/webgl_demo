md tmp
md out

dataurl sample1.png tmp\1.txt png out\sample1.txt
dataurl sample2.png tmp\2.txt png out\sample2.txt

mqo2gl ground.mqo 5 1 texture.txt 99999 > out\ground.txt

pause
