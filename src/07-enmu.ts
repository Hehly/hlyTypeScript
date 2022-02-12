/**
 * 枚举
 */

export {};

enum PostStatus {
    errorStatus=0,
    successStatus =1,

}

console.log(PostStatus.errorStatus);

// 枚举编译会侵入代码 不会删除掉

const enum color { // 这样就好了 编译后不会保留
    color=1, 
    color2=2,
}
