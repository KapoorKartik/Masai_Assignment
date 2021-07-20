var num = 7;
var string = num.toString();
var out = "";
for (i = 0 ; i <string.length ; i++){
    switch (string[i]) {
        case "0":
           out = out + " Zero"
            break;
    case "1":
        out = out + " One"
    break;
    case "2":
    out = out + " Two"
    break;
    case "3":
    out = out + " Three"
    break;
    case "4":
    out = out + " Four"
    break;
    case "5":
    out = out + " Five"
    break;
    case "6":
    out = out + " Six"
    break;
    case "7":
    out = out + " Seven"
    break;
    case "8":
    out = out + " Eight"
    break;
    case "9":
    out = out + " Nine"
    break;
    
        default:
            break;
    }
}
console.log(out);