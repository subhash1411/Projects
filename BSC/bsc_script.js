
//This Function is for Calculating 1st Sem of BSC
function Bscsem1()
{
    // Accesing Form Values
    var s1 = document.FORM.ENG.value, s2 = document.FORM.TLG.value;  // English & Telugu
    var s3 = document.FORM.EA.value, s4 = document.FORM.ES.value; // Electronic Application & Enterpreneurship
    var s5 = document.FORM.sub1.value;  // Mathematics
    var s6 = document.FORM.sub2.value, s7 = document.FORM.sub2P.value;  // Core Subject & Practical
    var s8 = document.FORM.sub3.value, s9 = document.FORM.sub3P.value;  // Computers & Practical

    //Typecasting & Adding of All the Credits
    var s = (3*parseInt(s1)) + (3*parseInt(s2));  // English & Telugu
        s += (2*parseInt(s3)) + (2*parseInt(s4));  // Electronic Application & Enterpreneurshi
        s +=  (4*parseInt(s5)) + (4*parseInt(s6)) + parseInt(s7) + (4*parseInt(s8)) + parseInt(s9);   // Main Subjects

    if (s)  // Checking Condtion, If they Fail or Not
    {
        alert("1st Semister CGPA ="+(s/24));
    }
    else
    {
        alert("You are FAIL in Examination  \n                    (OR)\n You Entered Wrong Grades");
    }
    
}

//This Function is for Calculating 2nd Sem of BSC
function Bscsem2()
{
    // Accessing Form Values
    var s1 = document.FORM.ENG.value, s2 = document.FORM.TLG.value;  // English & Telugu
    var s3 = document.FORM.ICT.value, s4 = document.FORM.SR.value, s5 = document.FORM.BS.value;  // ICT, Survey & Business Comm
    var s6 = document.FORM.sub1.value;  // Mathematics
    var s7 = document.FORM.sub2.value, s8 = document.FORM.sub2P.value;  // Core Subject & Practical
    var s9 = document.FORM.sub3.value, s10 = document.FORM.sub3P.value;  // Computers & Practical
 
    //Typecasting & Adding of All the Credits
    var s = (3*parseInt(s1)) + (3*parseInt(s2));   // English & Telugu
        s += (2*parseInt(s3)) + (2*parseInt(s4)) + (2*parseInt(s5));   // ICT, Survey & Business Comm
        s += (4*parseInt(s6)) + (4*parseInt(s7)) + parseInt(s8) + (4*parseInt(s9)) + parseInt(s10);   // Main Subjects

    if (s)  // Checking Condtion, If they Fail or Not
    {
        alert("2nd Semister CGPA ="+(s/26));
    }
    else
    {
        alert("You are FAIL in Examination  \n                    (OR)\n You Entered Wrong Grades");
    }
    
}

//This Function is for Calculating 3rd Sem of BSC
function Bscsem3()
{
    // Accessing Form Values
    var s1 = document.FORM.ENG.value, s2=document.FORM.TLG.value;  // English & Telugu
    var s3 = document.FORM.EE.value, s4 = document.FORM.AS.value, s5=document.FORM.OB.value;  // Environmental, CRT, Online Business
    var s6 = document.FORM.sub1.value;  // Mathematics
    var s7 = document.FORM.sub2.value, s8 = document.FORM.sub2P.value;  // Core Subject & Practical
    var s9 = document.FORM.sub3.value, s10 = document.FORM.sub3P.value;  // Computers & Practical

    //Typecasting & Adding of All the Credits
    var s = (3*parseInt(s1)) + (3*parseInt(s2));   // English & Telugu
        s += (2*parseInt(s3)) + (2*parseInt(s4)) + (2*parseInt(s5));   // Environmental, CRT, Online Business
        s += (4*parseInt(s6)) + (4*parseInt(s7)) + parseInt(s8) + (4*parseInt(s9)) + parseInt(s10);   // Main Subjects


    if (s)  // Checking Condtion, If they Fail or Not
    {
        alert("3rd Semister CGPA ="+(s/26));
        return 0;
    }
    else
    {
        alert("You are FAIL in Examination  \n                    (OR)\n You Entered Wrong Grades");
    }
    
}

//This Function is for Calculating 4th Sem of BSC
function Bscsem4()
{
    // Accessing Form Values
    var s1 = document.FORM.sub1.value, s2 = document.FORM.sub2.value;  // Mathematics - I & II
    var s3 = document.FORM.sub3.value, s4 = document.FORM.sub3P.value;  // Core Subject - I & Practical
    var s5 = document.FORM.sub4.value, s6 = document.FORM.sub4P.value;  // Core Subject - II & Practical
    var s7 = document.FORM.sub5.value, s8  = document.FORM.sub5P.value; // Computers - I & Practical
    var s9 = document.FORM.sub6.value, s10 = document.FORM.sub6P.value;  // Computers - II & Practical

    // Adding of all the Credits
    var s = (4*parseInt(s1)) + (4*parseInt(s2));  // Mathematics
        s += (4*parseInt(s3)) + parseInt(s4) + (4*parseInt(s5)) + parseInt(s6);  //Core Subjects & Practicals
        s += (4*parseInt(s7))+parseInt(s8)+(4*parseInt(s9))+parseInt(s10);  // Computer Sciences & Practicals

    if (s)  // Checking Condtion, If they Fail or Not
    {
        alert("4th Semister CGPA ="+(s/28));
    }
    else
    {
        alert("You are FAIL in Examination  \n                    (OR)\n You Entered Wrong Grades");
    }
    
}

//This Function is for Calculating 5th Sem of BSC
function Bscsem5()
{
    // Accessing Form Values
    var s1 = document.FORM.sub1.value, s2 = document.FORM.sub2.value;  // Mathematics - I & II
    var s3 = document.FORM.sub3.value, s4 = document.FORM.sub3P.value;  // Core Subject - I & Practical
    var s5 = document.FORM.sub4.value, s6 = document.FORM.sub4P.value;  // Core Subject - II & Practical
    var s7 = document.FORM.sub5.value, s8  = document.FORM.sub5P.value; // Computers - I & Practical
    var s9 = document.FORM.sub6.value, s10 = document.FORM.sub6P.value;  // Computers - II & Practical

    // Adding of all the Credits
    var s = (4*parseInt(s1)) + (4*parseInt(s2));  // Mathematics
        s += (4*parseInt(s3)) + parseInt(s4) + (4*parseInt(s5)) + parseInt(s6);  //Core Subjects & Practicals
        s += (4*parseInt(s7))+parseInt(s8)+(4*parseInt(s9))+parseInt(s10);  // Computer Sciences & Practicals

    if (s)  // Checking Condtion, If they Fail or Not
    {
        alert("5th Semister CGPA ="+(s/28));
    }
    else
    {
        alert("You are FAIL in Examination  \n                    (OR)\n You Entered Wrong Grades");
    }
    
}