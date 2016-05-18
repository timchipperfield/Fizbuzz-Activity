require './lib/fizzbuzz'

describe 'fizzbuzz' do 
  it 'returns "fizz" when passed 3' do
    expect(fizzbuzz(3)).to eq 'fizz'
    expect(fizzbuzz(9)).to eq 'fizz'
    end
  it 'returns "buzz" when passed 5' do
    expect(fizzbuzz(5)).to eq 'buzz'
    expect(fizzbuzz(20)).to eq 'buzz'
  end
  it 'gives an "Error" when passed a non integer or integer below 0' do
  expect(fizzbuzz(-2)).to eq "ERROR Give me an integer from zero to 100"
  expect(fizzbuzz("happy")).to eq "ERROR Give me an integer from zero to 100"
  expect(fizzbuzz('')).to eq "ERROR Give me an integer from zero to 100"
  expect(fizzbuzz(5.6)).to eq "ERROR Give me an integer from zero to 100"
  end
  it 'returns "fizzbuzz" when passed an integer divisible by 3 & 5' do
  expect(fizzbuzz(15)).to eq 'fizzbuzz'
  expect(fizzbuzz(30)).to eq 'fizzbuzz'
end
end