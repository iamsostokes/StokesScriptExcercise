var command="Pick a number between 1 and 8!";
var user=prompt(command);
var total=0;
var wrongnum="incorrect";
if (user<1){
  user=prompt(command);
}
if (user>=9){
  user=prompt(command);
}
for (var num=1; num<=user; num++) {
  total += num;
}

console.log(total);
