// Spec: If %3 == 0 print "Fizz", %5 == 0, print "Buzz", otherwise print number

function verify(condition, message) {
    if(!condition) {
        throw new Error(message);
    }
}

exports.fizzbuzz = (start, end, output = console.log) =>
{
    verify(start > 0 && end > 0, "start or end are not positive integers");
    verify(start < end, "end must be greater than start");

    for(var i = start; i <= end; ++i) {

        var printed = false;
        if(i % 3 == 0){
            output("Fizz");
            printed = true;
        }
        if(i % 5 == 0) {
            output("Buzz");
            printed = true;
        }

        if(!printed) {
            output(i);
        }
    }
}
