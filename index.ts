const last = <T>(array:T[])=>{
    return array[array.length - 1]
}

last([1,2,3,4])
last(['a','b','c','d'])
last([true,false,true,false])


interface Info <T>{
    phoneNumber: T
    id: T
    age: T
}

const info:Info <number> = {
    phoneNumber : 119766424,
    id: 45353,
    age: 25
}

const infoStr:Info <string> = {
    phoneNumber: '11664644',
    id: '34242',
    age: '20'
}

const arrdbl = <T=number,Y=string>(a:T,b:Y)=>{
    return [a,b]
}

arrdbl<number,string>(1,'f')


// generics in a react component
type FC <T> = (props:T)=> {element: T}

interface Props {
    title: string
    content: string
}


const app:FC<Props> = (props)=>{
    return {element: props}
}

