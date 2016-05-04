program meep;
int main{
  int meep[5];
  int n;
  int c;
  int d;
  int dato;
  int swap;
  int i;
   n=5;
   meep[0]=1;
   meep[1]=-3;
   meep[2]=4;
   meep[3]=2;
   meep[4]=5;



  
  print("antes del sort");

for (i = 0; i < 5; i = i + 1;)
  {
    print(meep[i]);
  }
  for (c = 0 ; c < ( n - 1 ); c=c+1;)
  {
    for (d = 0 ; d < n - c - 1; d=d+1;)
    {
      if (meep[d] > meep[d+1]) 
      {
        swap       = meep[d];
        meep[d]   = meep[d+1];
        meep[d+1] = swap;
      }
    }
  }

  print("post del sort");
  for (i = 0; i < 5; i = i + 1;)
  {
    print(meep[i]);
  }

}
