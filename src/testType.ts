type tUser = {
    value: string
}

function call<T extends tUser>(
    node: T,
    f: (value: string) => string
): T {
    return {
        ...node,
        value: f(node.value)
    }
}

type tInfo = {
    value: string,
    id: number
}

console.log(call<tInfo>(
    { value: "종민", id: 1 },
    (_v) => {
        console.log("_V",_v)
        return _v
    }
    )
)

console.log(call<number>(
    { value: "종민", id: 1 },
    (_v) => {
        console.log("_V",_v)
        return _v
    }
    )
)