def fizzbuzz num
  if num % 5 == 0 && num % 3 == 0
    'fizzbuzz'
  elsif num %5 == 0 
    'buzz'
  elsif num %3 == 0
    'fizz'
  elsif num.class != Integer || num < 0
    "ERROR Give me an integer from zero to 100"
  else
    num
  end
end