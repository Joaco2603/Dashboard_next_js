


export default function transformFirstLetterToLowerCase(param: string) {
    if (!Number(param)) {
        console.log(param);
        param = param.charAt(0).toLowerCase() + param.slice(1);
        console.log(param);
    }
}