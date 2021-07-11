
function Name1() {
    var name1 = document.getElementById("Name").value;
    if(name1.length<4){
    
    document.getElementById("err").innerHTML="enter your name" ;
    document.getElementById("err").style.width="300px"
    document.getElementById("err").style.border="1px solid #000"
    document.getElementById("err").style.fontSize="25px"
    document.getElementById("err").style.background="#f00"
    document.getElementById("err").style.borderRadius="10px"
    }
    else{
        document.getElementById("err").style.display="none"
        document.getElementById("fixed").innerHTML="اهلا بك يا";
        document.getElementById("name2").innerHTML=name1;
        let arr=["لا تحلم إني أقولك عيــــــــدسعيــــــدلكن بقولك شي واحد(أنت سعادة كل عيد)"
        ,"بمناسبة عيد الاضحى حبيت أكون أول واحد يقولك عندكو خروف زيادة؟"
        ,"كل عام وأنت إلى الرحمن أقرب كل عام وصحائف أعمالك بالحسنات اثقل .. كل عام وهمتك للجنة تكبر"
        ,"ادعو من اقسم بالفجر والليالي العشر أن يسعدك مدى الدهر ويشفع فيك محمد عند الحشر *ويبارك لك* * * في * * *شهر النحر* وكل عام وانتم بخير"
        ,"الا ياعقد من الماس .. الا ياللي القمر جارك .. اقولك قبل كل الناس .. يجعل عيدك مبارك"
        ,"باقة ازهار وورود .. وسلة بخور وعود .. والعيد عليكم يعود .. وكل عام وانتم بخير"
        ,"قبل زحمة السير وقبل رسايل الغير والإرسال لسه بخير كل عام وأنتم بخير" ]
        // console.log(arr.length)
        // console.log(arr[Math.floor(Math.random()*arr.length)])
        document.getElementById("Aid").innerHTML=arr[Math.floor(Math.random()*arr.length)];

    }
}
