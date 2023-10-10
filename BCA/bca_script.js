
//This Function is for Calculating 1st Sem of BCA
function Bcasem1()
{
    var s1=document.FSEM.ENG.value,s2=document.FSEM.TLG.value,s3=document.FSEM.EA.value,s4=document.FSEM.ES.value;
    var s5=document.FSEM.CFOT.value,s6=document.FSEM.CFOTP.value,s7=document.FSEM.CLANG.value;
    var s8=document.FSEM.CLANGP.value,s9=document.FSEM.NMS.value,s10=document.FSEM.NMSP.value;
    var s=(3*parseInt(s1))+(3*parseInt(s2))+(2*parseInt(s3))+(2*parseInt(s4))+(4*parseInt(s5));
    s+=parseInt(s6)+(4*parseInt(s7))+parseInt(s8)+(4*parseInt(s9))+parseInt(s10);
    if (s)
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
    var s1=document.FSEM.ENG.value,s2=document.FSEM.TLG.value,s3=document.FSEM.ICT.value;
    var s4=document.FSEM.SR.value,s5=document.FSEM.BS.value;
    var s6=document.FSEM.DS.value,s7=document.FSEM.DSP.value,s8=document.FSEM.PY.value;
    var s9=document.FSEM.PYP.value,s10=document.FSEM.DBMS.value,s11=document.FSEM.DBMSP.value;
    var s=(3*parseInt(s1))+(3*parseInt(s2))+(2*parseInt(s3))+(2*parseInt(s4))+(2*parseInt(s5));
    s+=(4*parseInt(s6))+parseInt(s7)+(4*parseInt(s8))+parseInt(s9)+(4*parseInt(s10))+parseInt(s11);
    if (s)
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
    var s1=document.FSEM.ENG.value,s2=document.FSEM.TLG.value,s3=document.FSEM.EE.value;
    var s4=document.FSEM.AS.value,s5=document.FSEM.OB.value;
    var s6=document.FSEM.AFM.value,s7=document.FSEM.AFMP.value,s8=document.FSEM.JAVA.value;
    var s9=document.FSEM.JAVAP.value,s10=document.FSEM.OS.value,s11=document.FSEM.OSP.value;
    var s=(3*parseInt(s1))+(3*parseInt(s2))+(2*parseInt(s3))+(2*parseInt(s4))+(2*parseInt(s5));
    s+=(4*parseInt(s6))+parseInt(s7)+(4*parseInt(s8))+parseInt(s9)+(4*parseInt(s10))+parseInt(s11);
    if (s)
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
    var s1=document.FSEM.CL.value,s2=document.FSEM.CLP.value,s3=document.FSEM.DMW.value;
    var s4=document.FSEM.DMWP.value,s5=document.FSEM.WP.value,s6=document.FSEM.WPP.value;
    var s7=document.FSEM.DCN.value,s8=document.FSEM.DCNP.value,s9=document.FSEM.R.value;
    var s10=document.FSEM.RP.value,s11=document.FSEM.OOSE.value,s12=document.FSEM.OOSEP.value;
    var s=(4*parseInt(s1))+parseInt(s2)+(4*parseInt(s3))+parseInt(s4)+(4*parseInt(s5))+parseInt(s6);
    s+=(4*parseInt(s7))+parseInt(s8)+(4*parseInt(s9))+parseInt(s10)+(4*parseInt(s11))+parseInt(s12);
    if (s)
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
    var s1=document.FSEM.MLP.value,s2=document.FSEM.MLPP.value,s3=document.FSEM.DI.value;
    var s4=document.FSEM.DIP.value,s5=document.FSEM.CS.value,s6=document.FSEM.CSP.value;
    var s7=document.FSEM.IT.value,s8=document.FSEM.ITP.value,s9=document.FSEM.MAD.value;
    var s10=document.FSEM.MADP.value,s11=document.FSEM.PCHN.value,s12=document.FSEM.PCHNP.value;
    var s=(4*parseInt(s1))+parseInt(s2)+(4*parseInt(s3))+parseInt(s4)+(4*parseInt(s5))+parseInt(s6);
    s+=(4*parseInt(s7))+parseInt(s8)+(4*parseInt(s9))+parseInt(s10)+(4*parseInt(s11))+parseInt(s12);
    if (s)
    {
        alert("4th Semister CGPA ="+(s/30));
    }
    else
    {
        alert("You are FAIL in Examination  \n                    (OR)\n You Entered Wrong Grades");
    }
    
}