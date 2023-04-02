const Calculate = () =>{

const AmountGST = document.getElementById('netvalueinput');

const GSTrateCAL = document.getElementById('GSTrateinput');

const GSTtotalvalue = document.getElementById('Gstoutput');

const Grosstotalvalue = document.getElementById('Grossoutput');

const GrossVA = Number(AmountGST.value);

const RateGST = Number(GSTrateCAL.value);

const total = Number(GrossVA*RateGST)/100;

const totalGross = total + GrossVA;

GSTtotalvalue.innerText = `₹${total.toLocaleString("en-US")}`

Grosstotalvalue.innerText = `₹${totalGross.toLocaleString("en-US")}`

}
