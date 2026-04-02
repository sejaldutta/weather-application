const input= document.querySelector("#placeholder")
const button=document.querySelector("#button")
const result=document.querySelector("#result")
const region=document.querySelector("#region")
const country=document.querySelector("#country")
const local=document.querySelector("#localtime")
const temp=document.querySelector("#temp")
const humidity=document.querySelector("#humidity")
const pm10=document.querySelector("#pm10")
const city=document.querySelector("#city")

async function getdata(city){
const data =await fetch(`http://api.weatherapi.com/v1/current.json?key=45d870aa17214d95919184014262001&q=${city}&aqi=yes
`);
return await data.json();
}
let clock;
button.addEventListener("click",async ()=>{
    const inputvalue=input.value
const finalresult = await getdata(inputvalue)
console.log(finalresult)
if(clock){
    clearInterval(clock)
}
const timez= finalresult.location.tz_id
clock=setInterval(()=>{
    const date= new Date();
    local.innerHTML=null;
    local.innerHTML= `LocalTime: ${date.toLocaleString("en-IN",{timeZone: `${timez}`})}`

},1000)
input.value=""
city.innerHTML=`City-Name: ${finalresult.location.name}`
region.innerHTML=`Region: ${finalresult.location.region}`
country.innerHTML=`Country: ${finalresult.location.country}`
temp.innerHTML=`Temp-C: ${finalresult.current.temp_c}`
humidity.innerHTML=`humidity: ${finalresult.current.humidity}`
pm10.innerHTML=`Pm10: ${finalresult.current.air_quality.pm10}`
})