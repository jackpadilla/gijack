program meep;
int main{
  int i = 0;
  for(i = 0; 1<10;i=i+1;) {
    print(i);

   }
  while (i>0) {
    print(i);
    i = i-1;
  }
  do {
    print(i);
    i = i-1;
  }
  while (i<10);

}