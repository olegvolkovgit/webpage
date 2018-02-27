var API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImEzMjVlMmU2YTViNzFlMmMzM2FlYTY5Mzk1OTI2MjBiMTVkM2IyZjgzZGQyNDE5NzE0NWYzN2U3MDE5OTBjMTU2M2I5ZTYyZjA3ODcwYmZiIn0.eyJhdWQiOiIxMCIsImp0aSI6ImEzMjVlMmU2YTViNzFlMmMzM2FlYTY5Mzk1OTI2MjBiMTVkM2IyZjgzZGQyNDE5NzE0NWYzN2U3MDE5OTBjMTU2M2I5ZTYyZjA3ODcwYmZiIiwiaWF0IjoxNTEyOTc1MjUxLCJuYmYiOjE1MTI5NzUyNTEsImV4cCI6MTgyODUwODA1MSwic3ViIjoiNzcyIiwic2NvcGVzIjpbInVzZXJCYXNlSW5mbyIsInVzZXJEZXRhaWxlZEluZm8iLCJ1c2VyQ291cnNlSW5mbyJdfQ.W2lgDFnFS6HAOOraAF9tiGHdnIxDdGIYOCaIOnAFraELbowysOPOqcgJ8Op0cf7KZlTXY6KCswZXtkBkMRJRjXrl46-mH3R8ZxueIKSt-TOt9KVNFIuYkdO3kbvY-D8Sli2k5Pzv04wBFOnqydXT2ehrJ5TfxdxwTbazo4KOGARMoMEHirULnFVrjg6Cglr9XOeq1w1FBYlzXNZaGu5JE5bLFoygNx5KyqMd4WuAym8vbsuSm20W_8LJ5H0w2dfiDzq4HlMW8KInxDz2kSt2dg34y5VKyY3wqhSUxfKaS_tlAOg9pPTWsHt-nTMP_wH_h2KwYNp9sothrbCEb38rJXuZygNhdSMvItOLBuOtUSx0IkLw8lCrqKS9lTNPi4fX1j7J_3WPbKJoNAi8EN3ziWRa4PgWkx5FUCm3oCh02t7lkDfRVI5nriqmUzbqalwrhS0HXxlS06eLIcjnrx88aw0iGpDqEn8NiDZ7UL-2Ywk50rjI0WWw43dCL1mwQRDsiGN4NT9al2auMokWIx1UBf-OaZEVZcYgafK_04Rrblnl4l2WvIhi87C2MjluCSNBkU6K8UqDqicV1vYubLJVnxFyI1IApOvBHsAAXzFWfhaJLXt6MCeTWOL7zGcDVGf4GFLRsBXUsgIJ8LOxJtyUykG8t3Adhzmm_L9YVlgFCBY';

var client = new INTITAClient({
key : API_KEY,
});
var avatar_p;
client.getUserDetails(function (error, data) {
//console.log(data);
document.getElementById("name").innerHTML = data.firstName;
document.getElementById("surname").innerHTML = data.secondName;
document.getElementById("aboutMy").innerHTML = data.aboutMy;
document.getElementById("education").innerHTML = data.education;
document.getElementById("educationForm").innerHTML = data.educationForm;
document.getElementById("interests").innerHTML = data.interests;
document.getElementById("e-mail").innerHTML = data.email;
avatar_p = document.getElementById("avatar");
avatar_p.src = data.avatar;
});
client.getUserCoursesAndModules(function (error, data) {
  //console.log(error, data);
    var courseId = data.courses[0].id;

client.getCourseInfo(courseId, function (error, data) {
       // console.log(error, data);
        document.getElementById("title_ua").innerHTML = data.title_ua;
        document.getElementById("for_whom_ua").innerHTML = data.for_whom_ua;
        document.getElementById("what_you_get_ua").innerHTML = data.what_you_get_ua;
        document.getElementById("what_you_learn_ua").innerHTML = data.what_you_learn_ua;
    
        
        
    });
    client.getCourseModules(courseId, function (error, modules) {
      //console.log(error, modules);
        modules.forEach(function (module) {
            console.log(module.title);
            var course = document.getElementById("submenu");
            var Li = document.createElement("li");
            Li.innerHTML = module.title;
            Li.className = 'accordion-title btn-default';
            course.appendChild(Li);

            var Ullect = document.createElement("ul");
            Ullect.id = module.id;
            Li.appendChild(Ullect);

 var title = document.getElementsByClassName('accordion-title'),
    cont =document.getElementsByClassName('accordion-cont');
    for(var i = 0; i < title.length;i++){
        title[i].addEventListener('click',function(){
            if(!(this.classList.contains('active'))){
                 for(var i = 0; i < title.length;i++){
                    title[i].classList.remove('active');
                 }
                 this.classList.add('active');
            }

        })
    }

            client.getModuleLectures(module.id, function (error, lectures) {
              //console.log(error, lectures);
                lectures.forEach(function (lecture) {
                    console.log(lecture.title);
                    var Lilect = document.createElement("li");
                    Lilect.id = lecture.id;
                    Lilect.innerHTML = lecture.title;
                    Ullect.className = 'accordion-cont';
                    Ullect.appendChild(Lilect);
                });
            });
        })
    })

});