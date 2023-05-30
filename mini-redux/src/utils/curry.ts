export function curry(fn:Function,...args:IArguments[]){
    let length = fn.length
    args = args || []
    return function(this:void){
        let subArgs = args.slice(0)
        for(let i = 0;i<arguments.length;i++){
            subArgs.push(arguments[i])
        }
        if(subArgs.length>=length){
            return fn.apply(this,subArgs)
        }else{
            return curry.call(this,fn,subArgs)
        }
    }
}
