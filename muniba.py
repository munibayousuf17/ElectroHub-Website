"""i = 1 ; num=2
while i<=10:
    print(num ," x " , i ," = " , num*i) 
    i=i+1

list = [1,4,56,89,89]
i=0
while i< len(list):
    print(list[i])
    i=i+1

i=1 
while i<=5:
    print(i)
    i=i+1
    if(i==3):
        i=i+1
        continue

str = "Muniba"
for char in str:
    print(char)
   
idx =0
x=98
num = (2,87,98,56,87,98)
for nums in num:
    if(nums==x):
        print("Number found at index", idx)
    idx=idx+1

for seq in range(10):
    print(seq)

for i in range (101,0,-1):
    print(i)

n=5; sum=0
for i in range(1, n+1):
    sum+=i
print (sum)

n=5; fact=1
for i in range(1, n+1):
    fact*=i
 
print(fact)

def sum(a,b):
    s=a+b
    print(s)
    return s
sum(2,3)"""

def fact(n):
    if(n==0 or n==1):
        return 1
    return (n*(fact(n-1)))

print(fact(5))

def sum(n):
    if(n==0):
        return 0
    return n+ sum(n-1)

print (sum(5))

list = ["muniba", "yousuf", "khan"]

def list_print(list, idx=0):
    if idx==len(list):
        return
    print(list[idx])
    list_print(list, idx+1)
    return list

list_print(list)

f= open("demo.txt","r")
data = f.read()
print(data)
f.close()