nameofthestudentarray=[];
    function submit()
    {
        var displaystudentname = [];
        for (var j = 1; j <= 4; j++)
        {
            var name_of_the_student  = document.getElementById("name_of_the_student_"+j).value; 
            console.log(name_of_the_student);
            nameofthestudentarray.push(name_of_the_student); 
        }
        console.log(nameofthestudentarray);

        var length_of_name_of_student_array = nameofthestudentarray.length;
        console.log(length_of_name_of_student_array);

        for (var k = 0; k < length_of_name_of_student_array; k++)
        {
            display_student_array.push("<h4>NAME - "+ nameofthestudentarray[k] + "</h4>");
            console.log(displaystudentname);
        }
        console.log(displaystudentname);
        document.getElementById("displaynamewithcommas").innerHTML = displaystudentname;

        var remove_commas = displaystudentname.join(" ");
        console.log(remove_commas);
        document.getElementById("diplaynamewithoutcommas").innerHTML = remove_commas
        
        document.getElementById("btnsubmit").style.display = "none";
        document.getElementById("sortbutton").style.display = "inline-block";
    }

function sort()
{
    nameofthestudentarray.sort();
    console.log(nameofthestudentarray);
    
    var display_student_array_sorting = [];

    var length_of_name_of_student_array = nameofthestudentarray.length;
    console.log(length_of_name_of_student_array)

    for (var k = 0; k < length_of_name_of_student_array; k++)
    {
        display_student_array_sorting.push("<h4>NAME - " + nameofthestudentarray[k] + "/h4");
        console.log(display_student_array_sorting);
    }

    var remove_commas = display_student_array_sorting.join(" ");
    console.log(remove_commas)

    document.getElementById("diplaynamewithoutcommas").innerHTML = remove_commas;
}