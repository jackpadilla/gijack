program fibonacci;
funcion int fibo(int n) {
  if (n < 2) {
   
    return 1;
  } else {
    int n1;
    int n2;
    n1 = fibo(n - 1);
    
    n2 = fibo(n - 2);
    
	int res;
  res=0;
res=n1+n2;
  print("res");
  print(res);

    return res;
  }
}
int main {
  int lista[3];
  int i=0;
  lista[i]=2+1;
  int n = 0;
  int respuesta=0;

  for(n=0;n <= 4;n=n+1;)
  {
    
    
    respuesta=fibo(n);
    print("respuesta final");
    print(respuesta);
    
  }
}
