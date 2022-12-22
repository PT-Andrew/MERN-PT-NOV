var isValid = function(s) {
    //   loop through string
    // needs an equal number of each character and its match to be true
    // must have even number of characters
    // if first character is a closing bracket, string is immediately false
    
        // map.set
        // map.get
        // map.has()
    
        // stacks and queues
    
        let map = new Map()
        map.set('(',')')
        map.set('{','}')
        map.set('[',']')
    
        let stack = []

        console.log(map.has(')'))
    
        for(let i=0;i<s.length;i++){
            // is this an opening or closing bracket?
            if(map.has(s[i])){
                stack.push(s[i])
                console.log("stack:",stack)
            }else{
                let item = stack.pop()
                if(s[i] !== map.get(item)){
                    return false
                }
            }
        }
    };


    let arr1 = ['(','{','}',')']
    let arr2 = ['{',')']

    isValid(arr1)
    isValid(arr2)