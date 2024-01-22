md tmp
md out

certutil -f -encode sample1.png tmp\1.txt
certutil -f -encode sample2.png tmp\2.txt

type tmp\1.txt | dataurl png > out\sample1.txt
type tmp\2.txt | dataurl png > out\sample2.txt

pause
