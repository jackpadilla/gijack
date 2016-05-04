program meep;
int main{
  int meep[10];
  int i;

  for (i = 0; i < 10; i = i + 1;)
  {
    meep[i] = i;
  }

  for (i = 0; i < 10; i = i + 1;)
  {
    print(meep[i]);
  }

}
