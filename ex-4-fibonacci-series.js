function fibonacciGenerator (n) {
        var output = [];
        var a =0;
        var b =1;
        if(n===1){
          output.push(a);
        }
        else if(n===2){
          output.push(a,b);
        }
        else{
          output.push(a,b);
          for(var i=3; i<=n; i++){
            var c = a+b;
            output.push(c);
            a = b;
            b = c;
          }
        }
        return output;
        
    }
    
    