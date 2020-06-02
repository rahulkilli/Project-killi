let Queen;
function queen(direction, position) {  //Constructor
    this.direction = direction;
    this.position = position;
}
//Object
let q = new queen("N", [0, 0]);
let positionlog = [                                 //To trace the position of the queen
    ["A8","B8","C8","D8","E8","F8","G8","H8"],
    ["A7","B7","C7","D7","E7","F7","G7","H7"],
    ["A6","B6","C6","D6","E6","F6","G6","H6"],
    ["A5","B5","C5","D5","E5","F5","G5","H5"],
    ["A4","B4","C4","D4","E4","F4","G4","H4"],
    ["A3","B3","C3","D3","E3","F3","G3","H3"],
    ["A2","B2","C2","D2","E2","F2","G2","H2"],
    ["A1","B1","C1","D1","E1","F1","G1","H1"],
    ["A0","B0","C0","D0","E0","F0","G0","H0"],
];

function queen_coin() {
    var dir = ["N","S","E","W","NE","NW","SE","SW"];
    let userdir = prompt("Enter the direction and number of steps to move the queen");
    let num = userdir.slice(-1);
    num = parseInt(num);
    let newdir = userdir.slice(0, -1);
    changedir(newdir, num)
}
function changedir(newdir, num) {
    x = q.pos[0];
    y = q.pos[1];
}
var text;
        switch(newdir){
            case 'E':
                if(x+num>=7) {
                    alert("Oops! you have entered outside the boundary");
                    return;
                }
                else{
                    x += num;
                    text = "You have moved queen "+num+" steps to East";
                    break;
                }
            case 'W':
                if(x-num < 0){
                    alert("Oops! you have entered outside the boundary");
                    return;
                }
                else{
                    x -= num;
                    text = "You have moved queen "+num+" steps to West";
                    break;
                }
            case 'S':
                if(y + num >= 7){
                    alert("Oops! you have entered outside the boundary");
                    return;
                }
                else{
                    y += num;
                    text = "You have moved queen "+num+" steps to South";
                    break;
                }
            case 'N':
                if(y-num <0){
                    alert("Oops! you have entered outside the boundary");
                    return;
                }
                else{
                    x -= num;
                    text = "You have moved queen "+num+" steps to North";
                    break;
                }
            case 'NE':
                    if((x+num >= 8) && (x-num < 0)) {
                    alert("Oops! you have entered outside the boundary");
                    return;
                }
                else{
                    y -= num;
                    x += num;
                    text = "You have moved queen "+num+" steps to NorthEast";
                    break;
                }
            case 'NW':
                if((y-num < 0) && (x+num >= 7)) {
                    alert("Oops! you have entered outside the boundary");
                    return;
                }
                else{
                    y -= num;
                    x -= num;
                    text = "You have moved queen "+num+" steps to NorthWest";
                    break;
                }
            case 'SE':
                if((y+num >= 7) && (x+num >= 7)) {
                    alert("Oops! you have entered outside the boundary");
                    return;
                }
                else{
                    y += num;
                    x += num;
                    text = "You have moved queen "+num+" steps to SouthEast";
                    break;
                }
            case 'SW':
                if((y+num >= 7) && (x-num <= 0)) {
                    alert("Oops! you have entered outside the boundary");
                    return;
                }
                else{
                    y += num;
                    x -= num;
                    text = "You have moved queen "+num+" steps to SouthWest";
                    break;
                }
            default:
                alert("Oops! no direction as such"); 
        }

q.pos[0] = x;
q.pos[1] = y;
console.log(q.log[0],q.log[1]);
text = "Queen position now is", positionlog[q.pos[1]][q.pos[0]];