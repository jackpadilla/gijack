program meep;
funcion int fun (int x){
  if (x < 5) {
    print(x);
    print("menor");
  } else {
    print(x);
    print("mayor");
  }

}
int main{
  int x;
  x = 0;
  bool f;
  f = .TRUE;
  while (f) {
    fun(x);
    x = x+1;
    if (x > 10) {
      f = .FALSE;
    }
  }

}