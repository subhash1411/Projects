
//This Function is for Calculating 1st Sem of BCA
function Bcasem1()
{
    // Accesing Form Values
    var s1 = document.FORM.ENG.value, s2 = document.FORM.TLG.value;  // English & Telugu
    var s3 = document.FORM.EA.value, s4 = document.FORM.ES.value;  // Electronic Application & Enterpreneurship
    var s5 = document.FORM.CFOT.value, s6 = document.FORM.CFOTP.value;  // Computer Fundamental Office Tools & Practical
    var s7 = document.FORM.CLANG.value, s8 = document.FORM.CLANGP.value;  // C-Language & Practical
    var s9 = document.FORM.NMS.value, s10 = document.FORM.NMSP.value;  // Numerical and Mathematical Statitics & Practical

    //Typecasting & Adding of All the Credits
    var s = (3*parseInt(s1)) + (3*parseInt(s2));  // English & Telugu
        s += (2*parseInt(s3)) + (2*parseInt(s4));  // Electronic Application & Enterpreneurship
        s += (4*parseInt(s5)) + parseInt(s6) + (4*parseInt(s7)) + parseInt(s8) + (4*parseInt(s9)) + parseInt(s10);  //Core Subjects

    if (s)  // Checking Condtion, If they Fail or Not
    {
        alert("1st Semister CGPA ="+(s/25));
    }
    else
    {
        alert("You are FAIL in Examination  \n                    (OR)\n You Entered Wrong Grades");
    }
    
}

//This Function is for Calculating 2nd Sem of BCA
function Bcasem2()
{
     // Accesing Form Values
    var s1 = document.FORM.ENG.value, s2 = document.FORM.TLG.value;  // English & Telugu
    var s3 = document.FORM.ICT.value, s4 = document.FORM.SR.value, s5 = document.FORM.BS.value; // ICT, Survey & Business Comm
    var s6 = document.FORM.DS.value, s7 = document.FORM.DSP.value;  // Data Structures & Practical
    var s8 = document.FORM.PY.value, s9 = document.FORM.PYP.value;  // Python & Practical
    var s10 = document.FORM.DBMS.value, s11 = document.FORM.DBMSP.value;  // DBMS & Practical

    //Typecasting & Adding of All the Credits
    var s = (3*parseInt(s1)) + (3*parseInt(s2));  // English & Telugu
        s += (2*parseInt(s3)) + (2*parseInt(s4)) + (2*parseInt(s5));  // ICT, Survey & Business Comm
        s += (4*parseInt(s6)) + parseInt(s7) + (4*parseInt(s8)) + parseInt(s9) + (4*parseInt(s10)) + parseInt(s11);  //Main Subjects

    if (s)  // Checking Condtion, If they Fail or Not
    {
        alert("2nd Semister CGPA ="+(s/27));
    }
    else
    {
        alert("You are FAIL in Examination  \n                    (OR)\n You Entered Wrong Grades");
    }
    
}

//This Function is for Calculating 3rd Sem of BCA
function Bcasem3()
{
     // Accesing Form Values
    var s1 = document.FORM.ENG.value, s2 = document.FORM.TLG.value;  // English & Telugu
    var s3 = document.FORM.EE.value, s4 = document.FORM.AS.value, s5 = document.FORM.OB.value;  // Environmental, CRT, Online Business
    var s6 = document.FORM.AFM.value, s7 = document.FORM.AFMP.value;  // Accounting and Financial Management & Practical
    var s8 = document.FORM.JAVA.value, s9 = document.FORM.JAVAP.value; // Java & Practical
    var s10 = document.FORM.OS.value, s11 = document.FORM.OSP.value;  // Operating System & Practical

    //Typecasting & Adding of All the Credits
    var s = (3*parseInt(s1)) + (3*parseInt(s2));  // English & Telugu
        s += (2*parseInt(s3)) + (2*parseInt(s4)) + (2*parseInt(s5));  // Environmental, CRT, Online Business
        s += (4*parseInt(s6)) + parseInt(s7) + (4*parseInt(s8)) + parseInt(s9) + (4*parseInt(s10)) + parseInt(s11);  //Main Subjects

    if (s)  // Checking Condtion, If they Fail or Not
    {
        alert("3rd Semister CGPA ="+(s/27));
        return 0;
    }
    else
    {
        alert("You are FAIL in Examination  \n                    (OR)\n You Entered Wrong Grades");
    }
    
}

//This Function is for Calculating 4th Sem of BCA
function Bcasem4()
{
    // Accesing Form Values
    var s1 = document.FORM.CL.value, s2 = document.FORM.CLP.value;  // Cyber Law & Practical
    var s3 = document.FORM.DMW.value, s4 = document.FORM.DMWP.value;  // Data Minning and Warehousing & Practical
    var s5 = document.FORM.WP.value, s6 = document.FORM.WPP.value;  // Web Programming & Practical
    var s7 = document.FORM.DCN.value, s8 = document.FORM.DCNP.value;  // Data Communication and Networking & Practical
    var s9 = document.FORM.R.value, s10 = document.FORM.RP.value;  // Data Analytics Using R  & Practical
    var s11 = document.FORM.OOSE.value, s12 = document.FORM.OOSEP.value;  // Object Oriented<br>Software Engineering & Practical

    //Typecasting & Adding of All the Credits
    var s = (4*parseInt(s1)) + parseInt(s2) + (4*parseInt(s3)) + parseInt(s4);  // CyberLaw & DMW
        s += (4*parseInt(s5)) + parseInt(s6) + (4*parseInt(s7)) + parseInt(s8);  // WebPro & DCN
        s += (4*parseInt(s9)) + parseInt(s10) + (4*parseInt(s11)) + parseInt(s12);  // DAR & OOSE


    if (s)  // Checking Condtion, If they Fail or Not
    {
        alert("4th Semister CGPA ="+(s/30));
    }
    else
    {
        alert("You are FAIL in Examination  \n                    (OR)\n You Entered Wrong Grades");
    }
    
}

//This Function is for Calculating 5th Sem of BCA
function Bcasem5()
{
    // Accesing Form Values
    var s1 = document.FORM.MLP.value, s2 = document.FORM.MLPP.value;  // Machine Learning using Python & Practical
    var s3 = document.FORM.DI.value, s4 = document.FORM.DIP.value;  // Digital Imaging & Practical
    var s5 = document.FORM.CS.value, s6 = document.FORM.CSP.value;  // Cyber Security and Malware Analytics & Practical
    var s7 = document.FORM.IT.value, s8 = document.FORM.ITP.value;  // Internet Of Things & Practical
    var s9 = document.FORM.MAD.value, s10 = document.FORM.MADP.value;  // Mobile Application Development & Practical
    var s11 = document.FORM.PCHN.value,s12 = document.FORM.PCHNP.value;  // PC Hardware and Networking & Practical

    //Typecasting & Adding of All the Credits
    var s = (4*parseInt(s1)) + parseInt(s2) + (4*parseInt(s3)) + parseInt(s4); // MLP & DI
        s += (4*parseInt(s5)) + parseInt(s6) +  (4*parseInt(s7)) + parseInt(s8); // CSA & IOT
        s += (4*parseInt(s9)) + parseInt(s10) + (4*parseInt(s11)) + parseInt(s12); // MAD & PCH N

    if (s)  // Checking Condtion, If they Fail or Not
    {
        alert("5th Semister CGPA ="+(s/30));
    }
    else
    {
        alert("You are FAIL in Examination  \n                    (OR)\n You Entered Wrong Grades");
    }
    
}