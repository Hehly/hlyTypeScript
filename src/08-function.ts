/**
 * function
 */

export {

}

// 参数类型
function func1(a:number, b:string) : string {
    return a + b;
}

// 可选参数 问号
function func2(a:number, b:string,c?:number) : string {
    return a + b;
}

// 默认10 最后位置 a:number = 10
function func3( b:string,c?:number,a:number = 1000) : string {
    return a + b;
}