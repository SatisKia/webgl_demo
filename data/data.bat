md tmp
md out

certutil -f -encode sample1.png tmp\1.txt
certutil -f -encode sample2.png tmp\2.txt

type tmp\1.txt | dataurl png > out\sample1.txt
type tmp\2.txt | dataurl png > out\sample2.txt

mqo2gl ground.mqo 5 1 texture.txt 99999 > out\ground.txt

pause
