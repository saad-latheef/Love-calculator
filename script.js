document.getElementById("calculateBtn").addEventListener("click",function(){
    var name1 = document.getElementById('inp').value;
    var name2 = document.getElementById('inp1').value;
    var love = 'loves'
    var namesum = name1+love+name2;
    var namelen = namesum.length;
    let count = 0
    let numbers = ''
    for (let i =0; i<namelen ; i++ ){
        count =  namesum.length - namesum.replaceAll(namesum.charAt(i), '').length;
        let count1 = count.toString();
        numbers = numbers + count1
    }
    var numlen = numbers.length

    while (numlen>2){
        console.log(numbers)
        let n1 = parseInt(numbers.charAt(numbers.length - 1),10);
        let n2 = parseInt(numbers.charAt(numbers.length - 2),10);
        numbers = numbers.slice(0, -1);
        numbers = numbers.slice(0, -1); 
        let n3 = n1+n2
        
        n3 = n3.toString()
        numbers = numbers + n3
        numlen = numbers.length
        if (numlen>2){
            let n4 = parseInt(numbers.charAt(0),10);
            let n5 = parseInt(numbers.charAt(0),10);
            numbers = numbers.slice(1);
            numbers = numbers.slice(1); 
            let n6 = n4+n5
            
            n6 = n6.toString()
            numbers = n6 + numbers
            numlen = numbers.length
        }
    }
    const lovePercentage=numbers;
    document.getElementById("result").innerText="Your Love Percentage Is: "+lovePercentage;
});




