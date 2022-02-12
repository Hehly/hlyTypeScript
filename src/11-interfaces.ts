/**
 * 接口 类型添加声明约束
 */

interface valueType {
    color:string;
    list?:Array<any>
    title?:string // 可选
}

function func(value:valueType) {
    alert(value.color)
}

func({color:"#F00"})


// 添加任意类型的string的值
interface Cache {
    [prop: string] :string
}